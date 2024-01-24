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

import AboutMe from "./Pages/AboutMe";


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

        <Route path="/about" element={<AboutMe />} />

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
          Hi! My name is Marcos <br></br><br/>
          
          As an electrical engineer with over 10 years of experience, I have turned my fascination with technology 
          into an exciting career in software development. 
          My primary focus revolves around designing and developing robust and efficient web applications.
          <br/><br/>

          I have worked with widely recognized Python frameworks, including Django, Web2py, and FastAPI, as well 
          as both relational databases (PostgreSQL, MySQL) and non-relational databases (MongoDB).

          <br/><br/>
          Recently, I have delved into exciting artificial intelligence projects, specifically concentrating 
          on customer segmentation and time series forecasting. I am thrilled about the transformative potential of AI in 
          the business world.

          <br/><br/>
          My continuous quest for knowledge has led me to participate in various courses and projects. 
          Discovering new horizons and applying those learnings to my projects is 
          what drives my passion for technological 
          development.




          

      </div>
      
      </div>
      </div>
</div>


      <br></br>
   
   
   
    </div>
  );
};

export default App;