import React from "react";
import { auth, googleProvider, db } from "../../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignInWithGoogle = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userDocRef = doc(db, "Users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          firstName: user.displayName.split(" ")[0] || "",
          lastName: user.displayName.split(" ")[1] || "",
          photo: user.photoURL || "",
          role: "user",
        });
      }

      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Google Login Successful!", { position: "top-center" });
      navigate("/profile"); 
    } catch (error) {
      toast.error("Google Sign-In Failed: " + error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="google-login">
      <button onClick={handleGoogleSignIn} className="google-btn">
        <img
          src="data:image/png;base64,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"
          alt="Google Logo"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default SignInWithGoogle;
