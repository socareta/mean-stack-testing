import React from "react";
import AuthService from "../services/auth.service";


const Profile = (props) => {
  const currentUser = AuthService.getCurrentUser();

  if (props.match.path === "/confirm/:confirmationCode") {
    AuthService.verifyUser(props.match.params.confirmationCode)
  }

  return (
    <div className="container">
      <div className="row">
          <div className="col-md-4 card">
            <div className="card-header"> <h4>Profile</h4> </div>
            <div className="card-body">
                <h3>{currentUser.username}</h3>
                <p>
                  <strong>Id:</strong> {currentUser.id}
                </p>
                <p>
                  <strong>Email:</strong> {currentUser.email}
                </p>
                <p>
                  <strong>Status:</strong> {currentUser.status}
                </p>
                <strong>Authorities:</strong>
                <ul>
                  {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
          </div>
      </div>      
    </div>
  );
};

export default Profile;
