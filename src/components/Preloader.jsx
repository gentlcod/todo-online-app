import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    setLoading(true); // Display the preloader whenever it mounts
    return () => clearTimeout(timeout);
  }, []); // Run once when component mounts

  return loading ? (
    <div id="preloader"></div> // Ensure the CSS styles properly display the loader GIF
  ) : null;
};

export default Preloader;
