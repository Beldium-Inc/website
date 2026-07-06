# LinkedIn Auto-Posting System

Build a daily content engine that publishes 3 LinkedIn posts to the founder's personal profile, generated from Beldium's website content and positioning guide.

## What you get

- **LinkedIn connection**: Founder connects their personal LinkedIn account once via OAuth (Lovable's LinkedIn connector).
- **Daily generator**: Every morning, an automated job uses AI to draft 3 posts in distinct angles (institutional thesis, founder POV, educational explainer) sourced strictly from existing pages on beldium.com.
- **Auto-publish**: All 3 posts publish at staggered times to LinkedIn that same day, no manual approval.
- **Admin dashboard** at `/admin`: password-protected page showing today's posts, history, status (drafted/published/failed), LinkedIn engagement metrics where available, plus a "Generate now" button and per-post "Retry" / "Skip" controls.

## How the content stays on-brand

The generator is fed:
- The full **LinkedIn/PR positioning guide** from prior work (infrastructure not marketplace, institutional tone, no startup jargon, commas over dashes, Beldium capitalization).
- A rotating selection of website pages (Governance, Data Architecture, Partnerships, Compliance, Resources articles, etc.) as source material.
- Three fixed daily "post archetypes" so each post hits a different audience: institutional thesis (regulators/investors), operational insight (miners/off-takers), founder reflection (network/peers).

Each post is generated with the website page it draws from cited internally, so we can verify it didn't hallucinate claims.

## Components

### 1. Backend (Lovable Cloud)
- Enable Lovable Cloud for backend functions and database.
- **Table `linkedin_posts`**: id, scheduled_for, archetype, source_page_url, content, status (drafted/published/failed/skipped), linkedin_post_id, error_message, created_at, published_at.
- **Table `linkedin_settings`**: founder_linkedin_urn, post_times (array of 3 HH:MM), enabled (bool), last_run_at.
- **Edge function `generate-daily-posts`**: pulls positioning guide + selected page content, calls Lovable AI Gateway (Gemini) to draft 3 posts, saves as `drafted`. Idempotent per day.
- **Edge function `publish-post`**: takes a post id, calls LinkedIn UGC Posts API through the connector gateway, updates status + linkedin_post_id.
- **Edge function `daily-runner`**: orchestrator triggered by cron — calls generator at 6am, then publishes each post at its scheduled time.
- **Cron**: Supabase `pg_cron` schedules `daily-runner` at 6:00 UTC daily, plus a 15-minute tick to publish anything due.

### 2. LinkedIn connection
- Use Lovable's **LinkedIn connector** (`standard_connectors--connect`) for the founder's personal account. This handles OAuth + token refresh automatically and exposes the access token via the connector gateway.
- One-time setup: founder signs in to LinkedIn through the connector flow; we fetch their `member URN` via `/v2/userinfo` and store it in `linkedin_settings`. Required scope: `w_member_social` (post on behalf of member).

### 3. Admin dashboard `/admin`
- Single shared password (stored as runtime secret `ADMIN_PASSWORD`, verified server-side in an edge function — never compared in the browser).
- Sections:
  - **Today's queue**: 3 cards showing each post, scheduled time, status, content preview, LinkedIn link if published.
  - **History**: last 30 days of posts with status filter.
  - **Settings**: toggle auto-publish on/off, edit the 3 daily post times, view LinkedIn connection status, "Generate today's posts now" button.
- Not linked from the public nav, not indexed (added to `robots.txt`).

### 4. SEO/site impact
- Zero changes to public-facing pages, content, or sitemap. This is purely additive infrastructure.

## Honest caveats

- **Reach risk**: Fully auto-published content with no human review can damage a personal brand if the AI drifts off-tone. The positioning guide constrains it heavily, but a bad day is possible. The dashboard lets you intervene; if you ever want a "draft + approve" mode later, it's a small flip.
- **LinkedIn API limits**: LinkedIn caps personal posting at ~25 posts/day per member — 3/day is well under, fine indefinitely.
- **Source rotation**: With ~18 pages, content will start repeating themes after 2-3 weeks. We'll need to keep adding articles/resources to keep the well full.
- **No engagement metrics on free LinkedIn API**: We can confirm publish success and get the post URL, but post-level analytics (impressions/likes) require LinkedIn Marketing API access, which is a separate approval. Dashboard will show "view on LinkedIn" links instead.

## Implementation order

1. Enable Lovable Cloud, create tables, connect LinkedIn connector, capture founder URN.
2. Build `generate-daily-posts` edge function (test by running manually).
3. Build `publish-post` function (test with one drafted post end-to-end).
4. Build `/admin` dashboard with password gate + manual controls.
5. Wire up cron schedule, enable auto-publish.

Want me to proceed?
