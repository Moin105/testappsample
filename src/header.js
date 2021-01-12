import FirstComp from './firstcomp';
import chargingImg from './images/charging.png';
import './header.css';

const Header = () =>{
    return <div className="header">
       <h2>Tesla</h2> 
       <h3>My Model S</h3>
       <div className="chargingDiv">
           <img src={chargingImg} />
           <p>150<span className="min">mi</span></p>
       </div>
       <p className="Charge">Charging</p>
       <p className="Charging">2<span className="hour">hr</span> 30<span className="hour">min charging remaining</span></p>
    </div>
}

export default Header;