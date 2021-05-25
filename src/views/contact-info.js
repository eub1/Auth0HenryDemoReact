import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ContactInfo = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/recruiter/protected-recruitment`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage('please log in to see contact info');
    }
  };
  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/recruiter/protected-recruitment`);

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Want me on your team? Contact me!</h1>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >

        <button
          type="button"
          className="btn btn-primary"
          onClick={callSecureApi}
        >
          Get Contact Info
        </button>
      </div>
      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{message}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;