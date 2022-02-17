import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import DataTable, {
  deleteHelper,
  renderLinkHelper,
} from "../../components/DataTable";
import Authenticated from "../../components/Authenticated";
import { deletePostUrl, listPostsUrl } from "./constants";

function ListPosts(props) {
  const [posts, setPosts] = useState([]);

  function getData() {
    fetch(listPostsUrl)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const columnHandlers = {
    title: (column, row, counter) => (
      <td key={counter}>
        <a key={counter} href={`/blog/updatePost/${row["title_search"]}`}>
          {row[column]}
        </a>
      </td>
    ),
  };
  return (
    <Container>
      <h2>Post List</h2>
      {posts.length > 0 ? (
        <DataTable
          data={posts}
          onDelete={deleteHelper(posts, setPosts, deletePostUrl)}
          columnHandlers={columnHandlers}
          skipColumns={["title_search"]}
        />
      ) : (
        <p>Create your first post first</p>
      )}
    </Container>
  );
}

export default () => (
  <Authenticated
    component={ListPosts}
    msg="Please login before listing posts"
    redirect="blog/listPosts"
  />
);
