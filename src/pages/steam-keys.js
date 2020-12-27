import React from "react"
import SEO from "../components/seo"
import Tag from "../components/common-ui/tag"
import { steamKeys } from "../data/steam-keys"
import { keyInfo } from "../components/constants"
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
            className="stamp"
            alt="humble pundle partner stamp"
            src={require("../images/PartnerStampRed.webp")}
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
      <ul className="key-list">
        {steamKeys.map((key, idx) => {
          let { subtitle, socialButton, viewButton } = keyInfo[key.tags[0]]
          let used = key.tags.includes("used")
          return (
            <li
              className={`key ${used && "key-used"} ${
                key.tags[0] === "partner" && "key-ad"
              }`}
              key={idx}
            >
              <div className="key-text-container">
                <div className="key-header">
                  <h2 className="key-title">{key.title}</h2>
                  {key.tags.map((tag, idx) => (
                    <Tag name={tag} key={idx} />
                  ))}
                </div>

                <h2
                  className="key-subtitle"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />

                <div className="key-links">
                  {!used && (
                    <a href={socialButton.link}>
                      <button
                        className={`key-button ${key.tags[0]}`}
                        name="action link"
                      >
                        <img
                          loading="lazy"
                          alt="social media button"
                          src={require(`../images/${socialButton.image}`)}
                        />
                        {socialButton.text}
                      </button>
                    </a>
                  )}
                  {key.tags[0] !== "partner" && (
                    <a href={key.link}>
                      <button
                        className={`key-button humble ${used && "used"}`}
                        name="action link"
                      >
                        <img
                          loading="lazy"
                          alt="view game page button"
                          src={require("../images/humble.webp")}
                        />
                        <p>{viewButton.text}</p>
                      </button>
                    </a>
                  )}
                </div>
              </div>
              <div className="key-image-container">
                <img
                  loading="lazy"
                  alt="game cover"
                  className="key-image"
                  src={require(`../images/keys/${key.image}`)}
                />
                {key.tags[0] !== "partner" && (
                  <p className="key-share-text">
                    Help us share our content @Colludia!
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  </>
)

export default KeysPage
