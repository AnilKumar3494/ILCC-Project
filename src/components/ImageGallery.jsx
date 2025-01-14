import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ sermonsData, masonaryImages, contactInfoData }) => {
  if (sermonsData) {
    return (
      <div className="grid_container">
        <div className="sermons_grid">
          {sermonsData.sermons.map((sermonsInfo) => (
            <div className="card" key={sermonsInfo.id}>
              <img
                src={sermonsInfo.imgSrc}
                alt={sermonsInfo.title}
                className="card_img"
              />
              <div className="card_content">
                <h3 className="card_title">{sermonsInfo.title}</h3>
                <p className="card_price">{`${sermonsInfo.description}`}</p>
                <p>{sermonsInfo.date_time}</p>
                {/* <p className="card_description">Located in {sermonsInfo.city}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (contactInfoData) {
    return (
      <div className="grid_container">
        <div className="members_grid">
          {contactInfoData.committeeMembers.map((membersInfo) => (
            <div className="card" key={membersInfo.id} title={membersInfo.name}>
              <img
                src={membersInfo.imgSrc}
                alt={membersInfo.name}
                className="card_img"
              />
              <div className="card_content">
                <h5>{membersInfo.name}</h5>
                <p style={{ fontStyle: "italic" }}>{membersInfo.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ImageGallery;
