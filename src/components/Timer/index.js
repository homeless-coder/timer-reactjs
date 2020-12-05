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

const Timer = ({ time, setTime, duration, setDuration, progressBarWidth }) => {
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
                  value={progressBarWidth}
                  className={classes.bar}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.container}>
              <Grid item xs={3}>
                <Typography align="right" className={classes.label}>
                  {(time / 1000).toFixed(1)}s
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
                  value={duration}
                  onChange={(e, newValue) => setDuration(Number(newValue))}
                  step={100}
                  min={0}
                  max={30000}
                  aria-labelledby="input-slider"
                />
              </Grid>
            </Grid>
            <Grid container className={classes.container}>
              <Grid item xs={11}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => setTime(0)}
                >
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
