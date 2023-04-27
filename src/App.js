import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

/**
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
*/

import sc from "./images/sc.jpg";


import Navbar from "./components/Navbar/Navbar";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import CV from "./Pages/CV";
import Articles from "./Pages/Articles";
import CourseDetail from "./components/Course/CourseDetail";
import Footer from "./components/Footer";


import Tutorial_Django_TDD_CI from "./Pages/Tutorials/django_tdd_ci";


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
        <Route path="/cv" element={<CV />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/tutorials" element={<Tutorial_Django_TDD_CI />} />


      </Routes>
      <Footer/>
    </Router>
  );


}

const Home = () => {
  return (
    <div className="App">



<h1><center><b><font color='red'>HOME</font></b></center></h1>
            <hr></hr>

<div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 offset-md-4">


                  <center><img src={sc} alt="logo" width="40%"/></center>  

                  
      <br></br>
      <br></br>
      Hola! Me llamo Marcos. <br></br>
      Soy un Ingeniero Eléctrico de Carmelo, Uruguay. <br></br>
      Me dedico principalmente al desarrollo de software, trabajando más que nada en la parte del backend con distintos 
      frameworks de Python (Fast API, Django, Web2py), bases de datos SQL y noSQL y cada tanto algo de frontend (React
      o Angular).
      Soy también un gran fan de la IA. <br></br> 
      En mis ratos libres me gusta hacer deporte y mirar series (mis favoritas: spartacus, death note y big bang theory).
      </div>
      </div>
</div>



      
      <br></br>
    </div>
  );
};

export default App;