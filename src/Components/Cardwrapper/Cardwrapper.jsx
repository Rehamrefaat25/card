import './Cardwrapper.css'
import supervisor from "/assets/imges/supervisor.svg";
import team from "/assets/imges/team.svg";
import karma from "/assets/imges/karma.svg";
import calculator from "/assets/imges/calculator.svg";
import Carditem from "../Carditem/Carditem";
function Cardwrapper () {
    const Arrayofobject = [
       {classcard:"super",cardname:"supervisor",carddetails:"Monitors activity to identify project roadblocks", id:1,cardimg:supervisor ,},
        { classcard:"team",cardname:"Team Builder",carddetails:"Scans our talent network to create the optimal team for your project",id:2,cardimg:team},
        {classcard:"karma",cardname:"Karma",carddetails:"Regulary evaluates our talent to ensure quality", id:3,cardimg:karma},
        { classcard:"calculator",cardname:"Calculator",carddetails:"Uses data from past projects to provide better delivery estimates",id:4,cardimg:calculator},
    ];
  return (
<div id="cardwrapper">
    {Arrayofobject.map((item)=>{
        return(
<Carditem
key={item.id}
classcard={item.classcard}
cardname={item.cardname}
carddetails={item.carddetails}
cardimg={item.cardimg}
bordercolor={item.bordercolor}>
</Carditem>);
    }
)}

    </div>
  )
}
export default Cardwrapper
