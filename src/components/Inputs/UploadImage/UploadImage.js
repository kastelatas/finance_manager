import React from "react";
import SVG from "react-inlinesvg";
import UploadImageIcon from "@/assets/Icons/UploadImage.svg";
import BaseTitle from "@/components/shared/BaseTitle";
import "./UploadImage.scss";

const UploadImage = ({ url, onChange }) => {
  return (
    <div className="upload-image-wrapper flex-center">
      <BaseTitle
        text={"Your Profile Picture"}
        fontSize={"16"}
      />
      <br />
      <label
        className="upload-image"
        htmlFor="file"
      >
        <input
          id="file"
          type="file"
          onChange={onChange}
        />

        {!url ? (
          <div className="upload-image__frame">
            <SVG src={UploadImageIcon} />
          </div>
        ) : (
          <img
            src={url}
            alt=""
          />
        )}

        <div className="upload-image__upload-photo">Upload your photo</div>
      </label>
    </div>
  );
};

export default UploadImage;
