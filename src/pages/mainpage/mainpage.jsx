import MyForm from '../../components/form/form'
import MyNavbar from '../../components/navbar/navbar'
import '../../App.css';
import FooterPanel from '../../components/footer/footer';

function Mainpage() {
  return (
    <div className="App" style={{ position: "relative" }}>
        <MyNavbar />
        <MyForm />
        <FooterPanel/>
        
    </div>
  );
}

export default Mainpage;
