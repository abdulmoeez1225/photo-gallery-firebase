import React, { useRef, useState } from "react";

const UploadForm = () => {
  const fileRef = useRef();
  const [file, setFile] = useState(null);

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log("changed", selected);
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
    </div>
  );
};

export default UploadForm;
