import React from "react";
import { useSelector } from "react-redux";

function PostsList() {
  const posts = useSelector((state) => state.posts);
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));
  return <section className="posts-list">{renderPosts}</section>;
}
export default PostsList;
