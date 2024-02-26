import React from 'react'
import jeet from "../images/jeet.jpg";
import jeet1 from "../images/jeet.jpg";
import jeet3 from "../images/jeet3.jpg";

const Home = () => {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-6 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-[35rem] overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src={jeet3} />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-28 h-28 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                    <img className='rounded' src={jeet} alt="#" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">Jeet Ghosh</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-gray-400">Nutritionist <br />Suppliment supplier <br />Dietitian
                                        <br />Health & Fitness Trainer <br /></p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex-col items-center">
                                <p className="leading-relaxed text-lg mb-4">Meet Jeet, your dedicated partner on the journey to optimal health and fitness. With a passion for transforming lives, Jeet brings expertise in personalized workout plans, nutritional guidance, and motivational coaching. As a certified health and fitness professional, Jeet is committed to helping you achieve your wellness goals. Join the community of individuals already experiencing positive transformations. Elevate your fitness journey with Jeet because a healthier, stronger you starts here.</p>
                                <a href='/about' className="text-indigo-400 inline-flex items-center text-left cursor-pointer">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home