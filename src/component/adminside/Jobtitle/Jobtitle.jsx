import React from "react";
import "../adminscreens.css";
import Stickyheader from "../../upperheader/Stickyheader";
import JobtitleAPI from "./JobtitleAPI";

const Jobtitle = ({ isSidebarExpanded }) => {
 

  return (
    <>
      <div className="ps-2">
        <Stickyheader isSidebarExpandedName={isSidebarExpanded} />
      </div>
      <div className="toolbody ms-2">
      <div className="designationlist m-4 mt-2 p-4">
      <JobtitleAPI/>
        </div>
      </div>
    </>
  );
};

export default Jobtitle;
