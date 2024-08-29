import React from "react";
import "./ImageGallery.css";

const ImageGallery = ({ localImages, sermonsDataJSON, contactInfoData }) => {
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
        <div className="product_grid">
          {contactInfoData.committeeMembers.map((membersInfo) => (
            <div className="members_card stacked" key={membersInfo.id}>
              <img
                src={membersInfo.imgSrc}
                alt={membersInfo.name}
                className="card_img"
              />
              <div className="card_content contact_content">
                <h6 className="card_title">{membersInfo.name}</h6>
                <p className="card_price">{`${membersInfo.role}`}</p>
                {/* <p className="card_description">Located in {membersInfo.city}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sermonsDataJSON) {
    return (
      <div className="grid_container">
        <div className="sermons_grid">
          {sermonsDataJSON.sermons.map((sermonsInfo) => (
            <div className="members_card stacked" key={sermonsInfo.id}>
              <img
                src={sermonsInfo.imgSrc}
                alt={sermonsInfo.title}
                className="card_img"
              />
              <div className="card_content">
                <h6 className="card_title">
                  {
                    // sermonsInfo.split()
                    sermonsInfo.title
                  }
                </h6>
                <p className="card_price">{`${sermonsInfo.brother}`}</p>
                <p>{sermonsInfo.congregation}</p>
                {/* <p className="card_description">Located in {sermonsInfo.city}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ImageGallery;
