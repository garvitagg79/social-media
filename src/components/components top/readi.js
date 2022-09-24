import { View, Text } from "react-native";
import React, { Component } from "react";
import { render } from "react-dom";

import axios from "axios";

class Readi extends Component {
  state = {
    selectedFile: null,
    fileUploadSuccessfully: false,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    //call api
    axios
      .post(
        "https://64t7idxowf.execute-api.ap-south-1.amazonaws.com/prod/file-upload",
        formData
      )
      .then(() => {
        this.setState({ selectedFile: null });
        this.setState({ fileUploadSuccessfully: true });
      });
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2 style={{ color: "white" }}>File details</h2>
          <p style={{ color: "white" }}>
            File Name: {this.state.selectedFile.name}
          </p>
          <p style={{ color: "white" }}>
            File Type: {this.state.selectedFile.type}
          </p>
          <p style={{ color: "white" }}>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else if (this.state.fileUploadSuccessfully) {
      return (
        <div>
          <br />
          <h4 style={{ color: "white" }}>
            Your file has been successfully uploaded
          </h4>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4 style={{ color: "white" }}>Choose a file then press upload</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <h2 style={{ color: "white" }}>file upload system</h2>
        <h3 style={{ color: "white" }}>file upload serverless</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default Readi;
