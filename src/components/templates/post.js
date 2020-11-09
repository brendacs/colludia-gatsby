import React from 'react'
import { graphql } from 'gatsby'
import Tag from '../common/tag'
import QuickSummary from './quick-summary'
import './post.scss'

const PostTemplate = ({data}) => { // this prop will be injected by the GraphQL query below
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <main className="post-main">
      <section className="post-page">
        <header>
          <div className="post-page-image-container">
            <img alt="post header image from game" className="post-page-image" src={require(`../../images/headers/${frontmatter.image}`)} />
          </div>
        </header>
        <div className="article-wrapper">
          <div className="share-buttons vertical">
            <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20%40Colludia%21&url=https://colludia.com{{ page.url }}" name="share on twitter"><img alt="twitter logo" src={require('../../images/twitter.svg')} /></a>
            <a href="https://facebook.com/sharer.php?u=https://colludia.com{{ page.url }}" name="share on facebook"><img alt="facebook logo" src={require('../../images/facebook.svg')} /></a>
            <div className="share-link-wrapper">
              <div className="tooltip hide">Copied!</div>
              <a className="share-link" name="copy link to article to share"><img alt="link" src={require('../../images/link.svg')} /></a>
            </div>
            <a className="jump-comments" href="#disqus_thread" name="jump to comments"><img alt="conment speech bubble" src={require('../../images/comment.svg')} /></a>
          </div>
          <div className="article">
            <article>
              <div className="post-page-info">
                <h1 className="post-page-title" dangerouslySetInnerHTML={{ __html: frontmatter.title }} />
                <div className="post-page-details">
                  <p><a href={`../../content/authors/${frontmatter.authorUrl}`} className="animated-link">{frontmatter.author}</a></p>
                  <p>{frontmatter.date}</p>
                  {/* <p className="minute-estimate">{{ page.content | number_of_words | times: 2 | divided_by: 500 | plus: 1 }} minute read</p> */}
                </div>
                <div className="share-buttons horizontal">
                  <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20Colludia%21&url=https://colludia.com{{ page.url }}" name="share on twitter"><img alt="twitter logo" src="{{ site.baseurl }}/images/twitter.svg" /></a>
                  <a href="https://facebook.com/sharer.php?u=https://colludia.com{{ page.url }}" name="share on facebook"><img alt="facebook logo" src="{{ site.baseurl }}/images/facebook.svg" /></a>
                  <div className="share-link-wrapper">
                    <div className="tooltip hide">Copied!</div>
                    <a className="share-link" name="copy link to share"><img alt="link" src="{{ site.baseurl }}/images/link.svg" /></a>
                  </div>
                </div>
              </div>
              {frontmatter.postType.includes('review') &&
                <QuickSummary data={data} />
              }
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className="tags">
                {frontmatter.categories.map((category) => (
                  <Tag name={category} color='random' />
                ))}
                {frontmatter.tags.map((tag) => (
                  <Tag name={tag} color='random' />
                ))}
              </div>
            </article>
            <p className="sponsor-blurb">Help us pay our writers and maintain our high-quality website and writing by supporting us on <a href="https://patreon.com/colludia">Patreon</a> or buying us a coffee on <a href="https://ko-fi.com/colludia">Ko-fi</a>. To sponsor or advertise with us, visit <a href="{{site.baseurl}}/advertise">Advertise</a>.</p>
            <div id="disqus_thread"></div>
          </div>
        </div>
      </section>
      <input type="text" value="https://colludia.com{{ page.url }}" className="share-link-text invisible-input" autocorrect="off" spellcheck="false" readonly />
      {frontmatter.video &&
        <div className="post-video-iframe" id="youtube">
          <div className="play">
            <div className="triangle"></div>
          </div>
          <img className="post-video-iframe-image" src={require(`../../images/headers/small/${frontmatter.image}`)} />
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

export default PostTemplate
