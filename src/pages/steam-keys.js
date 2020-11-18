import React from "react"
import SEO from "../components/seo"
import summary from "../data/steam-keys"
import "../components/templates/info/info.scss"

const KeysPage = () => (
  <>
    <SEO title="Steam Keys" />
    <section class="steam-keys">
      <div class="key-heading-wrapper">
        <h1 class="description bold">Monthly Steam Key Giveaway</h1>
        <a
          href="https://www.humblebundle.com/games/?partner=colludia"
          name="navigate to humble bundle"
        >
          <img
            alt="humble pundle partner stamp"
            src="{{ site.baseurl }}/images/PartnerStampRed.png"
          />
        </a>
      </div>
      <h2 class="description bold">
        We gave away over 80 keys already, and we have 30 this month!
      </h2>
      <p class="description">
        When you support us through our social media outlets, it helps us spread
        the word about Colludia&mdash;and the indie games we talk about&mdash;to
        the rest of the world, so we express our appreciation with monthly key
        giveaways! We'll DM you on Twitter or Discord if you've won a key.
      </p>
      <p class="description">
        For subscriber-only keys, we'll email you by the 25th of the month
        unless stated otherwise in our newsletter.
      </p>
      <p class="description">
        Here are the keys for <span class="bold">October</span>! Scroll down to
        see keys we've already given away.
      </p>

      <ul class="key-list"></ul>
    </section>
  </>
)

export default KeysPage
