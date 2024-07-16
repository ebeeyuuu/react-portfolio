import React from 'react';

const RoundedSpinningCube = () => {
  return (
    <div className="loader">
      <div className="cube">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="face" style={{ transform: getFaceTransform(i) }} />
        ))}
      </div>
      <style jsx>{`
        .loader {
          perspective: 600px;
          width: 25px;
          height: 25px;
        }

        .cube {
          width: 400%;
          height: 400%;
          transform-style: preserve-3d;
          animation: rotate 7s linear infinite;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #0f1e6c, #2a4bf0);
          opacity: 0.4;
          border: 1px solid #fff;
          border-radius: 25%;
        }

        @keyframes rotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }

          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const getFaceTransform = (index: number) => {
  switch (index) {
    case 0:
      return 'rotateX(90deg) translateZ(50px)';
    case 1:
      return 'rotateX(-90deg) translateZ(50px)';
    case 2:
      return 'translateZ(50px)';
    case 3:
      return 'rotateY(90deg) translateZ(50px)';
    case 4:
      return 'rotateY(-90deg) translateZ(50px)';
    case 5:
      return 'rotateY(180deg) translateZ(50px)';
    default:
      return '';
  }
};

export default RoundedSpinningCube;