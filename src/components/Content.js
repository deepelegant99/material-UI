import { Grid } from "@material-ui/core";
import Fcard from "./Fcard";
import { ConstantData } from "./Constant";
const Content = () => {
  return (
    <>
      <Grid container spacing={2}> 
        {ConstantData.map((data, key) => {
          return (
            <Grid item xs={12} sm={4}>
              <Fcard
                name={data.name}
                picture={data.picture}
                description={data.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Content;

//Testing
