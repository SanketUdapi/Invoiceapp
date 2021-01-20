import Navbar from '../../components/navbar/navbar';
import Datacard from '../../components/datacards/datacards';
import {pendingin,Late} from './data';
import FooterPanel from '../../components/footer/footer';


const Invoices = () => {
 
    return ( 

        <div className='bak'>
            <Navbar  />
            <Datacard heading='Pending invoices' data={pendingin} bg={'warning'}/>
            <Datacard heading='Late invoices' data={Late} bg={'danger'}/>
            
            <FooterPanel/>
        </div>
     );
}
 
export default Invoices;