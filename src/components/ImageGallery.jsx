import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ localImages, sermonsDataJSON, contactInfoData }) => {
  if (sermonsDataJSON) {
    return (
      <div className="grid_container">
        <div className="sermons_grid">
          {sermonsDataJSON.sermons.map((sermonsInfo) => (
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

  if (localImages) {
    return (
      <div className="grid_container">
        <div className={`local_imgs_container`}>
          {localImages.map((imgInfo, index) => (
            <img
              key={index}
              src={imgInfo.imgSrc}
              alt={imgInfo.title}
              className={`local_img ${
                imgInfo.className ? imgInfo.className : ""
              }`}
            />
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
                <h3 className="card_title">{membersInfo.name}</h3>
                <p className="card_price">{`${membersInfo.role}`}</p>
                {/* <p className="card_description">Located in {membersInfo.city}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ImageGallery;
