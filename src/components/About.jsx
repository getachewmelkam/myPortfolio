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
        My name is Getachew Melkam,
Specializes in Information Systems, handling hardware and software maintenance, resolving network
issues, troubleshooting printers, and designing websites. I manages time effectively, thrives in
independent roles, and contributes efficiently as part of a team
     I passionate to develop my skill in cyber security. Team work and creativity makes me 
      happy all time.
     
        </p>

        <br />

        <p className="text-xl">
         My passionate to be white hat hacker and protecting an intentional attacks the hackers
            attempt to our country.
        </p>
      </div>
    </div>
  );
};

export default About;
