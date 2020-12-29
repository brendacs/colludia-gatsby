import React from "react"
import SEO from "../components/seo"
import "../components/templates/info/info.scss"

const SubscribePage = () => (
  <>
    <SEO title="Subscribe" />
    <section className="subscribe md-info">
      <div>
        <form method="post">
          <h1>Subscribe</h1>
          <h2>
            Receive{" "}
            <a href="https://indiestorygames.substack.com/archives">
              monthly newsletters
            </a>{" "}
            with the most recent articles and get access to the subscriber-only
            Steam key giveaway.
          </h2>
          <p className="subtitle-paragraph">
            Consider supporting us in the easiest way possible! If you're a busy
            person who doesn't have time to check back frequently for new
            articles, you can get our developer spotlights and featured articles
            of the month straight to your inbox with a summary.
          </p>
          <p className="subtitle-paragraph">
            Don't worry&mdash;monthly means monthly, so we won't spam you. To
            check out our previous issues, view them in our{" "}
            <a href="https://indiestorygames.substack.com/archives">
              newsletter archive
            </a>
            . To stay updated on a more frequent basis,{" "}
            <a href="https://twitter.com/indiestorygames">
              follow us on Twitter
            </a>
            .
          </p>
          <iframe
            title="Substack"
            loading="lazy"
            className="substack-iframe"
            src="https://indiestorygames.substack.com/embed"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </form>
      </div>
    </section>
  </>
)

export default SubscribePage
