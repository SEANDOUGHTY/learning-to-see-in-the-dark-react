import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faReact, faJava, faGit, faDocker, faAws, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope }  from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  // file URL state
  return (
    <div className="content">
    <div className="container" style={{
    }}>
      <div className="row">
        <div className="col-md-3">
          <img src="/img/sean.png" alt="Sean Doughty headshot" width="100%" style={{
            borderRadius: "50%"
          } }/>

        </div>
          <div className="col-md-9">
          <h3>About Me</h3>
            <p>Hello, I'm Sean Doughty and I'm a Full Stack developer working out of Toronto, Canada. In 2020, I graduated from Engineering Science - Robotics Option at the University of Toronto. While studying, I served as the Engineering Manager for the <a href="http://blueskysolar.utoronto.ca/">Blue Sky Solar Racing Team</a> and led a group of 50 students to design, build and race a road legal solar car across Australia for the Bridgestone World Solar Challenge.
            </p>
            <p>
              My passion is to always be learning new things. This has lead me to work on a large range of interesting projects during my short career. I have worked on a variety of different data modelling/analysis projects and have built a variety of tools to solve complex design optimization problems. My work with Full Stack was born out of necessity to create intuitive systems to collect and present data.
            </p>
            <p>
              Many of my projects requires the use of cloud resources for storage and computation which lead me to pursue my <a href="https://www.youracclaim.com/badges/5de88ad3-836e-409f-bae2-643f889b2bfb?source=linked_in_profile">AWS Solutions Architect - Associate Certification</a> which was a great learning opportunity for me to learn more about cloud.
            </p>
        </div>
        </div>
        <h3>Skills</h3>
          <p>
          I possess experience in technologies spanning software and mechanical engineering. I am most comfortable working with React and Python when building a new web application. Furthermore, I am also experienced with mechanical design using SolidWorks and simulation with ANSYS.
          </p>
        <div><Button variant="primary" className="mb-3" href="https://seandoughty-public.s3.amazonaws.com/Resume.pdf">Download Resume</Button>{' '}</div>
        <FontAwesomeIcon icon={faPython} size="6x" className="px-2" />
        <FontAwesomeIcon icon={faReact} size="6x" className="px-2"/>
        <FontAwesomeIcon icon={faJava} size="6x" className="px-2" />
        <FontAwesomeIcon icon={faGit} size="6x" className="px-2" />
        <FontAwesomeIcon icon={faDocker} size="6x" className="px-2" />
        <FontAwesomeIcon icon={faAws} size="6x" className="px-2" />
        <h3>Contact</h3>
        The best way to reach me is through email or LinkedIn:
        <p>
        <div><FontAwesomeIcon icon={faEnvelope} size="sm" /> <a href="mailto:sean.doughty@outlook.com">sean.doughty@outlook.com</a></div>
        <div><FontAwesomeIcon icon={faLinkedin} size="sm" /> <a href="https://www.linkedin.com/in/doughtysean/">https://www.linkedin.com/in/doughtysean/</a></div>
        <div><FontAwesomeIcon icon={faGithub} size="sm" /> <a href="https://github.com/SEANDOUGHTY/">https://github.com/SEANDOUGHTY/</a></div>
        <div><FontAwesomeIcon icon={faMedium} size="sm" /> <a href="https://sean-doughty.medium.com/">https://sean-doughty.medium.com/</a></div>
        </p>
      </div>
    </div>
  )
};

export default Main;  