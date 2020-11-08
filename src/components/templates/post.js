import React from 'react'
import { graphql } from 'gatsby'
import './post.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <main class="post-main">
      <section class="post-page">
        <header>
          <div class="post-page-image-container">
            <img alt="post header image from game" class="post-page-image" src="{{ site.baseurl }}/images/headers/{{ page.image }}" />
          </div>
        </header>
        <div class="article-wrapper">
          <div class="share-buttons vertical">
            <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20%40Colludia%21&url=https://colludia.com{{ page.url }}" name="share on twitter"><img alt="twitter logo" src="{{ site.baseurl }}/images/twitter.svg" /></a>
            <a href="https://facebook.com/sharer.php?u=https://colludia.com{{ page.url }}" name="share on facebook"><img alt="facebook logo" src="{{ site.baseurl }}/images/facebook.svg" /></a>
            <div class="share-link-wrapper">
              <div class="tooltip hide">Copied!</div>
              <a class="share-link" name="copy link to article to share"><img alt="link" src="{{ site.baseurl }}/images/link.svg" /></a>
            </div>
            <a class="jump-comments" href="#disqus_thread" name="jump to comments"><img alt="conment speech bubble" src="{{ site.baseurl }}/images/comment.svg" /></a>
          </div>
          <div class="article">
            <article>
              <div class="post-page-info">
                <h1 class="post-page-title">{frontmatter.title}</h1>
                <div class="post-page-details">
                  <p><a href="{{ site.baseurl }}/author/{{ page.author-url }}" class="animated-link">{frontmatter.author}</a></p>
                  <p>{frontmatter.date}</p>
                  {/* <p class="minute-estimate">{{ page.content | number_of_words | times: 2 | divided_by: 500 | plus: 1 }} minute read</p> */}
                </div>
                <div class="share-buttons horizontal">
                  <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20Colludia%21&url=https://colludia.com{{ page.url }}" name="share on twitter"><img alt="twitter logo" src="{{ site.baseurl }}/images/twitter.svg" /></a>
                  <a href="https://facebook.com/sharer.php?u=https://colludia.com{{ page.url }}" name="share on facebook"><img alt="facebook logo" src="{{ site.baseurl }}/images/facebook.svg" /></a>
                  <div class="share-link-wrapper">
                    <div class="tooltip hide">Copied!</div>
                    <a class="share-link" name="copy link to share"><img alt="link" src="{{ site.baseurl }}/images/link.svg" /></a>
                  </div>
                </div>
              </div>
              {/* {% if page.type contains "review" %}
                {% include quick-summary.html %}
              {% endif %}
              {{ content }} */}
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div class="tags">
                {/* {% for category in page.categories %}
                  {% include tag.html name=category %}
                {% endfor %}
                {% for tag in page.tags %}
                  {% include tag.html name=tag %}
                {% endfor %} */}
              </div>
            </article>
            <p class="sponsor-blurb">Help us pay our writers and maintain our high-quality website and writing by supporting us on <a href="https://patreon.com/colludia">Patreon</a> or buying us a coffee on <a href="https://ko-fi.com/colludia">Ko-fi</a>. To sponsor or advertise with us, visit <a href="{{site.baseurl}}/advertise">Advertise</a>.</p>
            <div id="disqus_thread"></div>
          </div>
        </div>
      </section>
      <input type="text" value="https://colludia.com{{ page.url }}" class="share-link-text invisible-input" autocorrect="off" spellcheck="false" readonly />
      {frontmatter.video &&
        <div class="post-video-iframe" id="youtube">
          <div class="play">
            <div class="triangle"></div>
          </div>
          <img class="post-video-iframe-image" src="{{ site.baseurl }}/images/headers/small/{{ page.image }}" />
        </div>
      }
    </main>
  )
}
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
