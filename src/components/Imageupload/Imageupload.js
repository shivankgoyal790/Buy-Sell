import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./Imageupload.css"
const Imageupload = (props) =>{
    const [newfile, setnewfile] = useState();
    const filePickerRef = useRef();  //get reference to input
    
    
    const pickedHandler = (event) =>{
      const filepicked = event.target.files[0];  
      setnewfile(filepicked);
    props.oninput(filepicked);

    }

    useEffect(() => {
      if (!newfile) {
        return;
      }
      const fileReader = new FileReader();   // browser api to read file path asynchronously
      fileReader.readAsDataURL(newfile);
    }, [newfile]);      
  
    const pickImageHandler = () => {
      filePickerRef.current.click();
    };
    return(
        <div>
        <label htmlFor="fileinput"></label>
        <input
          id={props.id}
          ref={filePickerRef}
          style={{ display: 'none' }}
          type="file"
          name="fileinput"
          accept=".jpg,.png,.jpeg"
          onChange={pickedHandler}
        />
       
        <button type="button" onClick={pickImageHandler} className="uploadbtn">PICK IMAGE</button>
        </div>
    );
}
export default Imageupload