import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import sc from "./images/sc.jpg";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import Articles from "./Pages/Articles";
import CourseDetail from "./components/Course/CourseDetail";
import Footer from "./components/Footer";
import Tutorials from "./Pages/Tutorials/Tutorials";
import Tutorial_Django_TDD_CI from "./Pages/Tutorials/django_tdd_ci";
import Deploy_ML_model from "./Pages/Tutorials/deploy_ml_model";
import Projects from "./Pages/Projects/Projects";
import IBM_data_science from "./Pages/Projects/ibm_data_science";
import MLBeginner from "./Pages/Projects/ML_Beginner";
import Movies from "./Pages/Projects/Movies";



function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/tutorials" element={<Tutorials/>} />
        <Route path="tutorials/DjangoCI" element={<Tutorial_Django_TDD_CI />} />
        <Route path="tutorials/DeployMLFastAPI" element={<Deploy_ML_model />} />

        <Route path="/projects" element={<Projects/>} />
        <Route path="projects/IBMDataScience" element={<IBM_data_science />} />
        <Route path="projects/MLBeginner" element={<MLBeginner />} />
        <Route path="projects/Movies" element={<Movies />} />

      </Routes>
      <Footer/>
    </Router>
  );


}

const Home = () => {
  return (
    <div className="App">



<h1><center><b><font color='red'>Welcome!</font></b></center></h1>
            <hr></hr>

<div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 offset-md-4">


                  

                  
      <br></br>
      <br></br>
      <div style={{ textAlign: 'justify' }}>
          Hola! Me llamo Marcos. <br></br>
          Soy un Ingeniero Eléctrico de Carmelo, Uruguay. <br></br>
          Me dedico principalmente al desarrollo de software, trabajando más que nada en la parte del backend con distintos 
          frameworks de Python (Fast API, Django, Web2py), bases de datos SQL y noSQL y cada tanto algo de frontend (React
          o Angular).
          Actualmente le estoy dedicando mucho a tiempo a aprender IA, pues con ella es posible lograr cosas
          fascinantes.<br></br> 
          En esta página puede encontrar las especializaciones que he realizado junto con mi opinión sobre
          las mismas, algunos tutoriales y algunos de los proyectos en los que he trabajado.
      </div>
      
      </div>
      </div>
</div>



      
      <br></br>
    </div>
  );
};

export default App;