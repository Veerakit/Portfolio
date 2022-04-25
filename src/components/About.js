import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p class="text-4xl font-bold inline border-b-4 border-yellow-400">
                            About
                        </p>
                    </div>
                    
                    </div>
                    <div className="max-w-[1000px] w-full grid gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold ">
                            <p>Hello, there</p>
                        </div>
                        <div>
                            <p className="text-justify text-2xl indent-10 py-1">After graduated from the University, I felt my skills were not capable with the VUCA world. 
                                This is the reason why I started to learn programming in order to acquire Business expertise and Technology expertise. 
                                Mainly use <span className="text-yellow-300">JavaScript</span>. Currently, learning <span className="text-yellow-300"> Python </span> 
                                and <span className="text-yellow-300"> SQL</span>. Looking forward to learning about <span className="text-yellow-300">Data Science</span> and <span className="text-yellow-300">Software Testing</span>.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default About;
