---
title: "My first post"
headerImage: "875x250-blue.png"
---

## A Markdown page

There is a shortcode for easily inserting images. You can add alt-text, an optional caption and your own sizes-attribute:

{% raw %}

```
{% imagePlaceholder "path to image", "alt text", "caption - optional!" %}

{% imagePlaceholder "path to image", "alt text", "", "(min-width:30em)  50vw, 100vw" %}
```
{% endraw %}

{% imagePlaceholder "./src/assets/img/bridge-between-wi-and-mz.png", "The bridge between Wiesbaden and Mainz at night.", "Bridge between Wiesbaden and Mainz at night" %}
