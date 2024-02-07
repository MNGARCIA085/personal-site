const MLBeginner = () => {

    return (
        <div class="col-md-6 col-sm-6 offset-3">

            <br></br>

            <h5><center>ML Beginner Projects</center></h5>

            <hr></hr>
            These projects are a series of simple exercises I undertook to gain experience in Machine Learning. 
            Essentially, each project involves setting a goal, gathering data, preprocessing, 
            implementing various models, tuning hyperparameters, and evaluating the results obtained.

            <br></br> <br></br> <br></br>

            <div class="col-md-10 offset-1">

            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                
                <td><a href="https://github.com/MNGARCIA085/ML-Projects-Beginner-/tree/master/1.%20Breast%20cancer" 
                        target='_blanck1'>
                    Breast cancer</a></td>
                <td>Se prueban distintos modelos para predecir si un cáncer de seno es benigno
                    o maligno.
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td> <a href="https://github.com/MNGARCIA085/ML-Projects-Beginner-/tree/master/2.%20Sports%20Celebrities" 
                            target='blanck2'>Sport celebrities classification</a>Sport Celebrities</td>
                <td>Se predice dada una foto, a qué celebridad deportiva corresponde.</td>

                </tr>
                <tr>
                <th scope="row">3</th>
               
                <td><a href="https://github.com/MNGARCIA085/ML-Projects-Beginner-/tree/master/3.%20Covid%20-%20sentiment%20analysis" target='_blanck3'>COVID Sentiment Analysis</a></td>
                <td colspan="2">Dados tweets relacionados al COVID, se clasifica si el sentimiento en ellos es positivo
                                o negativo</td>

                </tr>
            </tbody>
            </table>




            </div>


            


            


        </div>
    )
}

export default MLBeginner;