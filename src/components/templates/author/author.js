import React from "react"
import { graphql } from "gatsby"
import Tag from "../../common-ui/tag"
import AuthorPosts from "./author-posts"
import "./author.scss"

const SocialButton = ({ frontmatter, type }) => {
  let domain = ""
  let image = "folder.svg"

  if (type === "twitter") {
    image = "twitter.svg"
    domain = `https://${type}.com/`
  } else if (type === "instagram") {
    image = "instagram.png"
    domain = `https://${type}.com/`
  }

  return (
    <li>
      <a className={type} href={domain + frontmatter[type]}>
        <img alt={`${type} logo`} src={require(`../../../images/${image}`)} />
      </a>
    </li>
  )
}

const AuthorTemplate = ({ data }) => {
  // this prop will be injected by the GraphQL query below
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <div className="author">
      <div className="author-heading">
        <div className="author-image-wrapper">
          <img
            alt="author cute alien avatar"
            name="author cute alien avatar"
            className="author-image"
            src={require(`../../../images/avatars/${frontmatter.avatar}.svg`)}
          />
        </div>
        <h1 className="author-name">{frontmatter.author}</h1>
        <div>
          {frontmatter.roles.map((role, idx) => (
            <Tag name={role} key={idx} color="random" />
          ))}
        </div>
      </div>
      <h2 className="subheading">About the Author</h2>
      <hr className="line-break" />
      <div className="author-email">
        <a href={`mailto:${frontmatter.email}`} className="animated-link">
          {frontmatter.email}
        </a>
      </div>
      <p className="author-bio">{frontmatter.bio}</p>
      <div className="author-links share-buttons">
        {frontmatter.portfolio && (
          <SocialButton frontmatter={frontmatter} type="portfolio" />
        )}
        {frontmatter.twitter && (
          <SocialButton frontmatter={frontmatter} type="twitter" />
        )}
        {frontmatter.instagram && (
          <SocialButton frontmatter={frontmatter} type="instagram" />
        )}
        <li>
          <a className="patreon" href="https://patreon.com/colludia">
            <img
              alt="patreon logo"
              src={require("../../../images/patreon.png")}
            />
          </a>
        </li>
        <li>
          <a className="discord" href="https://discord.gg/PG2qkZf">
            <img
              alt="discord logo"
              src={require("../../../images/discord.png")}
            />
          </a>
        </li>
      </div>
      <h2 className="subheading">Articles by {frontmatter.author}</h2>
      <hr className="line-break" />
      <section className="author-posts">
        <ul className="posts">
          <AuthorPosts author={frontmatter.author} />
        </ul>
      </section>
    </div>
  )
}

export default AuthorTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        pageType
        slug
        author
        tabTitle
        title
        desc
        class
        roles
        avatar
        bio
        email
        portfolio
        twitter
        instagram
      }
    }
  }
`
