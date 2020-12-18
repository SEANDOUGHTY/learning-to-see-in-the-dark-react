import React, {useState, useEffect} from 'react';
import InputForm from './InputForm';
import axios from "axios"

let url = 'http://flask-6s44:8080/download';

const Body = () => {
  // file URL state
  const [inputFileURL, setinputFileURL] = useState(null);
  const [outputFileName, setoutputFileName] = useState(null);
  const [outputFileURL, setoutputFileURL] = useState(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
        console.log("Every 5 seconds")
        console.log(outputFileName)
        if (outputFileName !== null) {
          axios.get(url, { params: { fileName: outputFileName}, responseType: 'blob' } )
            .then(res => {
              setoutputFileURL(URL.createObjectURL(res.data))
              setoutputFileName(null)
            })
            .catch(err => console.log(err))
          }
        }, 5000);
    return () => clearInterval(interval);
  }, [outputFileName]);

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <InputForm inputCallBack={setinputFileURL} outputCallBack={setoutputFileName}/>
          </div>
          <div className="col-lg-6">
          </div>
        </div>
        <div className="row image-row">
          <div className="col-lg-6">
            <h3>Input Image</h3>
            {inputFileURL === null ?
              <div className="placeholder-image"></div> :
              <img src={inputFileURL!} className="display-image" alt="placeholder" />}
          </div>
          <div className="col-lg-6">
            <h3>Processed Image</h3>
              {outputFileURL === null ?
              <div className="placeholder-image"></div> :
              <img src={outputFileURL!} className="display-image" alt="placeholder" />}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Body;  