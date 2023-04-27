
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    //fixed-bottom MDBFooter para que quede al final
    return (
        <div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted '> 
                <div class="text-center p-4">
                                <a href='mailto:mngarcia085@gmail.com' title="Send email" className='me-4 text-reset'>
                                        <MDBIcon fab icon="google text-danger" />
                                </a>
                                <a href="https://www.linkedin.com/in/marcos-garcía-a04633106/"
                                        target='_in'
                                        title="Linkedin"
                                        className='me-4 text-reset'>
                                    <MDBIcon fab icon="linkedin text-primary" />
                                </a>
                                <a href='https://github.com/MNGARCIA085' target='_git' title='repos' className='me-4 text-reset'>
                                    <MDBIcon fab icon="github text-warning" />
                                </a>
                </div>
            </MDBFooter>
        </div>
    )
}


export default Footer;