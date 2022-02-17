import React, { useEffect, useState } from "react";
import { getPostUrl } from "./constants";
import { fetchData } from "../../utils/fetch";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";

export default function ViewPost(props) {
  const [post, setPost] = useState({});
  const { title } = useParams();

  useEffect(() => fetchData(getPostUrl(title), setPost), []);
  return (
    <Container>
      <h6>{post.create_date}</h6>
      <h2>{post.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </Container>
  );
}
