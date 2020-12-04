import React, { useState } from "react"
import SEO from "../../seo"
import { graphql, Link } from "gatsby"
import Tag from "../../common-ui/tag"
import QuickSummary from "./quick-summary"
import "./post.scss"

const copyLink = () => {
  const input = document.getElementById("invisible-input")
  input.select()
  document.execCommand("copy")
}

const PostTemplate = ({ data }) => {
  // this prop will be injected by the GraphQL query below
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const {
    tabTitle,
    desc,
    image,
    slug,
    title,
    author,
    authorUrl,
    date,
    postType,
    categories,
    tags,
    video,
  } = frontmatter
  const text = html.replace(/(<([^>]+)>)/gi, "")
  const minutes = parseInt((text.split(" ").length * 2) / 500) + 1

  const [linkCopied, setLinkCopied] = useState(false)

  return (
    <>
      <SEO
        title={tabTitle}
        description={desc}
        author={author}
        image={require(`../../../images/headers/${image}`)}
      />
      <main className="post-main">
        <section className="post-page">
          <header>
            <div className="post-page-image-container">
              <img
                alt="post header screenshot from game"
                className="post-page-image"
                src={require(`../../../images/headers/${image}`)}
              />
            </div>
          </header>
          <div className="article-wrapper">
            <div className="share-buttons vertical">
              <a
                href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20%40Colludia%21&url=https://colludia.com${slug}`}
                name="share on twitter"
              >
                <img
                  alt="twitter logo"
                  src={require("../../../images/twitter.svg")}
                />
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
                <div className={`tooltip ${linkCopied ? "" : "hide"}`}>
                  Copied!
                </div>
                <a
                  onClick={() => {
                    copyLink()
                    setLinkCopied(true)
                    setTimeout(() => setLinkCopied(false), 3000)
                  }}
                  className="share-link"
                  name="copy link to article to share"
                >
                  <img alt="link" src={require("../../../images/link.svg")} />
                </a>
              </div>
              {/** TODO: disqus comments */}
              {/* <a
                className="jump-comments"
                href="#disqus_thread"
                name="jump to comments"
              >
                <img
                  alt="conment speech bubble"
                  src={require("../../../images/comment.svg")}
                />
              </a> */}
            </div>
            <div className="article">
              <article>
                <div className="post-page-info">
                  <h1
                    className="post-page-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <div className="post-page-details">
                    <p>
                      <Link
                        to={`/author/${authorUrl}`}
                        className="animated-link"
                      >
                        {author}
                      </Link>
                    </p>
                    <p>{date}</p>
                    <p className="minute-estimate">{minutes} minute read</p>
                  </div>
                  <div className="share-buttons horizontal">
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20Colludia%21&url=https://colludia.com${slug}`}
                      name="share on twitter"
                    >
                      <img
                        alt="twitter logo"
                        src={require("../../../images/twitter.svg")}
                      />
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
                      <div className={`tooltip ${linkCopied ? "" : "hide"}`}>
                        Copied!
                      </div>
                      <a
                        onClick={() => {
                          copyLink()
                          setLinkCopied(true)
                          setTimeout(() => setLinkCopied(false), 3000)
                        }}
                        className="share-link"
                        name="copy link to article to share"
                      >
                        <img
                          alt="link"
                          src={require("../../../images/link.svg")}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {postType.includes("review") && <QuickSummary data={data} />}
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <div className="tags">
                  {categories.map((category, idx) => (
                    <Tag name={category} key={idx} color="random" />
                  ))}
                  {tags.map((tag, idx) => (
                    <Tag name={tag} key={idx} color="random" />
                  ))}
                </div>
              </article>
              <p className="sponsor-blurb">
                Help us pay our writers and maintain our high-quality website
                and writing by supporting us on{" "}
                <a href="https://patreon.com/colludia">Patreon</a> or buying us
                a coffee on <a href="https://ko-fi.com/colludia">Ko-fi</a>. To
                sponsor or advertise with us, visit{" "}
                <Link to="/ads">Advertise</Link>.
              </p>
              <div id="disqus_thread"></div>
            </div>
          </div>
        </section>
        <input
          type="text"
          value={`https://colludia.com${slug}`}
          className="share-link-text invisible-input"
          id="invisible-input"
          autoCorrect="off"
          spellCheck="false"
          readOnly
        />
        {video && (
          <div className="post-video-iframe" id="youtube">
            <div className="play">
              <div className="triangle"></div>
            </div>
            <img
              alt="custom youtube video thumbnail with game screenshot"
              className="post-video-iframe-image"
              src={require(`../../../images/headers/small/${image}`)}
            />
          </div>
        )}
      </main>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        pageType
        game
        slug
        tabTitle
        title
        postType
        desc
        tagline
        date(formatString: "MMMM DD, YYYY")
        releaseDate(formatString: "MMMM DD, YYYY")
        image
        video
        author
        authorUrl
        categories
        tags
      }
    }
  }
`
