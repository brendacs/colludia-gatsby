import React from "react"
import SEO from "../components/seo"
import { steamKeys } from "../data/steam-keys"
import "../components/templates/info/info.scss"
import "./steam-keys.scss"

const KeysPage = () => (
  <>
    <SEO title="Steam Keys" />
    <section className="steam-keys">
      <div className="key-heading-wrapper">
        <h1 className="description bold">Monthly Steam Key Giveaway</h1>
        <a
          href="https://www.humblebundle.com/games/?partner=colludia"
          name="navigate to humble bundle"
        >
          <img
            alt="humble pundle partner stamp"
            src={require("../images/PartnerStampRed.png")}
          />
        </a>
      </div>
      <h2 className="description bold">
        We gave away over 80 keys already, and we have 30 this month!
      </h2>
      <p className="description">
        When you support us through our social media outlets, it helps us spread
        the word about Colludia&mdash;and the indie games we talk about&mdash;to
        the rest of the world, so we express our appreciation with monthly key
        giveaways! We'll DM you on Twitter or Discord if you've won a key.
      </p>
      <p className="description">
        For subscriber-only keys, we'll email you by the 25th of the month
        unless stated otherwise in our newsletter.
      </p>
      <p className="description">
        Here are the keys for <span className="bold">October</span>! Scroll down
        to see keys we've already given away.
      </p>
      {/** TODO: add twitter buttons, subscribe buttons, view buttons, tags */}
      {/** TODO: create common component stylesheet */}
      <ul className="key-list">
        {steamKeys.map((key, idx) => {
          return (
            <a
              className={`post row key ${
                key.tags && key.tags[0] === "partner" && "key-ad"
              } ${key.tags && key.tags.includes("used") && "used"}`}
              href={key.link}
              name={`navigate to ${key.title} game page`}
              key={idx}
            >
              <img
                alt="game cover"
                className="post-image"
                loading="lazy"
                src={require(`../images/keys/${key.image}`)}
              />
              <div className="post-text-container">
                <h2
                  className="post-title"
                  dangerouslySetInnerHTML={{ __html: key.title }}
                />
              </div>
            </a>
          )
        })}
      </ul>
    </section>
  </>
)

export default KeysPage
