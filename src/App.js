// import Grid from "@material-ui/core/Grid";
import { Grid } from "@material-ui/core"; //This is eqivalent to the above line.
import Header from "./components/Header";
import Content from "./components/Content";
import Fcard from "./components/Fcard";

function App() {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item container direction="row" xs={12} sm={8} spacing={2}>
          <Grid item xs={false} sm={4}>
            <Fcard />
          </Grid>
          <Grid item xs={false} sm={4}>
            <Fcard />
          </Grid>
          <Grid item xs={false} sm={4}>
            <Fcard />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
