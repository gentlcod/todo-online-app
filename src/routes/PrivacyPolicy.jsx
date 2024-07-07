import React from 'react';
import Footer from '../components/Footer';


const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `max-w-[1430px] w-full mx-auto bg-white rounded-md shadow-md p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 mb-4 p-2`,
  content: `text-gray-700 text-sm p-2`
};

const PrivacyPolicy = () => {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Privacy Policy</h3>
        <div className={style.content}>
          <p>
            Welcome to our TODO app! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website [https://your-todo-app.com] (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
          <h4 className="text-xl font-bold mt-4">1. Information We Collect</h4>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </li>
          </ul>
          <h4 className="text-xl font-bold mt-4">2. Use of Your Information</h4>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Create and manage your account.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li>Send you a newsletter.</li>
            <li>Enable user-to-user communications.</li>
          </ul>
          <h4 className="text-xl font-bold mt-4">3. Disclosure of Your Information</h4>
          <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
         
        </div>
      </div>

      <Footer/>

    </div>
  );
}

export default PrivacyPolicy;
