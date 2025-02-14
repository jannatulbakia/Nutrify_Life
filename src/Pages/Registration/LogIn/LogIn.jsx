import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth, db } from "../../../firebase/firebase"; // Make sure to import Firestore
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { doc, getDoc } from "firebase/firestore"; // Import getDoc to fetch user data

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "Users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("User logged in Successfully");

        // Check user role and redirect accordingly
        if (userData.role === "admin") {
          navigate("/admin/adminhome");
        } else {
          navigate("/profile");
        }
        
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
      } else {
        toast.error("User data not found", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Are you a New Here <a href="/signup">Register Here</a>
      </p>
    </form>
  );
}
export default LogIn;