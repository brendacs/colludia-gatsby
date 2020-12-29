import React from "react"

const SocialButtons = () => (
  <div className="share-buttons">
    <a
      className="steam"
      href="https://store.steampowered.com/curator/37254837/"
      name="steam curator page"
    >
      <img alt="steam logo" src={require("../../images/steam.webp")} />
    </a>
    <a
      className="twitter"
      href="https://twitter.com/indiestorygames"
      name="indie story games twitter"
    >
      <img alt="twitter logo" src={require("../../images/twitter.svg")} />
    </a>
    <a
      className="patreon"
      href="https://patreon.com/indiestorygames"
      name="indie story games patreon"
    >
      <img alt="patreon logo" src={require("../../images/patreon.webp")} />
    </a>
    <a
      className="discord"
      href="https://discord.gg/PG2qkZf"
      name="indie story games discord server"
    >
      <img alt="discord logo" src={require("../../images/discord.webp")} />
    </a>
  </div>
)

export default SocialButtons
