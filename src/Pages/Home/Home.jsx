

const Home = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

            <div>
                <p>

                    Welcome to <b>Nutrify Life</b>, your one-stop destination for comprehensive health and wellness solutions. In today’s fast-paced world, staying informed and proactive about your health is more important than ever. That’s why we’re here to empower you with the tools and resources you need to live a healthier, happier life.

                    Our platform offers personalized health charts to support individuals managing illnesses, ensuring they have the right guidance for recovery and long-term well-being. With our intuitive calorie chart and calculator, you can seamlessly track your daily intake, understand your nutritional needs, and make informed dietary decisions.

                    But that’s not all—our website is packed with valuable insights, practical tips, and innovative features designed to cater to diverse health needs. Whether you're focused on achieving your fitness goals, improving your diet, or enhancing your overall lifestyle, we’re committed to being your partner in every step of your health journey.

                    Explore, learn, and thrive with Nutrify Life  because your health matters, and we’re here to help you make the most of it.</p>
            </div>
        </div>
    );
};

export default Home;