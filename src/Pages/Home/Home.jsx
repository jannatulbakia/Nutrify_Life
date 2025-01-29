import "./Home.css";
const Home = () => {
    return (
        <div className="home-intro">
            <div className="home-intro-img"> 
                <img 
                    src="https://img.freepik.com/premium-photo/flat-lay-photograph-diverse-healthy-foods-brown-background-concept-balanced-diet-natural_643966-783.jpg" 
                    alt="" />
            </div>

            <div className="home-intro-text">
                <p>
                    Welcome to <b>Nutrify Life</b>, your one-stop destination for comprehensive health and wellness solutions. In today’s fast-paced world, staying informed and proactive about your health is more important than ever. That’s why we’re here to empower you with the tools and resources you need to live a healthier, happier life.

                    Our platform offers personalized health charts to support individuals managing illnesses, ensuring they have the right guidance for recovery and long-term well-being. With our intuitive calorie chart and calculator, you can seamlessly track your daily intake, understand your nutritional needs, and make informed dietary decisions.

                    But that’s not all—our website is packed with valuable insights, practical tips, and innovative features designed to cater to diverse health needs. Whether you're focused on achieving your fitness goals, improving your diet, or enhancing your overall lifestyle, we’re committed to being your partner in every step of your health journey.

                    Explore, learn, and thrive with Nutrify Life because your health matters, and we’re here to help you make the most of it.
                </p>
            </div>
        </div>
    );
};

export default Home;
