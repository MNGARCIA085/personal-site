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
            <center><h2><b><font color='red'>Deploying a Machine Learning Model with Fast API</font></b></h2></center>
        <hr></hr>

        <br></br> <br></br>
        Once the model has been successfully trained and tested, it's time to make it available for users to utilize.
        One way to achieve this is through an API.
        In this example, we will deploy a VGG-19 model via a REST API using &nbsp;
        <a href="https://fastapi.tiangolo.com/" target='_blanck'>Fast API</a>. <br></br>

        We start by creating a virtual environment and installing the necessary libraries: <br></br> <br></br>
        ...$ python -m venv env <br></br>
        ...$ source env/bin/activate <br></br>
        ...$ pip install fastapi[all] <br></br>
        ...$ pip install tensorflow <br></br>
        ...$ pip install pillow <br></br>

        <br></br> <br></br>

        For simplicity, we will begin by importing the model directly from Keras. <br></br>

        The code is as follows: <br></br> <br></br>


                <font color='green'>main.py</font> <br></br>
                
                <CodeBlock codestring={deploy} language='python'/>





                <br></br>
                Test it out. <br></br>
                Start by running the server: <br></br> <br></br>

                ....$ uvicorn main:app --reload <br></br> <br></br>

                Go to 127.0.0.1:8000/docs (where you will see all the endpoints), 
                select the one we just implemented (predict), and try by inputting an image. <br></br> <br></br>


                <img src={require('../../images/deploy.png')} alt="Test" width="40%"/> 
                

                <br></br> <br></br>


        </div>
    )
}

export default Deploy_ML_model;