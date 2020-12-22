import React, { useState } from "react"
import SEO from "../../seo"
import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import Tag from "../../common-ui/tag"
import QuickSummary from "./quick-summary"
import PostButtons from "./post-buttons"
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
    tagline,
    image,
    slug,
    title,
    author,
    date,
    postType,
    categories,
    tags,
    video,
  } = frontmatter
  const text = html.replace(/(<([^>]+)>)/gi, "")
  const minutes = parseInt((text.split(" ").length * 2) / 500) + 1

  const [linkCopied, setLinkCopied] = useState(false)
  const [playing, setPlaying] = useState(false)

  // Cleans out the html tag for game title
  const cleanTitle =
    title.indexOf("game-title") !== -1
      ? title.split("<em class='game-title'>")[0] +
        title.split("<em class='game-title'>")[1]?.split("</em>")[0] +
        title.split("<em class='game-title'>")[1]?.split("</em>")[1]
      : title

  const disqusConfig = {
    url: `https://colludia.com${slug}`,
    identifier: slug,
    title: cleanTitle,
  }

  const onClickCopyLink = () => {
    copyLink()
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 3000)
  }

  return (
    <>
      <SEO
        title={cleanTitle}
        description={tagline}
        author={author}
        image={image}
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
            <PostButtons
              slug={slug}
              type="vertical"
              linkCopied={linkCopied}
              onClickCopyLink={onClickCopyLink}
            />
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
                        to={`/author/${author?.split(" ")[0].toLowerCase()}`}
                        className="animated-link"
                      >
                        {author}
                      </Link>
                    </p>
                    <p>{date}</p>
                    <p className="minute-estimate">{minutes} minute read</p>
                  </div>
                  <PostButtons
                    slug={slug}
                    type="horizontal"
                    linkCopied={linkCopied}
                    onClickCopyLink={onClickCopyLink}
                  />
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
              <Disqus config={disqusConfig} />
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
        <div className="post-video-iframe" id="youtube">
          {!playing ? (
            <>
              <div className="play" onClick={() => setPlaying(true)}>
                <div className="triangle"></div>
              </div>
              <img
                alt="custom youtube video thumbnail with game screenshot"
                className="post-video-iframe-image"
                src={require(`../../../images/headers/small/${image}`)}
              />
            </>
          ) : (
            <iframe
              class="post-video-iframe"
              src={`${video}?autoplay=1&modestbranding=1`}
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; autoplay"
              allowfullscreen
            ></iframe>
          )}
        </div>
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
        game
        slug
        title
        postType
        tagline
        date(formatString: "MMMM DD, YYYY")
        releaseDate(formatString: "MMMM DD, YYYY")
        image
        video
        author
        categories
        tags
      }
    }
  }
`
