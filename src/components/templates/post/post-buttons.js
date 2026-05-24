import React from "react"

const PostButtons = ({ type, slug, linkCopied, onClickCopyLink }) => {
  return (
    <div className={`share-buttons ${type}`}>
      <a
        href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20Indie%20Story%20Games%21&url=https://indiestorygames.com${slug}`}
        name="share on twitter"
      >
        <img alt="twitter logo" src={require("../../../images/twitter-x.png")} />
      </a>
      <a
        href={`https://facebook.com/sharer.php?u=https://indiestorygames.com${slug}`}
        name="share on facebook"
      >
        <img
          alt="facebook logo"
          src={require("../../../images/facebook.svg")}
        />
      </a>
      <div className="share-link-wrapper">
        <div className={`tooltip ${linkCopied ? "" : "hide"}`}>Copied!</div>
        <button
          type="button"
          onClick={onClickCopyLink}
          className="share-link"
          aria-label="copy link to article to share"
        >
          <img alt="link" src={require("../../../images/link.svg")} />
        </button>
      </div>
      <a
        className="jump-comments"
        href="#disqus_thread"
        name="jump to comments"
      >
        <img
          alt="comment speech bubble"
          src={require("../../../images/comment.svg")}
        />
      </a>
    </div>
  )
}

export default PostButtons
