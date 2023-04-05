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
     My name  name is Getachew melkam,
     I am undergraduate student.
     throughout my eduaction i gained different skills of different programming languages like C++, C#, Java, PHP, Phython,
     backend frameworks like Django , networking skills and network and information security skills like crptography that ensure the 
     security of data and resources of the organizations.I have good experience in front end liberaries like react.
     
        </p>

        <br />

        <p className="text-xl">
          My passionate is ensuring the security of data and information of an organization and configuring network iinfrastructure
        </p>
      </div>
    </div>
  );
};

export default About;
