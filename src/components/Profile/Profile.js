import React, {useState, useEffect} from "react";
import './profile.css';
import database from '../../firebase';
import { Link } from "react-router-dom";

function Profile() {

   const [profile, setProfile] = useState([]);

      useEffect(() => {

         database
         .collection("profile")
         .onSnapshot((snapshot) =>
         setProfile(snapshot.docs.map((doc) => doc.data()))

         );

      }, []);


   return (
      <div>

         <div className="profile__header">
            <h1>My Profile</h1>

         <Link to={`/update/`}>
            <h3 className="update">Update Profile</h3>
         </Link>

         </div>

         <div className="profile__container">

            {profile.map(feed => (
               <>
                  <div
                  style={{ backgroundImage: `url(${feed.url})` }}
                  className="image"
                  >
                  </div>
                  
                  <div
                     className="discription__container"
                  >
                     <h1 className="bio">Bio</h1>   
                     <h3 className="discription__line">Name: {feed.name} Smith</h3>
                     <h3 className="discription__line">Age: {feed.age} years old</h3>    
                     <h3 className="discription__line">Gender: {feed.gender}</h3>
                     <h3 className="discription__line">Status: {feed.status}</h3>
                     <h3 className="discription__line">Goal: {feed.goal}</h3>
                     <h3 className="discription__line">Donation: {feed.donation}</h3>
                     
                  </div>
               </>
            ))}
         </div>

         <div className="about__me">
            <h2 className="bio">About Me</h2>
            {profile.map(feed => (
               <p className="text">
                  {feed.aboutMe}
               </p>
            ))}
         </div>

      </div>


   );
}

export default Profile