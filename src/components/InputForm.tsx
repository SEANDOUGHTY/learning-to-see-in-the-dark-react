import React, { useRef, useState } from 'react';
import axios from "axios"
import { Ellipsis } from 'react-awesome-spinners'


let url = 'https://flask-6s44.onrender.com';

function checkServer() {
  axios.get(`${url}/checkinstance`)
    .then(res => {
      console.log(res)
    }).catch(err => console.log(err));
}

function InputForm(props:any): JSX.Element {
  
  const fileInput = useRef(undefined);
  const [fileValue, setfileValue] = useState("Choose image");
  const [sliderValue, setsliderValue] = useState(1);
  const [errorText, setErrorText] = useState("");
  const [statusText, setStatusText] = useState("");
  

  const handleClick = (event: any): void => {
    event.preventDefault();
    if (fileInput.current === undefined ||
      fileInput.current.files.length === 0 ||
      fileInput.current.files[0].type !== "image/png") {
        setErrorText("Please select valid .png file")
        return
    }
  
    props.processingCallBack(true)
    setStatusText("Uploading Image")
    checkServer()
    let form_data = new FormData();
    form_data.append('image', fileInput.current.files[0], fileInput.current.files[0].name);
    form_data.append('ratio', String(sliderValue))
    
    axios.post(`${url}/upload`, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
        credentials: 'same-origin'
      },
      'withCredentials': true,
    })
      .then(res => {
        console.log(res);
        props.outputCallBack(res.data);
        setStatusText("Performing Inference, Please wait");
        setErrorText("");
        })
      .catch(err => {
        props.processingCallBack(false)
        setStatusText("");
        if (typeof err.response === 'undefined') {
          setErrorText("Server Error")
        }
        else if (err.response.status === 429) {
          setErrorText("Too many requests, try again later")
        }
        else {
          setErrorText("Please select valid .png file");
        }
        console.log(err);
      })
    
  } 
    
  const handleFileChange = (event: any) => {
    event.preventDefault();
    if (fileInput.current.files.length !== 0) {
      if (fileInput.current.files[0].type !== "image/png") {
        setErrorText("Please select valid .png file")
        return
      }
      setErrorText("")
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
      {props.processing ? 
        <div className="status">
          <div className="status-indicator">
            <Ellipsis size="38" color='#007bff' sizeUnit='px' />
          </div>
          <p className="status-text">{statusText}</p></div> :
        <div><button className="btn btn-primary">Process</button><span className="error-text">{errorText}</span></div>
      }
    </form>
  );
}

export default InputForm;