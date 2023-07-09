import React, { FC, useState } from "react";
import "../styles/follow.css";
import { RiCloseCircleLine } from "react-icons/ri";
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiTiktokLine,
  RiAmazonLine,
  RiSpotifyLine,
  RiAppleLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Follow: FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const navigate = useNavigate();

  const closePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <div className="popup-header">
              <h2>FOLLOW</h2>
              <RiCloseCircleLine size={30} color="white" onClick={closePopup} />
            </div>
            <div className="icon-grid">
              <a
                href="https://www.instagram.com/linkinpark/"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramLine />
              </a>
              <a
                href="https://www.facebook.com/linkinpark"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookBoxLine />
              </a>
              <a
                href="https://twitter.com/linkinpark"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterLine />
              </a>
              <a
                href="https://www.youtube.com/linkinpark"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiYoutubeLine />
              </a>
              <a
                href="https://www.tiktok.com/@linkinpark?lang=en"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTiktokLine />
              </a>
              <a
                href="https://amazon.com/music/player/artists/B000VK762Y/linkin-park?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_06HYexpFM5NhI9IJCNvRDMHWU"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiAmazonLine />
              </a>
              <a
                href="https://open.spotify.com/intl-pt/artist/6XyY86QOPPrYVGvF9ch6wz?si=8K0eq4NHTK-xGOZeBa9EZA&nd=1"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiSpotifyLine />
              </a>
              <a
                href="https://music.apple.com/br/artist/linkin-park/148662"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiAppleLine />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Follow;
