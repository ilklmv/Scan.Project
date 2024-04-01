import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxWidth: 600,
    margin: "auto",
    overflow: "hidden",
    padding: theme.spacing(2),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: "100%",
    transition: "transform 0.5s ease",
    marginBottom: theme.spacing(2),
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
}));

interface CarouselProps {
  columns: { date: string; queries: number; risks: number }[];
}

const Carousel: React.FC<CarouselProps> = ({ columns }) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextColumn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === columns.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevColumn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? columns.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <Button onClick={prevColumn}>Previous</Button>
        <Button onClick={nextColumn}>Next</Button>
      </div>
      <Paper className={classes.paper} elevation={3}>
        <div>
          <span>Date</span>
          <span>Queries</span>
          <span>Risks</span>
        </div>
        {columns[currentIndex] && (
          <div>
            <span>{columns[currentIndex].date}</span>
            <span>{columns[currentIndex].queries}</span>
            <span>{columns[currentIndex].risks}</span>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Carousel;
