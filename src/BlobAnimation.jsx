import React, { useState, useEffect } from 'react';
import './App.css';

function BlobAnimation() {
  // State to manage the positions of blob 1 and blob 2
  const [blob1Position, setBlob1Position] = useState({ top: 0, left: 0 });
  const [blob2Position, setBlob2Position] = useState({ bottom: 0, right: 0 });

  useEffect(() => {
    // Function to animate the blobs
    const animateBlobs = () => {
      setBlob1Position({ top: 0, left: 0 });
      setBlob2Position({ bottom: 0, right: 0 });

      setTimeout(() => {
        setBlob1Position({ top: 0, right: 0 });
        setBlob2Position({ bottom: 0, left: 0 });

        setTimeout(() => {
          setBlob1Position({ bottom: 0, right: 0 });
          setBlob2Position({ top: 0, left: 0 });

          setTimeout(() => {
            setBlob1Position({ bottom: 0, left: 0 });
            setBlob2Position({ top: 0, right: 0 });

            // After the full animation, loop by calling animateBlobs again
            setTimeout(animateBlobs, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
    };

    // Call the animation function to start the animation
    animateBlobs();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="blob-animation">
      <div className="blob blob1" style={blob1Position}></div>
      <div className="blob blob2" style={blob2Position}></div>
    </div>
  );
}

export default BlobAnimation;
