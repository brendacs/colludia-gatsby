import React from "react"
import summary from "../../data/quick-summary"
import "./quick-summary.scss"

const QuickSummary = ({ data }) => {
  const { game } = data.markdownRemark.frontmatter
  return (
    <div class="quick-summary">
      <h2 id="quick-summary-heading">The Game at a Glance</h2>
      <blockquote dangerouslySetInnerHTML={{ __html: summary[game].quote }} />
      <div class="quick-summary-content">
        <ul class="text">
          {summary[game].points.map(item => (
            <li>
              <span>{item.question}: </span>
              {item.answer}
              <br />
            </li>
          ))}
        </ul>
        <img
          id="quick-summary-image"
          alt="game main character thumbnail"
          src={require(`../../images/${summary[game].image}`)}
        />
      </div>
    </div>
  )
}

export default QuickSummary
