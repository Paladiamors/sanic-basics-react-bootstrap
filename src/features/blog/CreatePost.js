import React from "react";
import { Container } from "reactstrap";
import DynamicForm from "../../components/FormGenerator";
import { createPostUrl, listPostsUrl } from "./constants";
import Authenticated from "../../components/Authenticated";

export function CreatePost(props) {
  const fields = [
    { type: "FormText", label: "Title", name: "title" },
    { type: "FormTinyMce", label: "Content", name: "content" },
  ];
  function onSubmit(data) {
    if (data.ok) {
      props.history.push("/blog/listPosts");
    }
  }
  return (
    <Container>
      <DynamicForm url={createPostUrl} fields={fields} onSubmit={onSubmit} />
    </Container>
  );
}

export default (props) => (
  <Authenticated
    {...props}
    component={CreatePost}
    msg="Please login before posting"
    redirect="blog/createPost"
  />
);
