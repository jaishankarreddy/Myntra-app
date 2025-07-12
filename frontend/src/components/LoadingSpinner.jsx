import React from "react";

const LoadingSpinner = () => {
  return (
    <div style={{marginTop:'400px',marginBottom:'500px'}}>
      <div className="loader">
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
