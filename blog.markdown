---
layout: blog
title: Blog
permalink: /blog/
---

<div class="blog-container">
 
  <h2>Game Dev Field Notes</h2>

Here I document thoughts, progress and stories from game development.

<h2>Devlogs</h2>

<ul>
{% for post in site.categories.devlog %}
  <li>
  <strong>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </strong><br>
  <span class="post-meta">{{ post.date | date: "%B %d, %Y" }}</span>
</li>
{% endfor %}
</ul>

<h2>Notes</h2>

<ul>
{% for post in site.categories.notes %}
<li>
  <strong>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </strong><br>
  <span class="post-meta">{{ post.date | date: "%B %d, %Y" }}</span>
</li>
{% endfor %}
</ul>

<h2>Postmortems</h2>
 work in progress
<ul>
{% for post in site.categories.postmortem %}
<li>
  <strong>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </strong><br>
  <span class="post-meta">{{ post.date | date: "%B %d, %Y" }}</span>
</li>
{% endfor %}
</ul>

</div>