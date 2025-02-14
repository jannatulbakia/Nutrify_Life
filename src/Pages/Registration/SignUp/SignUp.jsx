import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        // Store user details in Firebase Firestore
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
          role: "user",
        });

        // Send user details to MongoDB backend
        const response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName: fname, lastName: lname, email, password }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          toast.error(errorData.message || "Registration failed", { position: "bottom-center" });
          return;
        }

        const data = await response.json();
        toast.success("User Registered Successfully!!", { position: "top-center" });

        // Redirect to login page after successful registration
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error(error.message || "Registration failed. Try again.", { position: "bottom-center" });


    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" onChange={(e) => setFname(e.target.value)} required />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLname(e.target.value)} />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </div>
      <p className="forgot-password text-right">
        Already registered? <a href="/login">Log In</a>
      </p>
    </form>
  );
}

export default SignUp;