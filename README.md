# syarmine.github.io

Personal site of **Syarmine Shah**: work and writing on health systems, policy, AI and institutions.
Built with Jekyll and hosted on GitHub Pages.

## Editing content

| What | Where |
| --- | --- |
| Site title, tagline, description, contact link, social links | `_config.yml` |
| Home page copy (hero, approach, writing, contact) | `index.html` |
| "Areas of focus" cards | `_data/focus.yml` |
| "Work" cards | `_data/projects.yml` |
| Dashboard gallery at `/dashboard/` (placeholder until entries are added) | `_data/dashboards.yml` |
| Essays and notes | `_posts/YYYY-MM-DD-title.md` |
| Styles and theme colours | `assets/css/style.css` (tokens at the top) |

The visual design follows the Digital Qasas app (`digitalqasas-lms`): Inter, neutral surfaces and the
petrol brand accent (`--brand`). Light mode is the default, with a dark-mode toggle in the header.
Cards take a `tone` of `brand`, `free`, `warning` or `success`.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
