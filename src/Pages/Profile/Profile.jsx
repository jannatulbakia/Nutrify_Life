import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import LogIn from "../Registration/LogIn/LogIn";
import CalChart from "./CalChart";
import "./Profile.css";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User data not found");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      {userDetails ? (
        <>
          <div className="profile-image">
            <img
              src={userDetails.photo}
              width={"40%"}
              alt="User"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="user-info-class">
            <h3>Hello {userDetails.firstName}. Be healthy</h3>
            <div className="profile-details">
              <p>Email: {userDetails.email}</p>
              <p>First Name: {userDetails.firstName}</p>
            </div>
            <CalChart />
          </div>
          {/* Removed the Logout button here */}
        </>
      ) : (
        <p className="login-container">
          <LogIn />
        </p>
      )}
    </div>
  );
}

export default Profile;