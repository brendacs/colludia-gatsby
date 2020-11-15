import React from "react"
import { graphql } from "gatsby"
import "./author.scss"

const AuthorTemplate = ({ data }) => {
  // this prop will be injected by the GraphQL query below
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  return (
    <div class="author-wrapper">
      <div class="author-heading">
        <div class="author-image-wrapper">
          <img name="author cute alien avatar" class="author-image" src="{{ site.baseurl }}/images/avatars/{{ page.avatar }}.svg" />
        </div>
        <h1 class="author-name">{frontmatter.author}</h1>
        <div>
          {/* {% for role in page.roles %}
            {% include tag.html name=role %}
          {% endfor %} */}
        </div>
      </div>
      <h2 class="subheading">About the Author</h2>
      <hr class="line-break" />
      <div class="author-email">
        <a href="mailto:{{ page.email }}" class="animated-link">{frontmatter.email}</a>
      </div>
      <p class="author-bio">{frontmatter.bio}</p>
      <div class="author-links share-buttons">
        {/* {% if page.portfolio %} */}
          <li><a class="portfolio" href="{{ page.portfolio }}"><img alt="portfolio logo" src="{{ site.baseurl }}/images/folder.svg" /></a></li>
        {/* {% endif %}
        {% if page.twitter %} */}
          <li><a class="twitter" href="https://twitter.com/{{ page.twitter }}"><img alt="twitter logo" src="{{ site.baseurl }}/images/twitter.svg" /></a></li>
        {/* {% endif %}
        {% if page.instagram %} */}
          <li><a class="instagram" href="https://instagram.com/{{ page.instagram }}"><img alt="instagram logo" src="{{ site.baseurl }}/images/instagram.png" /></a></li>
        {/* {% endif %} */}
        <li><a class="patreon" href="https://patreon.com/colludia"><img alt="patreon logo" src="{{ site.baseurl }}/images/patreon.png" /></a></li>
        <li><a class="discord" href="https://discord.gg/PG2qkZf"><img alt="discord logo" src="{{ site.baseurl }}/images/discord.png" /></a></li>
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
      }
    }
  }
`
