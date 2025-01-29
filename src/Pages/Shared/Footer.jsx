import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gradient-to-r from-[#6F4F37] via-[#8E735B] to-[#A67C52] text-white p-4">
                {/* Center all sections and make them responsive */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* Services Section */}
                    <div className="text-center bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <h6 className="text-lg font-semibold mb-2 text-white">Services</h6>
                        <ul className="space-y-1">
                            <li><a className="link link-hover hover:text-gray-300 transition-all duration-200 ease-in-out">Diet Planning</a></li>
                            <li><a className="link link-hover hover:text-gray-300 transition-all duration-200 ease-in-out">Health Assessments</a></li>
                            <li><a className="link link-hover hover:text-gray-300 transition-all duration-200 ease-in-out">Meal Planning</a></li>
                            <li><a className="link link-hover hover:text-gray-300 transition-all duration-200 ease-in-out">Calorie Tracking</a></li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="text-center bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <h6 className="text-lg font-semibold mb-2 text-white">Company</h6>
                        <ul className="space-y-1">
                            <li><a className="link link-hover hover:text-gray-300 transition-all duration-200 ease-in-out">About Us</a></li>
                            <li><a className="link link-hover hover:text-gray-300 transition-all duration-200 ease-in-out">Contact</a></li>
                            <li><a className="link link-hover hover:text-gray-300 transition-all duration-200 ease-in-out">Careers</a></li>
                            <li><a className="link link-hover hover:text-gray-300 transition-all duration-200 ease-in-out">Press Kit</a></li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="text-center bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <h6 className="text-lg font-semibold mb-2 text-white">Follow Us</h6>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="hover:text-gray-300 transition-all duration-200 ease-in-out transform hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-all duration-200 ease-in-out transform hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-all duration-200 ease-in-out transform hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 text-center">
                    <p className="text-sm opacity-70">© 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
