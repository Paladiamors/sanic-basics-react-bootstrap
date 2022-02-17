import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import DynamicForm from "../../components/FormGenerator";
import { updatePostUrl, getPostUrl } from "./constants";
import Authenticated from "../../components/Authenticated";
import { fetchData } from "../../utils/fetch";
import { useParams } from "react-router-dom";

export function UpdatePost(props) {
  const [id, setId] = useState(0);
  const [title_, setTitle_] = useState("");
  const [content, setContent] = useState("");
  const { title } = useParams();

  const fields = [
    { type: "FormHidden", label: "id", name: "id", value: id },
    {
      type: "FormText",
      label: "Title",
      name: "title",
      defaultValue: title_,
    },
    {
      type: "FormTinyMce",
      label: "Content",
      name: "content",
      defaultValue: content,
    },
  ];

  useEffect(
    () =>
      fetchData(getPostUrl(title), (data) => {
        setId(data.id);
        setTitle_(data.title);
        setContent(data.content);
      }),
    [title]
  );

  function onSubmit(data) {
    if (data.ok) {
      props.history.push("/blog/listPosts");
    }
  }

  return (
    <Container>
      <DynamicForm
        url={updatePostUrl}
        fields={fields}
        onSubmit={onSubmit}
        // updateFormHook={updateFormHook}
      />
    </Container>
  );
}

export default (props) => (
  <Authenticated
    {...props}
    component={UpdatePost}
    msg="Please login before posting"
    redirect="blog/updatePost"
  />
);
