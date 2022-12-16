import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        <p className="text-xl mt-20">
     
     I had studied diffrent programming languages i.e 
     java,c++,csharp and database courses.
     I have little experiecne in react.
        </p>

        <br />

        <p className="text-xl">
         I mainly love network admin and maintainance courses.
        </p>
      </div>
    </div>
  );
};

export default About;
