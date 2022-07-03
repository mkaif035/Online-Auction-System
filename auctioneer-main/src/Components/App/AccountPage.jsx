import React from "react";
import TopBar from "./TopBar";
import ListItem from "../Views/ListItem";
import { useContext } from "react";
import { FirebaseContext } from "../Firebase";
import List from "../Views/List";

const AccountPage = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <div className="px-10 content">
      <TopBar />
      <List
        heading="Personal Details"
        subtitle="These details are only visible to you."
      >
        <ListItem>
          Photo
          <div className="center">
            <img
              className="user-avatar"
              src={user.photoURL}
              alt="Profile Picture"
            />
          </div>
        </ListItem>
        <ListItem>
          <p>Name</p>
          <p className="opacity-60">{user.displayName}</p>
        </ListItem>
        <ListItem>
          <p>Email</p>
          <p className="opacity-60">{user.email}</p>
        </ListItem>
        <ListItem>
          <p>Email Verified</p>
          <p className="opacity-60">{user.emailVerified ? "Yes" : "No"}</p>
        </ListItem>
        <ListItem>
          <p>Phone</p>
          <p className="opacity-60">{user.phoneNumber ?? "Not Specified"}</p>
        </ListItem>
      </List>
    </div>
  );
};

export default AccountPage;
