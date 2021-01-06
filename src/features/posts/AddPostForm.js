import React, { useState } from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };

  return (
    <React.Fragment>
      <h1>Add a new post</h1>
      <form>
        <h1>title</h1>
        <input type="text" onChange={onTitleChanged} />
        <h1>content</h1>
        <textarea onChange={onContentChanged}></textarea>
        <button>Save Post</button>
      </form>
    </React.Fragment>
  );
};

export default AddPostForm;
