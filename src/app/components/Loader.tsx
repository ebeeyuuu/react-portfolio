import React from 'react'

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <style jsx>{`
        .loader-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          background-color: #020202;
        }

        .loader {
          border: 4px solid white;
          border-left-color: transparent;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Loader
