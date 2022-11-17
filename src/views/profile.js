import React, { useEffect, useState } from "react";
import '../sass/_profile.scss'

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


const Profile = () => {
  // const { user } = useAuth0();
  // console.log(user)
  // const { picture, email, nickname } = user;

  return (
    <div className='profile'>
        <div className="col-md text-center text-md-left">
          <h2>Information exctracted from the logged in user:</h2>
        </div>
      {/* <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <p className="lead text-muted">Nickname: {nickname}</p>
          <p className="lead text-muted">Email: {email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default Profile;
