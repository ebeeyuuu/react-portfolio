import React, { ReactNode } from 'react';

interface WaveCardProps {
  children: ReactNode;
}

const WaveCard: React.FC<WaveCardProps> = ({ children }) => {
  return (
    <div className="flex justify-center max-sm:items-center">
      <div className="card playing flex flex-col gap-y-10 mt-24 w-[calc(100vw-20rem)] min-w-[400px] max-w-[800px] bg-[#020202]/60 h-[1190px] rounded-2xl smooth-animation playing max-[1027px]:h-[1290px] max-[850px]:h-[1430px] max-[800px]:h-[1790px] relative overflow-hidden shadow-card">
        {children}
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <style jsx>{`
        .card {
          margin: 100px auto;
        }

        .wave {
          position: absolute;
          width: 540px;
          height: 700px;
          opacity: 0.6;
          bottom: 0;
          right: 0;
          margin-bottom: -60%;
          margin-right: -50%;
          justify-content: center;
          background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
          z-index: -10;
          border-radius: 40%;
          animation: wave 55s infinite linear;
        }

        .playing .wave {
          animation-duration: 3000ms;
        }

        .playing .wave:nth-child(2) {
          animation-duration: 4000ms;
        }

        .playing .wave:nth-child(3) {
          animation-duration: 5000ms;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default WaveCard;
