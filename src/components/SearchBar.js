import React, {useState} from 'react';

const SearchBar = () => {

    const countries = [
        { name: "Belgium", continent: "Europe" },
        { name: "India", continent: "Asia" },
        { name: "Bolivia", continent: "South America" },
        { name: "Pakistan", continent: "Asia" },
    ];


    const [searchInput, setSearchInput] = useState("");
    const [display, setDisplay] = useState(countries);


    

    const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
        if (searchInput.length > 0) {
            countries.filter((country) => {
                return country.name.match(searchInput);
        });
        const aux = countries.filter((country) => {return country.name.match(searchInput);});
        console.log(aux);
        setDisplay(aux);
        //setDisplay([{'id':3},{'id':14}]);
        console.log(display);
      }
    };
        


      const renderedResults = countries.map((result) => {
            return (   
                    <div key={result.name}>
                            {result.name}
                    </div>
            );
        });



        const renderedDisplay = display.map((result) => {
            return (   
                    <div key={result.name}>
                            {result.name}
                    </div>
            );
        });




      return (
        <div>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            


            {renderedResults}
            
            <hr></hr>
            {renderedDisplay}


        </div>
      )

}


export default SearchBar;

