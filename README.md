# Personal Website

A dark-themed personal site built with **Next.js (App Router), Tailwind CSS, and
Framer Motion**. It has an About/Welcome page, a filterable Portfolio, an on-site
Blog (MDX) with a Substack subscribe box, and a working Contact form.

## Quick start

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

```bash
pnpm build   # production build (also type-checks)
pnpm start   # serve the production build
```

## Where to edit things

| What | File |
| --- | --- |
| Name, role, socials, intro text, "Currently Up To", quotes | `site.config.ts` |
| Portfolio projects (and their categories) | `content/projects.ts` |
| Blog posts | `content/blog/*.mdx` (one file per post) |
| Profile photo | drop an image in `public/` and point `profileImage` in `site.config.ts` at it |
| Colors / theme | the `@theme` block in `app/globals.css` (e.g. `--color-accent`) |

### Intro highlights

In `site.config.ts`, wrap any phrase in `==double equals==` to give it the
animated gold highlight on the About page.

### Blog posts

Each post is an `.mdx` file in `content/blog/` with frontmatter:

```mdx
---
title: "Post title"
date: "2026-06-01"
excerpt: "One-line summary shown in the list."
tags: ["tag-one", "tag-two"]
---

Your markdown / MDX content here.
```

## Contact form

The form posts to `app/api/contact/route.ts`, which emails you via
[Resend](https://resend.com).

1. Copy `.env.example` to `.env.local`.
2. Add your `RESEND_API_KEY` and set `CONTACT_TO_EMAIL`.

Without a key, the form still works in development — submissions are logged to
the server console instead of being emailed, so you can test the UI.

> Prefer no backend key? Swap the `fetch("/api/contact", …)` call in
> `components/ContactForm.tsx` for a [Formspree](https://formspree.io) form
> endpoint and delete `app/api/contact/route.ts`.

## Newsletter

Set `substackUrl` in `site.config.ts`. The subscribe box on the Blog page opens
your Substack subscribe page (pre-filling the reader's email).

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel dashboard.
4. Deploy.
