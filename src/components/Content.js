import { Grid } from "@material-ui/core";
import Fcard from "./Fcard";
import { ConstantData } from "./Constant";
const Content = () => {

  const getCard = jObject =>{return(
    <Grid item xs={12} sm={4}>
      <Fcard {...jObject} />
    </Grid>
  )}


  return (
    <>
      <Grid container spacing={4}> 
        {ConstantData.map( data => getCard(data))}
      </Grid>
    </>
  );
};

export default Content;

//Testing
