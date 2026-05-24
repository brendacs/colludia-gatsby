import React from "react"

const SocialButtons = () => (
  <div className="share-buttons">
    <a
      className="twitter"
      href="https://twitter.com/lofi_and_"
      name="indie story games twitter"
    >
      <img alt="twitter logo" src={require("../../images/twitter.svg")} />
    </a>
    <a
      className="substack"
      href="https://indiestorygames.substack.com"
      name="indie story games substack"
    >
      <img alt="substack logo" src={require("../../images/substack.png")} />
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
