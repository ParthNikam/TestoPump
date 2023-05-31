import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../actions/posts";
import useStyles from "./styles";




const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null );
  const [postData, setPostData] = useState({ selectedFile: [] });

  useEffect(() => { if (post) setPostData({ ...post, selectedFile: [] }); }, [post]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({ selectedFile: [] });
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          type="submit"
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
