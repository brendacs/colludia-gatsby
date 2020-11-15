import React from "react"
import { graphql } from "gatsby"
import Tag from "../common/tag"
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
      <a class={type} href={domain + frontmatter[type]}>
        <img alt={`${type} logo`} src={require(`../../images/${image}`)} />
      </a>
    </li>
  )
}

const AuthorTemplate = ({ data }) => {
  // this prop will be injected by the GraphQL query below
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  console.log(frontmatter)
  return (
    <div class="author">
      <div class="author-heading">
        <div class="author-image-wrapper">
          <img
            alt="author cute alien avatar"
            name="author cute alien avatar"
            class="author-image"
            src={require(`../../images/avatars/${frontmatter.avatar}.svg`)}
          />
        </div>
        <h1 class="author-name">{frontmatter.author}</h1>
        <div>
          {frontmatter.roles.map(role => (
            <Tag name={role} color="random" />
          ))}
        </div>
      </div>
      <h2 class="subheading">About the Author</h2>
      <hr class="line-break" />
      <div class="author-email">
        <a href="mailto:{{ page.email }}" class="animated-link">
          {frontmatter.email}
        </a>
      </div>
      <p class="author-bio">{frontmatter.bio}</p>
      <div class="author-links share-buttons">
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
          <a class="patreon" href="https://patreon.com/colludia">
            <img alt="patreon logo" src={require("../../images/patreon.png")} />
          </a>
        </li>
        <li>
          <a class="discord" href="https://discord.gg/PG2qkZf">
            <img alt="discord logo" src={require("../../images/discord.png")} />
          </a>
        </li>
      </div>
      <h2 class="subheading">Articles by {frontmatter.author}</h2>
      <hr class="line-break" />
      <section class="author-posts">
        <ul class="posts">
          {/* {% for post in site.posts %}
            {% if post.author == page.author %}
              {% include post.html post=post %}
            {% endif %}
          {% endfor %} */}
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
