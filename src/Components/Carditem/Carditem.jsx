
import './Carditem.css'
function Carditem(props) {
    console.log(props);
  return (
    <div id="card" className={props.classcard}>
        <h3>{props.cardname}</h3>
        <p>{props.carddetails}</p>
        <img src={props.cardimg}></img>
    </div>
  )
}

export default Carditem