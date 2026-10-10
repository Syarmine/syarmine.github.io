# syarmine.github.io

Personal portfolio of **Syarmine Shah** — data analyst & data educator based in Kuala Lumpur.
Built with Jekyll and hosted on GitHub Pages.

## Editing content

| What | Where |
| --- | --- |
| Name, role, location, contact link, social links | `_config.yml` |
| Featured projects (cards in "Selected work") | `_data/projects.yml` |
| Toolkit groups and tools | `_data/skills.yml` |
| Home page copy (hero, about, contact) | `index.html` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Profile photo | `images/avatar.jpg` |
| Styles / theme colours | `assets/css/style.css` (tokens at the top) |

The visual design follows the Digital Qasas app (`digitalqasas-lms`): Inter, neutral surfaces and the
petrol brand accent (`--brand`). Light mode is the default, with a dark-mode toggle in the header.
Project and toolkit cards take a `tone` of `brand`, `free`, `warning` or `success`.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
