import React from "react"
import "./genres-dropdowns.scss"

const GenresDropdowns = () => (
  <section class="all-categories">
    <select class="dropdown" id="type-select-list">
      <option value="" disabled selected>
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
    <select class="dropdown" id="genre-select-list">
      <option value="" disabled selected>
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
