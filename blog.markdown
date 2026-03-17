---
layout: default
title: Blog
permalink: /blog/
---

# Game Dev Field Notes

Here I document thoughts, progress and stories from game development.

## Devlogs

<ul>
{% for post in site.categories.devlog %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>

## Notes

<ul>
{% for post in site.categories.notes %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>

## Postmortems

<ul>
{% for post in site.categories.postmortem %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>