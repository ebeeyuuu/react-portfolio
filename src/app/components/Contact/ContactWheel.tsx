"use client"

import React, { useState } from 'react'
import DiscordIcon from '../Icons/DiscordIcon'
import GithubIcon from '../Icons/GithubIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import TwitterIcon from '../Icons/TwitterIcon'

const ContactWheel = () => {
  const [showCopyPopup, setShowCopyPopup] = useState(false)
  
  const handleCopyDiscordId = () => {
    const discordId = '720463952706011159'; // Discord ID to copy
    navigator.clipboard.writeText(discordId)
      .then(() => {
        setShowCopyPopup(true); // Show the copy popup
        setTimeout(() => setShowCopyPopup(false), 2000); // Hide after 2 seconds
        console.log('Discord ID copied to clipboard:', discordId);
      })
      .catch((error) => {
        console.error('Failed to copy Discord ID:', error);
      });
  };
  
  return (
    <div className="main">
      <div className="up">
        <a href="https://www.instagram.com/ebee.yuuu/" target="_blank">
          <button className="card1">
            <InstagramIcon className="text-black"/>
          </button>
        </a>
        <a href="https://x.com/ebeeyuuuu" target="_blank">
          <button className="card2">
            <TwitterIcon className="text-black"/>
          </button>
        </a>
      </div>
      <div className="down">
        <a href="https://github.com/ebeeyuuu" target="_blank">
          <button className="card3">
            <GithubIcon className="text-black"/>
          </button>
        </a>
        <a href="" onClick={handleCopyDiscordId}>
          <button className="card4">
            <DiscordIcon className="text-black"/>
          </button>
        </a>
      </div>

      {/* Copy Popup */}
      {showCopyPopup && (
      <div className="copy-popup">
        <p>Discord ID Copied!</p>
      </div>
      )}

      {/* Style JSX */}
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
        }

        .up,
        .down {
          display: flex;
          flex-direction: row;
          gap: 0.5em;
        }

        .card1,
        .card2,
        .card3,
        .card4 {
          width: 90px;
          height: 90px;
          outline: none;
          border: none;
          background: white;
          border-radius: 5px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          transition: 0.2s ease-in-out;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .card1:hover,
        .card2:hover,
        .card3:hover,
        .card4:hover {
          cursor: pointer;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  )
}

export default ContactWheel