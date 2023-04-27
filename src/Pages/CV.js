import { Link } from "react-router-dom";

const CV = () => {
    return (
        <div class="container-fluid">
            <h1><center><b><font color='red'>CV</font></b></center></h1>
            <hr></hr>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <center><font color='orange'><b>DATOS PERSONALES</b></font></center>
                        <hr></hr>
                        <b>Nombre: </b> Marcos Nicolás García Durand	<br></br>	
                        <b>Fecha de Nacimiento:</b>  27/3/1985	<br></br>		  
                        <b>Teléfono: </b>	092541619 <br></br>				
                        <b>Email:</b>  mngarcia085@gmail.com 
                   

                        
                        <hr></hr>
                        <center><font color='orange'><b>FORMACIÓN ACADÉMICA</b></font></center>
                        <hr></hr>
                        <b>Título: </b> Ingeniero Electricista	<br></br>	
                        <b>Institución:</b>  Udelar	<br></br>
                        <hr></hr>
                        <center><font color='orange'><b>EXPERIENCIA LABORAL</b></font></center>
                        <hr></hr>
                        <ul>
                            <li><b>Empresa: </b> ANTEL</li>
                            <li><b>Período</b>: Jul. 2015 - Presente</li>
                            <li><b>Sector</b>: Servicios Empresariales de datos</li>
                            <li><b>Cargo</b>: Ingeniero</li>
                            <li><b>Tareas Realizadas</b>: 
                                <ul>
                                    <li>Desarrollo de software de gestión.</li>
                                    <li>Automatización de la configuración de servicios empresariales de datos.</li>
                                    <li>Capacitación del personal.</li>
                                </ul>
                            </li>
                            <br></br>
                            <li><b>Empresa: </b> UTE</li>
                            <li><b>Período</b>: Diciembre 2012 – Junio 2015</li>
                            <li><b>Sector</b>: Distribución</li>
                            <li><b>Cargo</b>: Especialista en estudios técnicos</li>
                            <li><b>Tareas Realizadas</b>: 
                                <ul>
                                    <li>Desarrollo de software de gestión.</li>
                                    <li>Análisis de datos y toma de decisiones. </li>
                                    <li>Configuración e instalación de equipos de medida de tensión.</li>
                                    <li>Participación en la elaboración de los documentos base para la certificación ISO.</li>
                                </ul>
                            </li>
                            <br></br>
                            <li><b>Empresa: </b> LKSUR (desempeñando tareas para UTE)</li>
                            <li><b>Período</b>: Set. 2012. – Dic. 2012</li>
                            <li><b>Sector</b>: Protección de Ventas</li>
                            <li><b>Cargo</b>: Ayudante de ingeniero</li>
                            <li><b>Tareas Realizadas</b>: 
                                <ul>
                                    <li>Cálculo de indicadores de calidad de servicio.</li>
                                    <li>Reconocimiento de patrones en búsqueda de detectar situaciones 
                                        fraudulentas en la utilización de la energía.</li>
                                </ul>
                            </li>
                            <br></br>
                            <li><b>Empresa: </b> UdelaR (desempeñando tareas para la IM)</li>
                            <li><b>Período</b>: Julio. 2010. – Junio. 2012</li>
                            <li><b>Sector</b>: Informática</li>
                            <li><b>Cargo</b>: Técnico en Informática</li>
                            <li><b>Tareas Realizadas</b>: 
                                <ul>
                                    <li>Configuración de equipos informáticos.</li>
                                    <li>Atención al Público.</li>
                                    <li>Resolución de reclamos de clientes.</li>
                                </ul>
                            </li>
                        </ul>

                        <br></br>


                        <center><font color='orange'><b>CURSOS Y CERTIFICACIONES</b></font></center>
                        <hr></hr>
                        Puede consutarlos <Link to='/courses'>aquí</Link>
                    </div>
           
                
                </div>
            </div>


            <br></br><br></br><br></br>

        </div>
    )
}

export default CV;