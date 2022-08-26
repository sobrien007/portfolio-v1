import React from "react";

const Applications = () => {

  return (
    <div className="w3-container w3-content w3-center w3-padding-64" id="apps">
      <h2 className="w3-wide">APPLICATIONS</h2>
      <div className="w3-row w3-padding-32">
        <div
          className="w3-half"
        >
          <h5>Ondemand by SimplyHired</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ondemand.simplyhired.com/">
            {" "}
            <img
              src="assets/img/ondemand-SH.png"
              className="w3-round"
              alt="ondemand.com"
              loading="lazy"
            ></img>
          </a>
          <p>
            Ondemand by SimplyHired offers an assortment of web services. Built with React and styled-component.
            {" "}
          </p>
        </div>
      </div>

      <div className="w3-row w3-padding-32 app-row-end">
        <div
          className="w3-half"
        >
          <h5>Cool Blue</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://thirsty-kilby-a72701.netlify.app/">
            {" "}
            <img
              src="assets/img/coolBlueScreenShot.png"
              className="w3-round w3-margin-bottom"
              alt="cool blue"
              loading="lazy"
            ></img>
          </a>
          <p>First built with HTML/CSS and jQuery then converted to React.</p>
        </div>
      </div>

      <div className="w3-row w3-padding-32">
        <div
          className="w3-half"
        >
          <h5>Healthy Living</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nostalgic-bhaskara-d714a4.netlify.app/">
            {" "}
            <img
              src="assets/img/healthyLiving.png"
              className="w3-round"
              alt="healthy living website"
              loading="lazy"
            ></img>
          </a>
          <p>
            This site features a light/dark theme as well as three other themes.
            Healthy Living is a site that was first built using HTML, CSS and jQuery then converted to React.{" "}
          </p>
        </div>
      </div>

      <div className="w3-row w3-padding-32 app-row-end">
        <div
          className="w3-half"
        >
          <h5>Persevere LMS</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sobrien-banyan/persevere-lms"
          >
            <img
              src="assets/img/persevereLMS1.jpg"
              className="w3-round w3-margin-bottom"
              alt="Perseveres LMS"
              loading="lazy"
            ></img>
          </a>
          <p>
            In this project we used MVC for the file structure and React for the
            Front-end framework. Context/API was used for state management.
            Express,Mongoose and Node.JS on the back-end. The databases used
            were MariaBD(SQL) and MongoDB. Being the project manager on this was
            a great opportunity. I contributed to both the Front-end and
            Back-end code. This was a huge project that took months to complete.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applications;
