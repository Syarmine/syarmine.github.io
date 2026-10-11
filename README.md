# syarmine.github.io

Professional portfolio of **Syarmine Shah**. Built with Jekyll and hosted on GitHub Pages
from the `gh-pages` branch.

## Editing the content

All content lives in small data files, so there is no HTML to touch.

| Section | File |
| --- | --- |
| Summary, "At a glance" and impact figures | `_data/profile.yml` |
| Technical expertise | `_data/expertise.yml` |
| Projects and case studies (carousel and pop-ups) | `_data/projects.yml` |
| Career timeline | `_data/career.yml` |
| Teaching and leadership | `_data/teaching.yml` |
| Education | `_data/education.yml` |
| Verified credentials | `_data/credentials.yml` |
| Name, links, writing link, analytics | `_config.yml` |

**Easiest way:** sign in at <https://app.pagescms.org> with GitHub, open
`Syarmine/syarmine.github.io` on the `gh-pages` branch and edit each section as a form. The forms
are defined in `.pages.yml`. You can also edit the files directly on github.com.

### Notes

- Case study figures in `_data/projects.yml` come from the CV. The `placeholder` flag is still
  supported if you add a project before its numbers are confirmed.
- Credentials accept a public verification link in `url`, which adds a **Verify** button.

## Design

The look follows the Digital Qasas app (`digitalqasas-lms`): Inter, neutral surfaces and the petrol
brand accent. Light mode is the default, with a dark-mode toggle. Styles are in
`assets/css/style.css` (colour tokens at the top); behaviour (carousel, pop-ups, timeline) is in
`assets/js/main.js`.

`/dashboard/` is a placeholder page for future dashboards.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
