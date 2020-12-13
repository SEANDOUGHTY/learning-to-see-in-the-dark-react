import React, {useState} from 'react';
import InputForm from './InputForm'


const Body = () => {
  // file URL state
  const [inputFileURL, setinputFileURL] = useState(null);
  const [outputFileURL, setoutputFileURL] = useState(null);
  
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <InputForm inputCallBack={setinputFileURL} outputCallBack={setoutputFileURL}/>
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