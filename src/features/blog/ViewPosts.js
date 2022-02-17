import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetch";
import { postSummariesUrl } from "./constants";
import { Container } from "reactstrap";

export default function ViewPosts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => fetchData(postSummariesUrl, setPosts), []);

  return (
    <Container>
      <h2>Blog</h2>
      <hr />
      {posts.length !== 0 ? (
        posts.map((post) => (
          <div key={post.title}>
            <h6>{post.create_date}</h6>
            <h2>{post.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
            <hr />
          </div>
        ))
      ) : (
        <p>Make your first post</p>
      )}
    </Container>
  );
}
