import React from "react";
import ProtoTypes from "prop-types";

function VideoPopup({ isActive, handleActive }) {
  const toggleActive = (e) => {
    if (e.target.attributes.name !== "player") {
      handleActive();
    }
  };
  return (
    <div
      className={`vp-wrapper ${isActive ? "active" : ""}`}
      onClick={(e) => toggleActive(e)}
    >
      <div style={{ display: isActive ? "flex" : "none" }}>
        <div className="vp-Close" onClick={handleActive}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <iframe
          name="player"
          id="youtube-2179"
          frameBorder="0"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Player for Placeholder Video"
          width="640"
          height="360"
          src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=0&amp;controls=0&amp;disablekb=1&amp;playsinline=0&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=file%3A%2F%2F%2FC%3A%2FUsers%2FDELL%2FDesktop%2FProjects%2Faai%2Faai-html-template%2Fmain%2520files%2FHTML%2520files%2Fabout.html&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;customControls=true&amp;noCookie=true&amp;enablejsapi=1&amp;widgetid=1"
        ></iframe>
      </div>
    </div>
  );
}

VideoPopup.propTypes = {
  isActive: ProtoTypes.bool,
  handleActive: ProtoTypes.func,
};

export default VideoPopup;
