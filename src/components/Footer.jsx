import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white p-4 absolute bottom-0 lg:w-[1410px] w-[395px]">
      <div className="flex justify-between">
        <div>
          <a href="/privacy-policy" target="_blank" className="text-white hover:shadow-md duration-300 ease-in-out">
            Privacy Policy
          </a>
        </div>
        <p className="text-white font-bold">&copy; 2024 TODO</p>
        <div>
          <a href="/terms-of-service" target="_blank" className="text-white hover:shadow-md duration-300 ease-in-out">
            Terms Of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
