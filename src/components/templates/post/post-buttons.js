import React from "react"

const PostButtons = ({ type, slug, linkCopied, onClickCopyLink }) => {
  return (
    <div className={`share-buttons ${type}`}>
      <a
        href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20Colludia%21&url=https://colludia.com${slug}`}
        name="share on twitter"
      >
        <img alt="twitter logo" src={require("../../../images/twitter.svg")} />
      </a>
      <a
        href={`https://facebook.com/sharer.php?u=https://colludia.com${slug}`}
        name="share on facebook"
      >
        <img
          alt="facebook logo"
          src={require("../../../images/facebook.svg")}
        />
      </a>
      <div className="share-link-wrapper">
        <div className={`tooltip ${linkCopied ? "" : "hide"}`}>Copied!</div>
        <a
          onClick={onClickCopyLink}
          className="share-link"
          name="copy link to article to share"
        >
          <img alt="link" src={require("../../../images/link.svg")} />
        </a>
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
