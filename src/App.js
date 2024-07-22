import React, { useState, useRef } from "react";
import ReactCompareImage from "react-compare-image";
import "./styles.css";

const App = () => {
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);
  const [hasError, setHasError] = useState(false);

  const leftInputRef = useRef(null);
  const rightInputRef = useRef(null);

  const handleOnError = (error, errorInfo) => {
    console.log("Error occurred:", error);
    setHasError(true);
    console.log("Error Info:", errorInfo);
  };

  const handleLeftImageChange = (event) => {
    setLeftImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleRightImageChange = (event) => {
    setRightImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleLeftButtonClick = () => {
    leftInputRef.current.click();
  };

  const handleRightButtonClick = () => {
    rightInputRef.current.click();
  };

  return (
    <div className="contentWrapper">
      {hasError ? (
        <div>Oops! Something went wrong.</div>
      ) : (
        <>
          <div className="uploadWrapper">
            <input
              type="file"
              ref={leftInputRef}
              style={{ display: "none" }}
              onChange={handleLeftImageChange}
            />
            <button className="btn" onClick={handleLeftButtonClick}>
              Upload Left Image
            </button>
            <input
              type="file"
              ref={rightInputRef}
              style={{ display: "none" }}
              onChange={handleRightImageChange}
            />
            <button className="btn" onClick={handleRightButtonClick}>
              Upload Right Image
            </button>
          </div>
          <div className="imageWrapper">
            {leftImage && (
              <img src={leftImage} alt="Left" className="previewImage" />
            )}
            {rightImage && (
              <img src={rightImage} alt="Right" className="previewImage" />
            )}
          </div>
          {leftImage && rightImage && (
            <ReactCompareImage
              leftImage={leftImage}
              rightImage={rightImage}
              onError={handleOnError}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
