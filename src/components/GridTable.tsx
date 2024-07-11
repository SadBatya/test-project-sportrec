import { Grid } from "@mui/material";
import Main from "./Main";
import Aside from "./Aside";
const GridTable: React.FC = () => {
  return (
    <Grid container columns={2}>
      <Grid item>
        <Main />
      </Grid>
      <Grid item>
        <Aside />
      </Grid>
    </Grid>
  );
};

export default GridTable;
