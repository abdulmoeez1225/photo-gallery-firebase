import React, { useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const fileRef = useRef();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/jpeg", "image/png", "image/jpg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log("changed", selected);
    if (selected && selected.size > 0 && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select a valid image file (jpg, jpeg, png)");
    }
    // setTimeout(() => {
    //   console.log("timeout");
    //   fileRef.current.value = null;
    // }, 2000);
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        ref={fileRef}
        id="file"
        accept="image/*"
        onChange={changeHandler}
      />
      <span>+</span>
      <div className="output">
        {error && <div className="error">{error} </div>}
        {/* {file && <img src={URL.createObjectURL(file)} alt="preview" />} */}
        {file && <div>{file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </div>
  );
};

export default UploadForm;
