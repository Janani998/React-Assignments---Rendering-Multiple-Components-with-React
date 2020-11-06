import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <h1 data-ns-test="project-name"> Online Voting Application</h1>
      <p data-ns-test="project-description">
        The application provides a platform for the users to vote in the
        election from the romote places using their devices. The users must
        first register in the site with their details including voter's card,
        aadhar card number and soon. And the link will be open for the users
        during the time period of the election time and the notification will be
        sent to the user's registered mobile number about the start and
        remaining time of voting. Once a user completes his/her voting process
        then he/she will not be allowed to vote again. The voting details of all
        the users will be stored in the backend.
      </p>
    </>
  );
};

export default App;
