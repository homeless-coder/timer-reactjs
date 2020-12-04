import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Slider,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "90vh",
  },
  form: {
    backgroundColor: "#232626",
    height: "15vh",
    borderRadius: "15px",
    border: "1px solid #393a3b",
    padding: "20px 5px",
  },
  input: {
    backgroundColor: "#f1f2f2",
    verticalAlign: "center",
    borderRadius: 6,
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 0",
  },
  label: {
    color: "#B8B8B8",
    textAlign: "left",
  },
  bar: {
    borderRadius: 5,
  },
}));

const Timer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classes.form}
          >
            <Grid container className={classes.container}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Elapsed time:</Typography>
              </Grid>
              <Grid item xs={7}>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  className={classes.bar}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.container}>
              <Grid item xs={3}>
                <Typography align="right" className={classes.label}>
                  0.0s
                </Typography>
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
            <Grid container className={classes.container}>
              <Grid item xs={4}>
                <Typography className={classes.label}>Duration:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Slider
                  value={0}
                  onChange={() => {}}
                  aria-labelledby="input-slider"
                />
              </Grid>
            </Grid>
            <Grid container className={classes.container}>
              <Grid item xs={11}>
                <Button variant="contained" fullWidth>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timer;
