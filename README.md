# syarmine.github.io

Personal site of **Syarmine Shah**: analysis of health systems, policy and technology.
Built with Jekyll and hosted on GitHub Pages.

## Editing content

| What | Where |
| --- | --- |
| Title, tagline, description, social links | `_config.yml` |
| Lead headline, research and about | `index.html` |
| Analysis (essays and briefings) | `_posts/YYYY-MM-DD-title.md` |
| Charts and dashboards at `/dashboard/` | `_data/dashboards.yml` |
| Sample cards used for previewing | `_data/samples.yml` |
| Styles and theme colours | `assets/css/style.css` (tokens at the top) |

**Before publishing:** set `show_samples: false` in `_config.yml`. While it is `true`, sample cards
(badged "Sample") fill the analysis and chart carousels wherever no real content exists yet.

Optional front matter on posts: `kicker` (section label), `rubric` (one-line standfirst),
`chart` (`line`, `bars`, `stacked`, `hbar`, `area`, `dots`) and `tone` (`brand`, `free`,
`warning`, `success`) control how a post's card looks.

The visual design follows the Digital Qasas app (`digitalqasas-lms`): Inter, neutral surfaces and the
petrol brand accent. Light mode is the default, with a dark-mode toggle in the header.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
