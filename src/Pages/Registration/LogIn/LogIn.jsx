import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; 
import SignInWithGoogle from "../SignInGoogle/SignInWithGoogle";
import "./Login.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "Users", user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();

        localStorage.setItem("user", JSON.stringify(userData));
        if (userData.role === "admin") {
          navigate("/admin/adminhome");
        } else {
          navigate("/profile");
        }

        toast.success("User logged in Successfully", { position: "top-center" });
      } else {
        toast.error("User data not found", { position: "bottom-center" });
      }
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="containerr">
      <div className="form-containerr">
        <h2>Login to Your Account</h2>
        <p>Welcome back! Please enter your details to continue.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="termss">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <button type="submit" className="btnn">Login</button>
        </form>

        <SignInWithGoogle />
        
        <p className="forgot-password">
          Are you new here? <a href="/signup">Register Here</a>
        </p>
      </div>
      <div className="image-containerr">
        <img src="https://plus.unsplash.com/premium_photo-1676047258659-5acda7b9d3e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBwaWNzfGVufDB8fDB8fHww" alt="Illustration" />
      </div>
    </div>
  );
};

export default LogIn;
