import React from 'react';

const Content = (): JSX.Element => (
  <div className="content">
    <div className="text-content">
    <h1>Learning to See in the Dark Inference</h1>
    <h4>January 2021</h4>
    <p>
        This project is a demo for a machine learning exploration I worked on with Andrew Maksymowsky and Frank Gu. We started with a cool <a href="https://cchen156.github.io/paper/18CVPR_SID.pdf">machine learning paper</a> which used a CNN (Convolutional Neural Net) to process low light images. The paper used RAW input images and we wanted to try to instead train the model instead with <em>.png</em> files.
  </p>
  <h3>Model</h3>   
    <p>
       
    </p>
  <h3>Architecture</h3>      
      <img src="/img/architecture.png" alt="architecture diagram" style={
        {
          maxWidth: "70%",
          border: "2px solid black",
          borderRadius: "5px",
          marginBottom: "20px"
        }} ></img>
      <p>
        My architecture uses a React front end and Python (Flask) back end both of which are hosted on <a href="https://render.com/">Render</a> a really easy platform for deploying web applications. After an image is received by Flask it is given an id which is pushed to AWS SQS and the image is uploaded to S3. On demand an AWS EC2 spot instance is provisioned to perform the inference. The use of on demand, spot instances keeps the cost of hosting the project low at the cost of having slower cold start times after a period of inactivity.
    </p>
    <p>
        I wrote a post on Medium on my work to try to minimize the cold start time. 
    </p>
    <p>
      <a href="/">Article</a>
    </p>
  <h3>Demo</h3>     
  <p>
        To try out the demo upload any dark .png image, already bright images have shown to have unpredictable effects. Then set the ratio between the input exposure time and the desired output exposure time. For example; if the input image had an exposure of 0.1 seconds then a ratio of 10 would produce an image with a target ratio of 1.0 seconds.
  </p>
  <figure className="figure content-figure">
      <img className="figure-img img-fluid rounded" src="/img/00001_00_0.1s.png" alt="sample input" style={
        {
          width: "400px"
          }
      } />
      <figcaption className="figure-caption text-center">Sample Input Image</figcaption>
  </figure>
  <figure className="figure content-figure">
    <img className="figure-img img-fluid rounded" src="/img/d572196e-1cfc-4f50-a9fb-0ab5a7f259ff.png" alt="sample output" style={
      {
        width: "400px"
        }
    } />
    <figcaption className="figure-caption text-center">Sample Output Image with ratio=50</figcaption>
    </figure>
    <p>
        Also note that inference could take 1-2 minute to occur on a cold start for the spot instance to be provisioned.     
    </p>       
  </div>
    <h3>Code</h3>  
    <p>
      These are the following code repositories used in the project:
      <ul>
        <li><a href="https://github.com/frankgu968/learning-to-see-in-the-dark-pytorch">PyTorch Learning to See in the Dark</a></li>
        <li><a href="https://github.com/SEANDOUGHTY/learning-to-see-in-the-dark-react">React Frontend</a></li>
        <li><a href="https://github.com/SEANDOUGHTY/learning-to-see-in-the-dark-flask">Flask API Server</a></li>
        <li><a href="https://github.com/SEANDOUGHTY/learning-to-see-in-the-dark-worker">Inference Worker</a></li>
      </ul>
    </p>
    
  </div>
);

export default Content; 