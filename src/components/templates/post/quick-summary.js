import React from "react"
import summary from "../../../data/quick-summary.json"
import "./quick-summary.scss"

const QuickSummary = ({ data }) => {
  const { game } = data.markdownRemark.frontmatter
  const summaryData = summary[game]
  return (
    <div className="quick-summary">
      <h2 id="quick-summary-heading">The Game at a Glance</h2>
      <blockquote dangerouslySetInnerHTML={{ __html: summaryData.quote }} />
      <div className="quick-summary-content">
        <ul className="text">
          {Object.keys(summaryData.points).map(key => (
            <li key={key.toLowerCase().split(" ").join("")}>
              <span>{key}: </span>
              {summaryData.points[key]}
              <br />
            </li>
          ))}
        </ul>
        <img
          id="quick-summary-image"
          alt="game main character thumbnail"
          src={require(`../../../images/${summaryData.image}`)}
        />
      </div>
    </div>
  )
}

export default QuickSummary
