import React from 'react'
import './quick-summary.scss'

const QuickSummary = ({data}) => {
  return (
    <div class="quick-summary">
      <h2 id="quick-summary-heading">The Game at a Glance</h2>
        <blockquote></blockquote>
        <div class="quick-summary-content">
          <ul class="text">
            
          </ul>
          <img  id="quick-summary-image" alt="game main character thumbnail" src="{{ site.baseurl }}/images/{{ data.image }}" />
        </div>
    </div>
  )
}

export default QuickSummary
