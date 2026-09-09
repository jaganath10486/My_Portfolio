# Portfolio — S Naga Jaganath

Freelance portfolio for an AI full stack engineer. Positioned on breadth with
evidence: fast, SEO-ready frontends, backends that stay correct under load, and
AI wired into real workflows — with payments, ticketing and booking work as the
proof.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and CSS
Modules, with no UI framework and no runtime dependencies beyond React and
Next. Every route is prerendered as static HTML at build time; only two small
interactive pieces run on the client.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                              |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Development server                        |
| `npm run build`     | Production build (prerenders all 6 URLs)  |
| `npm start`         | Serve the production build                |
| `npm run lint`      | ESLint (`next/core-web-vitals` + TS)      |
| `npm run typecheck` | `tsc --noEmit`                            |

## Configuration

Copy `.env.example` to `.env.local`. The only variable is the canonical origin
used for `metadataBase`, `sitemap.xml`, `robots.txt`, canonical links and
JSON-LD:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

It falls back to `NEXT_PUBLIC_VERCEL_URL` and then to the current production
URL, so previews resolve to themselves. There are no secrets.

## Routes

| Route          | Contents                                                            |
| -------------- | ------------------------------------------------------------------- |
| `/`            | Offer → things I build → where it gets hard → work → how I work → contact |
| `/work`        | Three projects with pages, plus earlier work as a linked list       |
| `/work/[slug]` | Case study: what I built, **the hard part**, stack, links           |
| `/about`       | Narrative, experience, stack, education                             |

Contact is a closing block on every route rather than a page of its own — the
offer converts better inside the narrative than behind a click.

Only three projects have pages. Coursework and early side projects are listed
by name and linked to the repo (`archived: true` in the data), because a
three-sentence CRUD exercise sitting at the same weight as the LLM gateway
costs more credibility than it earns. `generateStaticParams` and `sitemap.ts`
both read `liveProjects`, so no archived slug is ever advertised or routable.

## Structure

Everything lives under `app/`. Only files named `page.tsx`, `route.ts`,
`layout.tsx` and the other App Router conventions create routes, so
`components/`, `lib/`, `data/` and `types/` sit alongside them without
affecting routing.

```
app/
  layout.tsx             Root layout: font, metadata, header/footer, skip link
  page.tsx               Home
  about/page.tsx         About
  work/page.tsx          Work index
  work/[slug]/page.tsx   Project detail (generateStaticParams + generateMetadata)
  globals.css            Design tokens, layout primitives, type scale, controls
  error.tsx              Route error boundary (client)
  not-found.tsx          404
  status.module.css      Shared styling for error.tsx / not-found.tsx
  robots.ts              /robots.txt
  sitemap.ts             /sitemap.xml — live routes only
  manifest.ts            /manifest.webmanifest
  opengraph-image.tsx    1200x630 social card, generated at build time
  icon.jpg               Favicon

  components/
    layout/    Header (server), NavBar (client), Footer (server)
    home/      Hero, Services (plain-language menu), Capabilities (depth),
               Approach (how I work)
    work/      WorkIndex, WorkRow, FeaturedProject, ProjectLinks, ArchivedList
    about/     SkillMatrix, EducationList, AchievementList
    shared/    Band, SectionHeading, StackList, ExperienceEntry, ContactBlock
    client/    CopyEmailButton ("use client")
    ui/        Icons, JsonLd

  data/        Portfolio content (constants.ts) and navigation config
  lib/         site.ts (canonical URL/config), structured-data.ts (JSON-LD),
               text.ts (sentence splitting for prose blobs)
  types/       Domain interfaces

public/        Profile photo and the one real product screenshot
```

### Path aliases

`@/*` resolves to `./app/*`, so `@/components/…`, `@/lib/…`, `@/data/…` and
`@/types` all point inside `app/`. `public/` stays at the repo root, so
`@/public/*` is aliased separately — see `paths` in `tsconfig.json`. The more
specific pattern wins, which is why the single static image import in
`components/home/Hero.tsx` keeps working.

## Editing content

All copy lives in [`app/data/constants.ts`](app/data/constants.ts) — `Bio`,
`capabilities`, `principles`, `skills`, `experiences`, `education`,
`achievements`, `coreStack` and `projects` — with the headline, the pitch and
the prefilled `mailto` in [`app/lib/site.ts`](app/lib/site.ts). The types in
[`app/types`](app/types) keep the shapes honest; adding an entry is enough for
it to render.

A few conventions worth knowing:

- **`services`** is the plain-language menu — deliberately free of framework
  names, so a founder who needs WhatsApp login recognises it without knowing
  what Express is. It is what lets a visitor self-identify.
- **`capabilities`** is the depth behind it. Each entry pairs a memorable
  `claim` with a `proof` line, and every proof traces to a real entry in
  `experiences` or `projects`. If a claim cannot be evidenced in conversation
  it does not belong.
- **`experiences`** and **`projects`** both support `archived: true` — kept in
  the data, not rendered. The two 2021–23 internships are archived to match
  what the résumé itself omits; `shownExperiences` is the rendered list.
- **Projects** are keyed by `slug`, which is also the URL. `featured` ranks the
  home page; `archived` demotes an entry to the linked list. `hardPart` is the
  case-study section a client and a CTO both read — leave it undefined rather
  than inventing one. `image` is set only where a genuine screenshot exists.
- **Experience** descriptions are arrays of `highlights`, one outcome per line,
  so nothing has to be clamped.
- The **hero** does not name the current employer. That is deliberate: the
  ledger is attributed to a period, and the company is named in the experience
  entries and the structured data instead.

The category filter was removed along with the seven archived projects: a
control that reduces a list of three to a list of one is friction wearing the
costume of a feature. Adding a new category now means `ProjectCategory` in
`app/types/index.ts` plus a label in `categoryLabels`.

## Client Components

Only two, each kept as small as possible:

- `components/layout/NavBar.tsx` — active route state and the mobile menu,
  which is a native `<dialog>` so the platform supplies the focus trap
- `components/client/CopyEmailButton.tsx` — clipboard copy in the contact block

Everything else renders on the server.

## Design system

Tokens live at the top of `app/globals.css`: a deep petrol ground, a single
brass accent, and one variable typeface (Archivo) worked across its weight
**and width** axes — hierarchy comes from width rather than from a second
family, and there is no monospace. `globals.css` also carries the layout
primitives (`.shell`, `.band`, `.railed`), the type scale (`.display`, `.h1`,
`.h2`, `.h3`, `.lead`, `.prose`, `.meta`) and the controls (`.btn`, `.link`).

Motion is one orchestrated moment on load — the rail drawing down the hero
while the headline wipes up — and after that only transitions that answer
something the visitor did. There are no scroll-triggered reveals.
`prefers-reduced-motion` collapses the entrance to its final state.

## Conversion notes

The primary call to action everywhere is **Start a project**, pointing at a
`mailto` with a prefilled subject. The résumé is deliberately one quiet text
link in the contact block: it used to be a primary button in the header, the
hero and the contact block, which read as looking for a job rather than for
client work. The full-time route is still there, just not leading.

`WorkRow` and `FeaturedProject` take a `headingLevel` prop (`3` under a section
heading, `2` on `/work` where they sit directly beneath the page `h1`) so the
document never skips a heading level.

## Deployment

Zero-config on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production domain so
canonical URLs, the sitemap and the structured data point at the right host.
