
const Movies = () => {

    return (
        <div class="col-md-6 col-sm-6 offset-3">

            <br></br>

            <h5><center>Software Project Template: Movies</center></h5>

            <hr></hr>
            Es un proyecto de software donde se implementan distintas funcionalidades que suelen estar
            en muchos proyectos.<br></br>
            La aplicación consiste en que un usuario puede ver distintas películas y sus críticas y hacer
            su propia review. Un administrador es quien ingresa las películas.
            <br></br>
            El backend se implementó con <a href="https://fastapi.tiangolo.com/" target='_blanck101'>Fast API</a> <br></br>
            El frontend se implementó con <a href="https://es.react.dev/" target='_blanck102'>React</a> <br></br>
            <br></br>

            Entre las funcionalidades implementadas destacan:
            <ul>
                <li>Backend</li>
                <ul>
                    <li>Configuración de ORM (SQLAlchemy)</li>
                    <li>JWT</li>
                    <li>Control de acceso basado en roles</li>
                    <li>CORS</li>
                    <li>API REST para ingresar movies, reviews, genres y users</li>
                    <li>Tests con pytest</li>
                </ul>
                
                <li>Frontend</li>
                <ul>
                    <li>Login con JWT</li>
                    <li>Rutas protegidas</li>
                    <li>Datatable</li>
                    <li>Formularios</li>
                </ul>
            </ul>



            <br></br>
            El proyecto puede verse <a href="https://github.com/MNGARCIA085/Movies" target='_blanck52'>aquí</a>
        
        
        
        </div>
    )
}

export default Movies;