import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white p-4 absolute bottom-0 xl:w-[1410px] lg:w-[1200px] md:w-[700px] sm:w-[550px] w-[395px]">
      <div className="flex justify-between">
        <div>
          
          <a href="/privacy-policy" className="text-white hover:shadow-md duration-300 ease-in-out">
            Privacy Policy
          </a>
        </div>
        <p className="text-white font-bold">&copy; 2024 TODO</p>
        <div>
          <a href="/terms-of-service" className="text-white hover:shadow-md duration-300 ease-in-out">
            Terms Of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
