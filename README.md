# syarmine.github.io

Personal site of **Syarmine Shah**: essays and analysis on economics, technology and institutions.
Built with Jekyll and hosted on GitHub Pages.

## Adding articles and charts

### Option 1: Pages CMS (recommended, no code)

1. Go to <https://app.pagescms.org> and sign in with GitHub.
2. Open `Syarmine/syarmine.github.io` and pick the `gh-pages` branch.
3. **Analysis** lists the articles. Click **Add an entry**, fill in the headline, date,
   section label and standfirst, write the article, and save.
4. **Charts** lists the chart cards. Add a title, description, link and optionally an image.

Saving commits to GitHub and the site rebuilds in a minute or two. Images you upload go to
`assets/uploads/`. The form fields are defined in `.pages.yml`.

### Option 2: GitHub's web editor

Open the `_posts` folder on github.com, click **Add file → Create new file**, name it
`YYYY-MM-DD-short-title.md` and start it with:

```yaml
---
title: "Headline"
date: 2026-10-20
kicker: "Health financing"
rubric: "One sentence that states the argument."
chart: line      # line, bars, stacked, hbar, area, dots
tone: brand      # brand, free, warning, success
---

Article text in Markdown.
```

### Charts inside an article

Add a figure anywhere in the article body:

```liquid
{% include figure.html chart="line" title="Chart title" subtitle="What it shows" source="Where the data comes from" %}
{% include figure.html image="/assets/uploads/my-chart.png" title="Chart title" source="Source" %}
```

The first draws a built-in illustrative chart; the second shows an uploaded image (for example an
export from Datawrapper, Flourish or Power BI).

### Sample content

The four articles in `_posts/` marked `sample: true` and the chart cards in `_data/samples.yml`
are previews. They carry a "Sample" badge and are hidden everywhere once
`show_samples: false` is set in `_config.yml`. Delete them when you no longer need them.

## Where things live

| What | Where |
| --- | --- |
| Title, tagline, description, social links, `show_samples` | `_config.yml` |
| Lead headline and about text | `index.html` |
| Articles | `_posts/` |
| Chart cards for `/dashboard/` | `_data/dashboards.yml` |
| Styles and theme colours | `assets/css/style.css` |

The visual design follows the Digital Qasas app (`digitalqasas-lms`): Inter, neutral surfaces and the
petrol brand accent. Light mode is the default, with a dark-mode toggle in the header.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
