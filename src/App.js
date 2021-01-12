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

         <Content /> 
        
        </div>        
        <div className="footer">
          <Footer/>
        </div>
</div>
  );
}

export default App;
