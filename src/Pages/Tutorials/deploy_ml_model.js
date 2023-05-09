import CodeBlock from "../../components/CodeBlock";




const deploy = `
import io
import tempfile
from fastapi import FastAPI, File, UploadFile
from PIL import Image
from pydantic import BaseModel
from tensorflow.keras.applications.vgg19 import VGG19, preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from keras.applications.vgg16 import decode_predictions
import numpy as np

app = FastAPI()

# Cargar el modelo VGG19
model = VGG19(weights='imagenet')

# cada predicción consistirá en el nombre de la clase y su probabilidad asociada
class predictions(BaseModel):
	name: str
	probability: float

# Definir la ruta para el modelo
@app.post("/predict")
async def predict(file: UploadFile = File(...)) -> list[predictions]:
    # Abrir la imagen con Pillow
    img = Image.open(io.BytesIO(file.file.read()))
    # Redimensionar la imagen a 224x224 píxeles
    img = img.resize((224, 224))
    # Convertir la imagen a un array de Numpy
    img = img_to_array(img)
    # Añadir una dimensión al array para cumplir con el formato de entrada del modelo
    img = np.expand_dims(img, axis=0)
    # Preprocesar la imagen
    img = preprocess_input(img)
    # Realizar la predicción
    predictions = model.predict(img)
    # Decodificar las predicciones
    decoded_predictions = decode_predictions(predictions, top=3)[0]
    # retorno las 3 predicciones más probables
    return [{'name':p[1], 'probability':format(p[2].astype(float),'.4f')} for p in decoded_predictions]
`


const Deploy_ML_model = () => {
    return (
        <div class="container-fluid col-md-8 offset-2" >
            <center><h2><b><font color='red'>Deploy de un modelo de machine learning con Fast API</font></b></h2></center>
                <hr></hr>

                <br></br> <br></br>
                Una vez entrenado y testeado exitosamente el modelo es hora de ponerlo a disposición para 
                que los usuarios puedan
                utilizarlo.
                Una forma de hacerlo es a través de una API.
                En este ejemplo desplegaremos un modelo VGG-19 vía una API REST utilizando  &nbsp;
                <a href="https://fastapi.tiangolo.com/" target='_blanck'>Fast API</a>. <br></br>


                Comenzamos por crear un entorno virtual e instalar las librerías necesarias: <br></br> <br></br>
                ...$ python -m venv env <br></br>
                ...$ source env/bin/activate <br></br>
                ...$ pip install fastapi[all] <br></br>
                ...$ pip install tensorflow <br></br>
                ...$ pip install pillow <br></br>
                
                <br></br> <br></br>

                Por simplicidad comenzaremos importando el modelo directamente desde Keras. <br></br>

                El código es el siguiente: <br></br> <br></br>

                <font color='green'>main.py</font> <br></br>
                
                <CodeBlock codestring={deploy} language='python'/>





                <br></br>
                Testeamos. <br></br>
                Comenzamos levantando el servidor: <br></br> <br></br>

                ....$ uvicorn main:app --reload <br></br> <br></br>



                Vamos a 127.0.0.1:8000/docs (donde veremos todos los endpoints), elegimos el que acabamos de implementar 
                (predict) y probamos ingresando una imagen. <br></br> <br></br>


                <img src={require('../../images/deploy.png')} alt="Test" width="40%"/> 
                

                <br></br> <br></br>


        </div>
    )
}

export default Deploy_ML_model;