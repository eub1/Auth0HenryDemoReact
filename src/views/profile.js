import React from "react";
import '../sass/_profile.scss'

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// import { Loading } from "../components";

const Profile = () => {
  const { user } = useAuth0();
  // if(!user){
  //   return (
  //     <div>Please sign up or log in</div>
  //   )
  // }
  console.log(user)
  const { name, picture, email, nickname } = user;
  const country = user["https://example.com/country"];
  const city = user["https://example.com/city"]

  return (
    <div className='profile'>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{nickname}</h2>
          <p className="lead text-muted">{email}</p>
          <p className="lead text-muted">{city},{' '+country}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
// export default withAuthenticationRequired(Profile, {
//   onRedirecting: () => <Loading />,
// });
