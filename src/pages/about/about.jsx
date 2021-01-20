import FooterPanel from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Link} from 'react-router-dom';
import  './about.css';


const About = () => {
 
    return ( 
        <div >
            <Navbar  />
            <div className="container">
            <Jumbotron className='jumbo'>
                <h1>About this App!</h1>
                <p>
                    This is a simple React based Invoice application Incoice app this has no backend as of now all 
                    of the data is static ,I have used React-Bootstrap for styli ng this app and React-router-dom for routing through pages, I will link the github repo below,
                    Hope you like the app..
                </p>
                <Link to='/github' target="_blank">Github repo 

                </Link>
                
            </Jumbotron>
            </div>
            <FooterPanel/>
        </div>
     );
}
 
export default About;