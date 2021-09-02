import { Grid } from "@material-ui/core";
import Fcard from "./Fcard";
import {ConstantData} from "./Constant";
const Content = () => {


  return(
    <>
      
  {ConstantData.map((data, key) => {
    return (
      <div key={key}>
        {data.name}+
          <img src={data.picture} width="500px" height="500px"/>
           {data.description}
      </div>
    );
  })}
    </>
  )
};

export default Content;


 
