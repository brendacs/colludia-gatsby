export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const tagColors = {
  review: "terracotta",
  picks: "sage",
  spotlight: "clay",
  opinion: "mustard",
  "in-depth": "lavender",
  short: "pink",
  news: "sky",
  demo: "lavender",
  interview: "clay",
}

// Palette of avatar gradients (mirrors the cozy palette in variables.scss).
// Each author is assigned one deterministically so profile pictures vary.
// Each entry uses a distinct hue combination (no reversed duplicates) so that
// no two authors end up with near-identical, mirror-image gradients.
export const avatarGradients = [
  "linear-gradient(135deg, #7c9466, #3f553f)", // sage -> forest (greens)
  "linear-gradient(135deg, #c25a3f, #d98a5f)", // terracotta -> clay (warm)
  "linear-gradient(135deg, #9789c2, #d385a4)", // lavender -> pink (purple/pink)
  "linear-gradient(135deg, #a9cee0, #9789c2)", // sky -> lavender (blue/purple)
  "linear-gradient(135deg, #dca94f, #7c9466)", // mustard -> sage (gold/green)
  "linear-gradient(135deg, #d98a5f, #dca94f)", // clay -> mustard (orange/gold)
  "linear-gradient(135deg, #3f553f, #a9cee0)", // forest -> sky (green/blue)
  "linear-gradient(135deg, #d385a4, #c25a3f)", // pink -> terracotta (pink/red)
]

// Deterministically pick a gradient for an author based on their name, so the
// same author always gets the same gradient while different authors vary.
export const getAvatarGradient = (author = "") => {
  let hash = 0
  for (let i = 0; i < author.length; i++) {
    hash = (hash << 5) - hash + author.charCodeAt(i)
    hash |= 0
  }
  const index = Math.abs(hash) % avatarGradients.length
  return avatarGradients[index]
}

export const pageDescriptions = {
  default:
    "Indie Story Games is an indie gaming website focused on games with stories to tell and the developers behind them.",
  latest:
    "Our latest featured article about an indie game with a story to tell.",
  review:
    "Our articles in the Reviews discuss indie games we love, especially those with a good story to tell.",
  spotlight:
    "Our Spotlights shine a light on our favorite indie game developers and studios. We review indie devs' best games and distinct style as well as give interviews to dive deeper into their process, design, or plans.",
  picks:
    "Our Picks are lists of indie games under a common theme or from a community event.",
  opinion:
    "Opinion are opinion articles about games in general, but with a specific focus on indie games or games with narratives.",
  genres: "Filter by all the genres of games we write reviews or analyses on.",
  subscribe:
    "Receive monthly newsletters with the most recent indie game reviews, articles, and Steam keys!",
}

export const reviewPageDropdownOptions = [
  { value: "default", label: "Sort articles by", disabled: true },
  { value: "publishDate", label: "Most recent article" },
  { value: "releaseDate", label: "Most recent game release date" },
]

export const genresPageArticleTypeDropdownOptions = [
  { value: "default", label: "Filter by article type", disabled: true },
  { value: "all", label: "All article types" },
  { value: "demo", label: "Demo" },
  { value: "interview", label: "Interview" },
  { value: "our picks", label: "Our Picks" },
  { value: "opinion", label: "Opinion" },
  { value: "review", label: "Review" },
  { value: "spotlight", label: "Spotlight" },
  { value: "#tbt", label: "Throwback" },
]

export const categoriesDefaultDropdownOptions = [
  { value: "default", label: "Filter by game genre", disabled: true },
  { value: "all", label: "All game genres" },
]

export const getDropdownOptionsFromCategories = categories => {
  let options = categoriesDefaultDropdownOptions
  categories.forEach(group => {
    let category = group.category
    options.push({
      value: category.toLowerCase(),
      label: `${category.charAt(0).toUpperCase()}${category.slice(1)} (${group.totalCount
        })`,
    })
  })
  return options
}

export const keyInfo = {
  partner: {
    subtitle:
      "Shop with our link on Humble Bundle to find these keys in sales and bundles starting at $1.",
    socialButton: {
      image: "humble.webp",
      text: "View on Humble",
      link: "https://www.humblebundle.com/games/?partner=indiestorygames",
    },
    viewButton: {
      text: "View on Humble",
    },
  },
  subscriber: {
    subtitle:
      "Subscribe to our newsletter to automatically be entered into the monthly subscriber-only giveaway!",
    socialButton: {
      image: "email.svg",
      text: "Subscribe",
      link: "/subscribe",
    },
    viewButton: {
      text: "View on Humble",
    },
  },
  twitter: {
    subtitle:
      'Retweet an article on Twitter, like and follow <a class="animated-link" href="https://twitter.com/lofi_and_">@Indie Story Games</a> for a chance to get this key!',
    socialButton: {
      image: "twitter-x.png",
      text: "Follow",
      link: "https://twitter.com/lofi_and_",
    },
    viewButton: {
      text: "View on Humble",
    },
  },
  used: {
    subtitle: "This key has already been claimed.",
    viewButton: {
      text: "View on Humble",
    },
  },
}
