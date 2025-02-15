import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero">
                <div className="overlay">
                    <h1>Welcome to <span>Nutrify Life</span></h1>
                    <p>Your Journey to a Healthier Life Starts Here</p>

                    <div className="cta-buttons">
                        <button className="btn primary" onClick={() => navigate("/signup")}>
                            Get Started
                        </button>
                        <button className="btn secondary" onClick={() => navigate("/caltrack")}>
                            Track Your Calories
                        </button>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about-section">
                <div className="about-text">
                    <h2>About <span>Nutrify Life</span></h2>
                    <p>
                        Nutrify Life is your one-stop destination for comprehensive health and wellness solutions.
                        Our platform offers personalized health charts, calorie tracking, and expert guidance to help
                        you achieve your health goals effortlessly.
                    </p>
                    <button 
                        className="btn outline" 
                        onClick={() => window.open("/about", "_blank")}
                    >
                        Learn More
                    </button>
                </div>
                <div className="about-image">
                    <img
                        src="https://img.freepik.com/premium-photo/flat-lay-photograph-diverse-healthy-foods-brown-background-concept-balanced-diet-natural_643966-783.jpg"
                        alt="Healthy Food"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
