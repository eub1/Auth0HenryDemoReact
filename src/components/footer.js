import React from "react";
import '../sass/_footer.scss'

const Footer = () => (
  <footer >
    <h2>Authentication & Authorization</h2>
    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using{" "} 
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://auth0.com/docs/quickstart/spa/react"
      >
        React
      </a>
      {' '}and:
    </p>
    
    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/connections"
          >
            <i className="fas fa-link mr-2" />
            Configurating other identity providers
          </a>
        </h6>
        <p>
          Identity providers like GitHub and LinkedIn were configured to get 
          users information and be able to log them in and 
          create a user in the database (Auth0 Server) 
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/multifactor-authentication"
          >
            <i className="fas fa-link mr-2" />
            Enabling Multi-Factor Authentication
          </a>
        </h6>
        <p>
          Multi-factor Authentication adds an extra layer of security, 
          requiring users to provide more than one piece of identifying information.
          In this case, it´s captcha or selecting pattern pictures.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/anomaly-detection"
          >
            <i className="fas fa-link mr-2" />
            Anomaly Detection
          </a>
        </h6>
        <p>
          Auth0 can detect anomalies and stop malicious attempts to access your
          application. Anomaly detection can alert you and your users of
          suspicious activity, as well as block further login attempts.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://auth0.com/docs/rules"
          >
            <i className="fas fa-link mr-2" />
            Rules
          </a>
        </h6>
        <p>
          Rules are JavaScript functions that execute when a user authenticates
          to an application. They run once the authentication process is
          complete, in this case set the user information to provide location, 
          identify roles and a default profile picture.
        </p>
      </div>
    </div>


    
  </footer>
);

export default Footer;
