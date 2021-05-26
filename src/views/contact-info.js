import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import '../sass/_contact-info.scss'

const ContactInfo = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const callSecureApi = (async () => {
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
      // setMessage('please log in to see contact info');
    }
  })();
  // const callApi = async () => {
  //   try {
  //     const response = await fetch(`${serverUrl}/api/recruiter/protected-recruitment`);

  //     const responseData = await response.json();

  //     setMessage(responseData.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  return (
    <div className="contactContainer">
      <h2>Want me on your team? Contact me!</h2>
      {!isAuthenticated?
      (
        <h4 className='pleaseLogin'>Please log in to see my contact info! The authorization and authentication was built using Auth0.</h4>
      ):(
        null
      )    
      }
      {message && (
        <div className="mt-5">
          <div className="container-fluid">
            <div className="message">
              {message.LinkedIn? 
              (<div className='infoMessage'>
                <img src={message.pic}></img>         
                <div>LinkedIn: <a href={message.LinkedIn}>Pía Cherni</a></div>
                <div>GitHub: <a href={message.GitHub}>piacz</a></div>
                <div>Mail: <a href="mailto:piaczernyk@gmail.com"> piaczernyk@gmail.com </a></div>
              </div>    
              )
              :
              message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;