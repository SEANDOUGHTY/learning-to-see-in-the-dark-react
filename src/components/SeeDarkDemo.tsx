import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import axios from "axios"


let url = 'https://flask-6s44.onrender.com';


const SeeDarkDemo = () => {
  // file URL state
  const [inputFileURL, setinputFileURL] = useState(null);
  const [outputFileName, setoutputFileName] = useState(null);
  const [outputFileURL, setoutputFileURL] = useState(null);
  const [processing, setProcessing] = useState(false);  
  document.title = "Learning to See In the Dark"  

  useEffect(() => {
    const interval = setInterval(() => {
        
        if (outputFileName !== null) {
          axios.get(`${url}/download`,
            {
              params: { fileName: outputFileName },
              responseType: 'blob'
            })
            .then(res => {
              setoutputFileURL(URL.createObjectURL(res.data));
              setProcessing(false);
              setoutputFileName(null);
            })
            .catch(err => console.log(err))
          }
        }, 5000);
    return () => clearInterval(interval);
  }, [outputFileName]);

  return (
    <div className="container" style={{
      margin: "30px auto 100px auto"
    }}>
        <div className="row">
          <div className="col-lg-6">
            <InputForm
              inputCallBack={setinputFileURL}
              outputCallBack={setoutputFileName}
              processingCallBack={setProcessing}
              processing={processing}
            />
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
  )
};

export default SeeDarkDemo;  