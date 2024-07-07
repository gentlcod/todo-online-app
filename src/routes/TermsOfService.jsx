import React from 'react';
import Footer from '../components/Footer';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `max-w-[1430px] w-full mx-auto bg-white rounded-md shadow-md p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 mb-4 p-2`,
  content: `text-gray-700 text-sm p-2`
};

const TermsOfService = () => {
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Terms of Service</h3>
        <div className={style.content}>
          <p>Welcome to our TODO app! These terms and conditions outline the rules and regulations for the use of our website [https://your-todo-app.com]. By accessing this website, we assume you accept these terms and conditions. Do not continue to use the TODO app if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h4 className="text-xl font-bold mt-4">1. License</h4>
          <p>Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on the TODO app. All intellectual property rights are reserved. You may access this from the TODO app for your own personal use subjected to restrictions set in these terms and conditions.</p>

          <h4 className="text-xl font-bold mt-4">2. User Comments</h4>
          <p>Certain parts of this website offer the opportunity for users to post and exchange opinions and information in certain areas of the website. We do not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of our company, its agents, and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>

          <h4 className="text-xl font-bold mt-4">3. Hyperlinking to our Content</h4>
          <p>The following organizations may link to our website without prior written approval:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
          </ul>

          <h4 className="text-xl font-bold mt-4">4. iFrames</h4>
          <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our website.</p>

          <h4 className="text-xl font-bold mt-4">5. Content Liability</h4>
          <p>We shall not be hold responsible for any content that appears on your website. You agree to protect and defend us against all claims that are rising on your website.</p>


        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default TermsOfService;
