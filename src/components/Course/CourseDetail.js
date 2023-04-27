import { useParams } from "react-router-dom";
import data from "../../data/coursesData";


const CourseDetails = () => {
  let { id } = useParams();

  const aux = data.filter(result => result.id === parseInt(id));


  return (

    <div>

        <h2><center>{aux[0].name}</center></h2>
        <hr></hr>
        <br></br>
        <div class="row">
            <div class="col-md-4 offset-md-3">
                <b>Tuthor:</b> {aux[0].tuthor} <br></br> <br></br>
                <b>Link: </b> <a href={aux[0].link} target='_blanck1'>Click here</a> <br></br> <br></br>
                <b>Certificate:</b> <a href={aux[0].certificate} target='_blanck2'>Click here</a><br></br> <br></br>
            </div>
            <div class="col-md-5 offset-md-0">
                <img src={aux[0].image} alt='Desc' width="150px" height="120px"></img> 
            </div>
        </div>

    </div>
   
  );
};

export default CourseDetails;