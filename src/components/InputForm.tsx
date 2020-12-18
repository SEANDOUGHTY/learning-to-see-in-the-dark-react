import React, { useRef, useState } from 'react';
import axios from "axios"

function InputForm(props:any): JSX.Element {
  
  const fileInput = useRef(undefined);
  const [fileValue, setfileValue] = useState("Choose image");
  const [sliderValue, setsliderValue] = useState(1);

  const handleClick = (event: any): void => {
    event.preventDefault();
    if (fileInput.current === undefined || fileInput.current.files.length === 0) {
      return
    }
    let form_data = new FormData();
    form_data.append('image', fileInput.current.files[0], fileInput.current.files[0].name);
    form_data.append('ratio', String(sliderValue))
    
    let url = 'http://flask-6s44:8080/upload'; 
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      },
    })
      .then(res => {
        props.outputCallBack(res.data)
        })
        .catch(err => console.log(err))
    
  } 
    
  const handleFileChange = (event: any) => {
    event.preventDefault();
    if (fileInput.current.files.length !== 0) {
      setfileValue(fileInput.current.files[0].name);
      props.inputCallBack((URL.createObjectURL(fileInput.current.files[0])));
    }
  };

  const handleSliderChange = (event: any) => {
    setsliderValue(event.target.value)
  }

  return (
    <form onSubmit={handleClick}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
        </div>
        <div className="custom-file">
          <input type="file" className="custom-file-input" ref={fileInput} onChange={handleFileChange}></input>
          <label className="custom-file-label">{fileValue}</label>
        </div>
      </div>
      <div className="form-group slider">
        <label>Exposure Ratio: {sliderValue}</label>
        <input type="range" className="form-control-range" id="sliderInput" min="1" max="300" value={sliderValue} onChange={handleSliderChange}></input>
      </div>
      <button className="btn btn-primary">Process</button>
    </form>
  );
}

// export const fileURL = fileURL;
export default InputForm;