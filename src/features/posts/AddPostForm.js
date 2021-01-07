import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const onPostSave = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <React.Fragment>
      <h1>Add a new post</h1>
      <form>
        <h1>title</h1>
        <input type="text" onChange={onTitleChanged} />
        <h1>content</h1>
        <textarea onChange={onContentChanged}></textarea>
        <button type="button" onClick={onPostSave}>
          Save Post
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddPostForm;
