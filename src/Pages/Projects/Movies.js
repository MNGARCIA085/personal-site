
const Movies = () => {

    return (
        <div class="col-md-6 col-sm-6 offset-3">

            <br></br>

            <h5><center>Software Project Template: Movies</center></h5>

            

            <hr></hr>
            This is a software project where various functionalities commonly found in many projects are implemented.<br></br>
            The application allows a user to view different movies and their reviews, as well as to write their own review. An administrator is responsible for adding movies.
            <br></br>
            The backend was implemented using <a href="https://fastapi.tiangolo.com/" target='_blanck101'>Fast API</a>. <br></br>
            The frontend was implemented using <a href="https://es.react.dev/" target='_blanck102'>React</a>. <br></br>
            <br></br>

            Among the implemented functionalities are:
            <ul>
                <li>Backend</li>
                <ul>
                    <li>ORM Configuration (SQLAlchemy)</li>
                    <li>JWT</li>
                    <li>Role-based access control</li>
                    <li>CORS</li>
                    <li>CRUD operations</li>
                    <li>REST API</li>
                    <li>Tests with pytest</li>
                </ul>
                
                <li>Frontend</li>
                <ul>
                    <li>Login with JWT</li>
                    <li>Protected routes</li>
                    <li>Datatable</li>
                    <li>Forms</li>
                </ul>
            </ul>

            <br></br>
            The project can be viewed <a href="https://github.com/MNGARCIA085/Movies" target='_blanck52'>here</a>.

        
        
        
        </div>
    )
}

export default Movies;