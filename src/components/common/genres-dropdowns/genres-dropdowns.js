import React from "react"
import "./genres-dropdowns.scss"

const GenresDropdowns = () => (
  <section className="all-categories">
    <select className="dropdown" id="type-select-list" defaultValue="">
      <option value="" disabled>
        Choose article type
      </option>
      {/* {% assign sorted_cats = site.categories | sort %}
      {% assign special_cats = "spotlight,review,our picks,demo,opinion,interview" | split: ',' %}
      {% for category in sorted_cats %}
        {% assign cat = category | first %}
        {% if special_cats contains cat %}
          <option value="{{ cat }}">{{ cat | capitalize }}</option>
        {% endif %}
      {% endfor %} */}
    </select>
    <select className="dropdown" id="genre-select-list" defaultValue="">
      <option value="" disabled>
        Choose genre
      </option>
      {/* {% assign sorted_cats = site.categories | sort %}
      {% assign special_cats = "spotlight,review,our picks,demo,opinion,interview" | split: ',' %}
      {% for category in sorted_cats %}
        {% assign cat = category | first %}
        {% unless special_cats contains cat %}
          <option value="{{ cat }}">{{ cat | capitalize }}</option>
        {% endunless %}
      {% endfor %} */}
    </select>
  </section>
)

export default GenresDropdowns
