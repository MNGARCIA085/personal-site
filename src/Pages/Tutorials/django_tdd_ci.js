import CodeBlock from "../../components/CodeBlock";





const Tutorial_Django_TDD_CI = () => {

    const model = `
from django.db import models

class Car(models.Model):
    marca = models.CharField(max_length=255)
    modelo = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.marca} : {self.modelo}"
    `

    const dummyview = `
from django.http import JsonResponse

def dummy(request):
   return JsonResponse({'msg':'hi'})
    `



    const dummyurl = `
from django.urls import path
from .views import dummy

urlpatterns = [
   path('dummy/',dummy, name="dummy"),
]
`

const urlinicial = `
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
   path('admin/', admin.site.urls),
   path('automotive/', include('automotive.urls')),
]
`


const testaddcar = `
import json
import pytest
from automotive.models import Car

@pytest.mark.django_db
def test_add_car(client):
   movies = Car.objects.all()
   assert len(movies) == 0

   resp = client.post(
       "/automotive/api/",
       {
           "marca": "Ferrari",
           "modelo": "Maranello",
       },
       content_type="application/json"
   )
   assert resp.status_code == 201
   assert resp.data["marca"] == "Ferrari"

   movies = Car.objects.all()
   assert len(movies) == 1`



   const serializers = `
from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
   class Meta:
       model = Car
       fields = '__all__'`


    const views = `
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Car
from .serializers import CarSerializer

class CarList(APIView):
   def post(self, request, format=None):
       serializer = CarSerializer(data=request.data)
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data, status=status.HTTP_201_CREATED)
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)`



    const urlsAPI = `
from django.urls import path
from .views import CarList

urlpatterns = [
   path("api/", CarList.as_view()),
]
`



const ci = `
name: Django CI

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      max-parallel: 4
      matrix:
        python-version: [3.8, 3.9]

    steps:
    - uses: actions/checkout@v3
    - name: Set up Python \$\{{ matrix.python-version }}
      uses: actions/setup-python@v3
      with:
        python-version: \$\{{ matrix.python-version }}
    - name: Install Dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run Tests
      run: |
        pytest
        `






    return (
            <div class="container-fluid col-md-8 offset-2" >



                <center><h2><b><font color='red'>TDD y CI con Django</font></b></h2></center>
                <hr></hr>



                <b><font color='blue'> <h3>TABLA DE CONTENIDO </h3></font></b><br></br>


                <a href="#inicio">1. Qué haremos</a> <br></br>

                <a href="#objetivos">2. Objetivos</a> <br></br>

                <a href="#inicial">3. Configuración inicial del proyecto</a> <br></br>

                <a href="#pytest">4. Configuración de pytest</a> <br></br>

                <a href="#modelo">5. Primer modelo y URLs</a> <br></br>

                <a href="#api">6. Desarrollo de la API REST</a> <br></br>

                <a href="#repo">7. Creación de un repositorio en GitHub</a> <br></br>

                <a href="#ci">8. CI</a> <br></br>

                <a href="#ref">9. Referencias</a>

                

                <br></br> <br></br>

               
                <a id="inicio"><b><font color='#086A87'><h4>1. Qué haremos</h4></font></b></a><br></br> 


                Construiremos una API REST en DRF relacionada con autos.
                Cada auto tendrá una marca y un modelo (lo mantendremos simple pues queremos enfocarnos más que nada en TDD 
                y en el pipeline de CI). <br></br>
                El código del proyecto puede encontrarse <a href="https://github.com/MNGARCIA085/Django--TDD--CI" target='_blanck15'>aquí</a>
                
                <br></br> <br></br>
                
                <a id="objetivos"><b><font color='#086A87'><h4>2. Objetivos</h4></font></b></a><br></br> 
                    <ul>
                        <li>Practicarnos con la creación de api rest</li>
                        <li>Practicarnos con TDD</li>
                        <li>Implementar un pipeline de CI</li>
                    </ul>


                <br></br>


                <a id="inicial"><b><font color='#086A87'><h4>3. Configuración inicial del proyecto</h4></font></b></a><br></br>
                

                

                Creamos el directorio de trabajo y el entorno virtual, el cual activamos <br></br> <br></br>

                $ mkdir django-tdd && cd django-tdd <br></br>
                $ mkdir app && cd app <br></br>
                $ python3 -m venv env <br></br>
                $ source env/bin/activate <br></br> <br></br>

                Instalamos las librerías necesarias inicialmente <br></br> <br></br>

                (env)$ pip install django djangorestframework pytest pytest-django <br></br> <br></br>


                creamos el proyecto y la app <br></br> <br></br>

                (env)$ django-admin startproject drf_project . <br></br>
                (env)$ python manage.py startapp automotive <br></br> <br></br>


                Agregamos nuestra nueva app a INSTALLED_APPS (rest_framework y automotive) <br></br> <br></br>

                
                <font color='green'>drf_project/settings.py</font> <br></br> <br></br>


                INSTALLED_APPS = [ <br></br>
                    ..... <br></br>
                    'rest_framework', <br></br>
                    'automotive', <br></br>
                ] <br></br> <br></br>


                Creamos un archivo requirements.txt que contendrá las dependencias de nuestro proyecto: <br></br> <br></br>


                …..app$ pip freeze -> requirements.txt <br></br> <br></br> <br></br>



                <a id="pytest"><b><font color='#086A87'><h4>4. Configuración de pytest</h4></font></b></a><br></br>



                Creamos la siguiente estructura de carpetas. <br></br> <br></br>

                tests <br></br>
                &emsp; ---- __init__.py <br></br>
                &emsp;---- automotive <br></br>
                &emsp;&emsp; ----__init__.py

                <br></br><br></br>

                Agregamos un archivo pytest.ini al directorio “app” <br></br> <br></br>

                <font color='green'>pytest.ini</font> <br></br> <br></br>

                [pytest] <br></br>
                DJANGO_SETTINGS_MODULE = drf_project.settings <br></br>


                # -- recommended but optional: <br></br>
                python_files = tests.py test_*.py *_tests.py <br></br> <br></br> <br></br>




                <a id="modelo"><b><font color='#086A87'><h4>5. Primer modelo y URLs</h4></font></b></a><br></br>


                Creamos el modelo para los autos <br></br> <br></br>


                <font color='green'>automotive/models.py</font> <br></br>

                <CodeBlock codestring={model} language='python'/>

                Realizamos la migración <br></br>
                ...$python manage.py makemigrations automotive <br></br>
                ...$python manage.py migrate <br></br> <br></br>



                Creamos una URL dummy para testear. <br></br>


                Comenzamos por la vista: <br></br><br></br>

                <font color='green'>automotive/views.py</font> <br></br>

                <CodeBlock codestring={dummyview} language='python'/>

                Ahora creamos un archivo urls.py y escribimos lo siguiente: <br></br> <br></br>

                <font color='green'>automotive/urls.py</font> <br></br>

                <CodeBlock codestring={dummyurl}/>


                Finalmente, incluimos las urls de nuestra app en las del proyecto: <br></br> <br></br>

                <font color='green'>drf_project/urls.py</font> <br></br>
                
                
                
                <div class="col-md-6"><CodeBlock codestring={urlinicial}/></div>
                
                

                Levantamos el servidor y testeamos: <br></br> <br></br>

                ….app$ python manage.py runserver <br></br> <br></br>

                Vamos a http://127.0.0.1:8000/automotive/dummy y vemos que todo funcione. <br></br> <br></br> <br></br>



                

                <a id="api"><b><font color='#086A87'><h4>6. Desarrollo de la API REST</h4></font></b></a><br></br>



                Implementaremos los siguientes endpoints: <br></br> <br></br>



                <table class="table table-bordered w-auto">
                    <thead>
                        <tr>
                        <th scope="col">Endpoint</th>
                        <th scope="col">Método HTTP</th>
                        <th scope="col">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>automotive/api</td>
                            <td>GET</td>
                            <td>Obtener todos los autos</td>
                        </tr>

                        <tr>
                            <td>automotive/api/:id</td>
                            <td>GET</td>
                            <td>Obtener el auto con el id dado</td>
                        </tr>

                        <tr>
                            <td>automotive/api</td>
                            <td>POST</td>
                            <td>Crear un nuevo auto</td>
                        </tr>

                        <tr>
                            <td>automotive/api/:id</td>
                            <td>PUT</td>
                            <td>Editar el auto con el id dado</td>
                        </tr>

                        <tr>
                            <td>automotive/api/:id</td>
                            <td>DELETE</td>
                            <td>Borrar el auto con el id dado</td>
                        </tr>
                        
                        
                    </tbody>
                    </table>



                <br></br>




                Comenzamos por escribir un test para agregar un nuevo auto: <br></br> <br></br>

                <font color='green'>tests/automotive/test_views.py</font> <br></br>

                <CodeBlock codestring={testaddcar} language='python'/>


                Lo ejecutamos: <br></br> <br></br>

                ...app$ pytest <br></br> <br></br>

                Debe fallar: <br></br> <br></br>

                FAILED tests/automotive/test_views.py::test_add_movie - assert 404 == 201 <br></br> <br></br>

                Ahora escribimos el código para que el test pase: <br></br> <br></br>

                <font color='green'>automotive/serializers.py</font> <br></br>
                <CodeBlock codestring={serializers} language='python'/>

                <font color='green'>automotive/views.py</font> <br></br>
                <CodeBlock codestring={views} language='python'/>


                <font color='green'>automotive/urls.py</font> <br></br>
                <CodeBlock codestring={urlsAPI} language='python'/>

                Ahora la ejecución de los test es exitosa. <br></br> <br></br>

                Luego repetimos para el resto de los endpoints (recuerde que el códio completo puede verse 
                    en el repo) <br></br><br></br> <br></br>




                  


                    <a id="repo"><b><font color='#086A87'><h4>7. Creación de un repositorio en GitHub</h4></font></b></a><br></br>

                    Comenzamos por crear un archivo .gitignore en el root del proyecto con 
                    el siguiente contenido: <br></br> <br></br>

                    <font color='green'>.gitignore</font> <br></br>
                    __pycache__ <br></br>
                        env <br></br>
                        *.sqlite3 <br></br> <br></br>


                        Creamos un nuevo repo en github, le llamamos: Django--TDD--CI <br></br> <br></br>

                        En consola ejecutamos (desde app): <br></br> <br></br>

                        git init <br></br>
                        git add .<br></br>
                        git commit -m "first commit" <br></br>
                        git branch -M master <br></br>
                        git remote add origin https://github.com/username/nombre del repo.git <br></br>
                        git push -u origin master <br></br> <br></br> <br></br>

                       
                        <a id="ci"><b><font color='#086A87'><h4>8. CI</h4></font></b></a><br></br>


                        Usaremos GitHub Actions. <br></br> <br></br>


                        Creamos las carpetas .github/workflows en el root de la app, 
                        y dentro de ellas el archivo main.yaml con el siguiente contendio: <br></br> <br></br>




                        <font color='green'>.github/workflows/main.yaml</font> <br></br>
                        
                        <CodeBlock codestring={ci} language="yaml"/>




                        Testeamos: <br></br> <br></br>

                        git add .  <br></br>

                        git commit -m “test CI pipeline” <br></br>

                        git push <br></br> <br></br>

                        En la parte de actions vemos el pipeline en acción: <br></br><br></br>

                        <img src={require('../../images/CI.png')} alt="CI pipeline" width="80%"/> 



                        <br></br> <br></br> <br></br>

                        <a id="ref"><b><font color='#086A87'><h4>9. Referencias</h4></font></b></a><br></br>

                        <ul>
                            <li><a href="https://www.djangoproject.com/" target='_blanck20'>Django</a></li>
                            <li><a href="https://www.django-rest-framework.org/" target='_blanck21'>Django REST Framework</a></li>
                            <li><a href="https://testdriven.io/courses/tdd-django/intro/" target='_blanck22'>Curso de TestDriven.io</a></li>
                        </ul>








                   
            
            </div>
    )
// fin
}

export default Tutorial_Django_TDD_CI;






