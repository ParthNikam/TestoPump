import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Card, CardMedia, Button, } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";



const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      const lastIndex = posts.length - 1;
      const newIndex = prevIndex === lastIndex ? 0 : prevIndex + 1;
      return newIndex
    });
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => {
      const lastIndex = posts.length - 1;
      const newIndex = prevIndex === 0 ? lastIndex : prevIndex - 1;
      return newIndex;
    });
  };


  useEffect(() => {
    const interval = setInterval(handleNext, 1000); // Increment image index every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left Arrow Key
        handlePrevious();
      } else if (event.keyCode === 39) {
        // Right Arrow Key
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={10}>
        <Card className={classes.card}>
          <div className={classes.imageWrapper}>
            <Button
              className={classes.leftarrowButton}
              onClick={handlePrevious}
              disabled={!posts.length}
            >
              &lt;
            </Button>

            {posts.length > 0 && (
              <CardMedia
                className={classes.media}
                image={posts[currentImageIndex]?.selectedFile || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
              />
            )}

            <Button
              className={classes.rightarrowButton}
              onClick={handleNext}
              disabled={!posts.length}
            >
              &gt;
            </Button>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Posts;
