import React, {useState} from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import data from '../data/coursesData';


const Courses = () => {

    const results = data;

    const [searchInput, setSearchInput] = useState("");
    const [display, setDisplay] = useState(results);


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value); // lo act. mal; 1 paso dsp.
        if (e.target.value.length > 0) {
            const aux = results.filter(result => result.name.toUpperCase().includes(String(e.target.value).toUpperCase()));
            setDisplay(aux);
        }
        else{
            setDisplay(results);
        }
    };



    const renderedDisplay = display.map((result) => {
        return (   
                <div class="card" key={result.name}>
                        <div class="content">
                            <div class="header"><center>{result.name}</center><hr></hr></div>
                            <div class="description"> 
                                <center> <img src={result.image} alt='Desc' width="100px" height="80px"></img> </center>  
                            </div>
                            <div class="description">
                                <br></br>
                                <b>Tutor</b> : {result.tuthor} <br></br>
                                 <a href={result.link} target='_blanck' style={{ textDecoration: 'none' }}>Link</a>
                            </div>
                            <hr></hr>
                            <center>
                                <i class="add icon"  style={{color:'grey'}}></i>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`${result.id}`}
                                    key={result.id}
                                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
                                        Details
                                </Link> 
                            </center>           
                        </div>
                </div>
        );
    });



    //  <SearchBar/> debajo del return

    return (
        <div>
            
            <div class="row">
                <div class="col-md-12">
                    <b><center><h2><font color='red'>CERTIFICATIONS</font></h2></center></b>
                    <hr></hr>
                </div>
            </div>


            <div class="row">
                <div class="col-md-2 offset-md-8">
                    <input
                        type="text"
                        placeholder="Search title"
                        onChange={handleChange}
                        value={searchInput} />
                </div>
            </div>

            <br></br><br></br>

            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="ui cards">
                        {renderedDisplay}
                    </div>
                </div>
            </div>

        

    </div>
  );
};

export default Courses;




