import React, { useRef, useState } from "react";
import ProgressComponent from "./ProgressComponent";

import { FaArrowUp } from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form>
      <div className="upload-container">
        <div className="file-upload">
          <input type="file" onChange={handleChange} />

          <FaArrowUp size={50} />
        </div>
        <div className="output">
          {error && <div className="error">{error} </div>}
          {file && <div>{file.name} </div>}
          {file && <ProgressComponent file={file} setFile={setFile} />}
        </div>
      </div>
    </form>
  );
};

export default UploadForm;
