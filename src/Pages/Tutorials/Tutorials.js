import React, {useState} from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../../components/SearchBar';
import data from '../../data/tutorialsData';












const Tutorials = () => {

    const results = data;

    const [searchInput, setSearchInput] = useState("");
    const [display, setDisplay] = useState(results);


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        if (e.target.value.length > 0) {
            const aux = results.filter(result => result.name.toUpperCase().includes(String(e.target.value).toUpperCase()));
            setDisplay(aux);
        }
        else{
            setDisplay(results);
        }
    };



    function tags(tags){
            tags.map( (result) => {
                console.log(result);
                return (
                    <div>
                         <h1>{result}fdgfdgfd</h1>
                    </div>
                )
            })
            return (
            
                tags.map( (result) => {
                    return (
                        <div>
                        <h3>{result}</h3>
                    </div>
                    )
                    
                })
            )
    }

    
    



    const renderedDisplay = display.map((result) => {
        return (   
                <div class="card" key={result.name}>
                        <div class="content">
                            <div class="header"><center>{result.name}</center><hr></hr></div>
                            

                            
                            {tags(result.tags)}



                            <hr></hr>
                            <center>
                                <i class="add icon"  style={{color:'grey'}}></i>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`${result.link}`}
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
                    <b><center><h2><font color='red'>TUTORIALS</font></h2></center></b>
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

export default Tutorials;




