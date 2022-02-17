import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default class TinyMce extends React.Component {
  handleEditorChange = (content, editor) => {
    // console.log("Content was updated:", content);
    // Would be nice to not save on every keystroke
    editor.save();
  };

  render() {
    return (
      <Editor
        key={this.props.defaultValue}
        initialValue={
          this.props.defaultValue ? this.props.defaultValue : "<p></p>"
        }
        id={this.props.id}
        textareaName={this.props.id}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image imagetools charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | image | help",
          branding: false,
          images_upload_url: "image_upload/",
          image_list: [
            {
              title: "blueberries",
              value: "images/joanna-kosinska-4qujjbj3srs-unsplash.jpg",
            },
          ],
        }}
        onEditorChange={this.handleEditorChange}
        // onInit={(content, editor) => {
        //   editor.save();
        // }}
      />
    );
  }
}
