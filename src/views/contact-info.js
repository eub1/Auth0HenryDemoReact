import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import '../sass/_contact-info.scss'

const ContactInfo = () => {
  const [message] = useState("");

  const { isAuthenticated } = useAuth0();

  return (
    <div className="contactContainer">
      <h2>My contact info</h2>
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