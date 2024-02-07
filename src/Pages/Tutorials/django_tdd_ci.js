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



            <center><h2><b><font color='red'>TDD and CI with Django</font></b></h2></center>
            <hr></hr>

            <b><font color='blue'><h3>TABLE OF CONTENTS</h3></font></b><br></br>

            <a href="#inicio">1. What We'll Do</a> <br></br>

            <a href="#objetivos">2. Objectives</a> <br></br>

            <a href="#inicial">3. Initial Project Setup</a> <br></br>

            <a href="#pytest">4. Setting up Pytest</a> <br></br>

            <a href="#modelo">5. First Model and URLs</a> <br></br>

            <a href="#api">6. Developing the REST API</a> <br></br>

            <a href="#repo">7. Creating a Repository on GitHub</a> <br></br>

            <a href="#ci">8. Continuous Integration (CI)</a> <br></br>

            <a href="#ref">9. References</a>


                

                <br></br> <br></br>

               
                <a id="inicio"><b><font color='#086A87'><h4>1. What We'll Do</h4></font></b></a><br></br> 

                We will build a REST API in Django Rest Framework related to cars. Each car will have a brand and a model (keeping it simple as we want to focus mainly on TDD and the CI pipeline). <br></br>
                The project's code can be found <a href="https://github.com/MNGARCIA085/Django--TDD--CI" target='_blanck15'>here</a>

                <br></br> <br></br>

                <a id="objetivos"><b><font color='#086A87'><h4>2. Objectives</h4></font></b></a><br></br> 
                    <ul>
                        <li>Practice creating REST APIs</li>
                        <li>Practice TDD</li>
                        <li>Implement a CI pipeline</li>
                    </ul>

                <br></br>



                <a id="inicial"><b><font color='#086A87'><h4>3. Initial Project Setup</h4></font></b></a><br></br>
                

                

                We create the working directory and the virtual environment, which we activate. <br></br> <br></br>

                $ mkdir django-tdd && cd django-tdd <br></br>
                $ mkdir app && cd app <br></br>
                $ python3 -m venv env <br></br>
                $ source env/bin/activate <br></br> <br></br>

                We install the necessary libraries initially. <br></br> <br></br>

                (env)$ pip install django djangorestframework pytest pytest-django <br></br> <br></br>


                We create the project and the app. <br></br> <br></br>

                (env)$ django-admin startproject drf_project . <br></br>
                (env)$ python manage.py startapp automotive <br></br> <br></br>


                We add our new app to INSTALLED_APPS (rest_framework and automotive). <br></br> <br></br>

                                
                <font color='green'>drf_project/settings.py</font> <br></br> <br></br>


                INSTALLED_APPS = [ <br></br>
                    ..... <br></br>
                    'rest_framework', <br></br>
                    'automotive', <br></br>
                ] <br></br> <br></br>


                We create a requirements.txt file that will contain the dependencies of our project. <br></br> <br></br>


                …..app$ pip freeze -> requirements.txt <br></br> <br></br> <br></br>




                <a id="pytest"><b><font color='#086A87'><h4>4. Pytest Configuration</h4></font></b></a><br></br>

                We create the following folder structure. <br></br> <br></br>

                tests <br></br>
                &emsp; ---- __init__.py <br></br>
                &emsp;---- automotive <br></br>
                &emsp;&emsp; ----__init__.py

                <br></br><br></br>

                We add a pytest.ini file to the "app" directory. <br></br> <br></br>

                <font color='green'>pytest.ini</font> <br></br> <br></br>

                [pytest] <br></br>
                DJANGO_SETTINGS_MODULE = drf_project.settings <br></br>

                # -- recommended but optional: <br></br>
                python_files = tests.py test_*.py *_tests.py <br></br> <br></br> <br></br>




                <a id="modelo"><b><font color='#086A87'><h4>5. First Model and URLs</h4></font></b></a><br></br>

                We create the model for cars. <br></br> <br></br>

                <font color='green'>automotive/models.py</font> <br></br>

                <CodeBlock codestring={model} language='python'/>

                We perform the migration. <br></br>
                ...$python manage.py makemigrations automotive <br></br>
                ...$python manage.py migrate <br></br> <br></br>

                We create a dummy URL to test. <br></br>

                We start with the view: <br></br><br></br>

                <font color='green'>automotive/views.py</font> <br></br>

                <CodeBlock codestring={dummyview} language='python'/>

                Now we create a urls.py file and write the following: <br></br> <br></br>

                <font color='green'>automotive/urls.py</font> <br></br>

                <CodeBlock codestring={dummyurl}/>


                Finally, we include the URLs of our app in the project's URLs: <br></br> <br></br>

                <font color='green'>drf_project/urls.py</font> <br></br>




                <div class="col-md-6"><CodeBlock codestring={urlinicial}/></div>

                We start the server and test: <br></br> <br></br>

                ….app$ python manage.py runserver <br></br> <br></br>

                We go to http://127.0.0.1:8000/automotive/dummy and make sure everything is working. <br></br> <br></br> <br></br>



                

                <a id="api"><b><font color='#086A87'><h4>6. Development of the REST API</h4></font></b></a><br></br>

                We will implement the following endpoints: <br></br> <br></br>

                <table class="table table-bordered w-auto">
                    <thead>
                        <tr>
                            <th scope="col">Endpoint</th>
                            <th scope="col">HTTP Method</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>automotive/api</td>
                            <td>GET</td>
                            <td>Get all cars</td>
                        </tr>

                        <tr>
                            <td>automotive/api/:id</td>
                            <td>GET</td>
                            <td>Get the car with the given id</td>
                        </tr>

                        <tr>
                            <td>automotive/api</td>
                            <td>POST</td>
                            <td>Create a new car</td>
                        </tr>

                        <tr>
                            <td>automotive/api/:id</td>
                            <td>PUT</td>
                            <td>Edit the car with the given id</td>
                        </tr>

                        <tr>
                            <td>automotive/api/:id</td>
                            <td>DELETE</td>
                            <td>Delete the car with the given id</td>
                        </tr>
                    </tbody>
                </table>

        <br></br>

        We start by writing a test to add a new car: <br></br> <br></br>

        <font color='green'>tests/automotive/test_views.py</font> <br></br>

        <CodeBlock codestring={testaddcar} language='python'/>

        We execute it: <br></br> <br></br>

        ...app$ pytest <br></br> <br></br>

        It should fail: <br></br> <br></br>

        FAILED tests/automotive/test_views.py::test_add_movie - assert 404 == 201 <br></br> <br></br>

        Now we write the code for the test to pass: <br></br> <br></br>

        <font color='green'>automotive/serializers.py</font> <br></br>
        <CodeBlock codestring={serializers} language='python'/>

        <font color='green'>automotive/views.py</font> <br></br>
        <CodeBlock codestring={views} language='python'/>

        <font color='green'>automotive/urls.py</font> <br></br>
        <CodeBlock codestring={urlsAPI} language='python'/>

        Now the test execution is successful. <br></br> <br></br>

        Then we repeat for the rest of the endpoints (remember that the complete code can be seen in the repo) <br></br><br></br> <br></br>



        <a id="repo"><b><font color='#086A87'><h4>7. Creating a Repository on GitHub</h4></font></b></a><br></br>

            We start by creating a .gitignore file in the root of the project with the following content: <br></br> <br></br>

            <font color='green'>.gitignore</font> <br></br>
            __pycache__ <br></br>
            env <br></br>
            *.sqlite3 <br></br> <br></br>

            We create a new repository on GitHub, named: Django--TDD--CI <br></br> <br></br>

            In the console, we execute (from the app): <br></br> <br></br>

            git init <br></br>
            git add .<br></br>
            git commit -m "first commit" <br></br>
            git branch -M master <br></br>
            git remote add origin https://github.com/username/repo-name.git <br></br>
            git push -u origin master <br></br> <br></br> <br></br>

            <a id="ci"><b><font color='#086A87'><h4>8. Continuous Integration (CI)</h4></font></b></a><br></br>

            We will use GitHub Actions. <br></br> <br></br>

            We create the .github/workflows folders in the root of the app, and inside them the main.yaml file with the following content: <br></br> <br></br>

            <font color='green'>.github/workflows/main.yaml</font> <br></br>

            <CodeBlock codestring={ci} language="yaml"/>

            We test: <br></br> <br></br>

            git add .  <br></br>

            git commit -m “test CI pipeline” <br></br>

            git push <br></br> <br></br>

            In the "Actions" section, we see the pipeline in action: <br></br><br></br>

            <img src={require('../../images/CI.png')} alt="CI pipeline" width="80%"/> 




                        <br></br> <br></br> <br></br>

                        <a id="ref"><b><font color='#086A87'><h4>9. References</h4></font></b></a><br></br>

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






