# syarmine.github.io

Professional portfolio of **Syarmine Shah**. Built with Jekyll and hosted on GitHub Pages
from the `gh-pages` branch.

## Editing the content

All content lives in small data files, so there is no HTML to touch.

| Section | File |
| --- | --- |
| Summary and "At a glance" | `_data/profile.yml` |
| Technical expertise | `_data/expertise.yml` |
| Projects and case studies (carousel and pop-ups) | `_data/projects.yml` |
| Career timeline | `_data/career.yml` |
| Education | `_data/education.yml` |
| Verified credentials | `_data/credentials.yml` |
| Name, links, writing link, analytics | `_config.yml` |

**Easiest way:** sign in at <https://app.pagescms.org> with GitHub, open
`Syarmine/syarmine.github.io` on the `gh-pages` branch and edit each section as a form. The forms
are defined in `.pages.yml`. You can also edit the files directly on github.com.

### Things to complete

- `_data/career.yml` and `_data/education.yml`: replace every `[bracketed]` value.
- `_data/credentials.yml`: add each credential's public verification link to `url`
  (Microsoft Learn credential page, Credly or Coursera). A **Verify** button appears when it is set.
- `_data/projects.yml`: the five projects are templates. Replace the challenge, solution and
  outcome numbers with real ones, then set `placeholder: false` to remove the
  "Figures on this project are placeholders" note.
- `_data/profile.yml`: add your role to "Current".

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
