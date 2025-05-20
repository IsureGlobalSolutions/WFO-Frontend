import React from "react";

function Comment() {
  return (
    <div className="aai-comment-form mt-4">
      <h3 className="aai-post-comment-note">Leave a Reply</h3>
      <p className="aai-post-email-note">
        Your email address will not be published.
      </p>
      <form className="mt-4">
        <div className="aai-comment-input mb-3">
          <label className="aai-comment-form-label">Comment</label>
          <textarea className="form-control shadow-none"></textarea>
        </div>
        <div className="aai-comment-input mb-3">
          <label className="aai-comment-form-label">Name</label>
          <input type="text" className="form-control shadow-none" />
        </div>
        <div className="aai-comment-input mb-3">
          <label className="aai-comment-form-label">Email</label>
          <input type="text" className="form-control shadow-none" />
        </div>
        <div className="aai-comment-input mb-3">
          <label className="aai-comment-form-label">Website</label>
          <input type="text" className="form-control shadow-none" />
        </div>
        <div className="aai-comment-input d-flex align-items-center gap-3">
          <input type="checkbox" />
          <label className="aai-comment-form-label m-0">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <div className="mt-4">
          <button className="aai-btn btn-pill-solid">Post Comment</button>
        </div>
      </form>
    </div>
  );
}

export default Comment;
