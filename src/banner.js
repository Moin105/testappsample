import car from './images/tesla.png';
import './banner.css';
const Banner = () =>{
    return <div className="wrapper">
              <div className="banner">
                <div className="opacity"></div>
                <img src={car}/>
              </div>
              <div className="features">
                  <p>FLASH</p>
                  <p>HONK !!!</p>
                  <p>LOCKED</p>
              </div>
           </div>
}

export default Banner;