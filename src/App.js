import './App.css';
import Header from './header';
import Banner from './banner.js';
import Content from './content.js';
import Footer from './footer';
function App() {
  return (<div className="wrapper">
  <div className="header">
        <Header/>
        </div>
                <div className="banner">
                <Banner/>
                </div>
        <div className="feautres">
        <Content name="start charge"/> <Content name="stop charge"/> <Content name="charge max range"/> <Content name="charge standard range"/>
         <Content name="start hvac"/> <Content name="stop hvac"/> <Content name="wake up"/> <Content name="refresh data"/> 
        </div>        
        <div className="footer">
          <Footer/>
        </div>
</div>
  );
}

export default App;
