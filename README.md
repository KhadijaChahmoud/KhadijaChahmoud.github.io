<<<<<<< HEAD
# Khadija Chahmoud · @eco

**Real stories. Genuine connection. Meaningful content.**

Khadija Chahmoud is a creative professional focused on content creation, social media management, and human-first brand storytelling. Her perspective connects Dubai, UAE and Casablanca, Morocco.

- Instagram: [@khadija.chahmoud](https://www.instagram.com/khadija.chahmoud/)
- GitHub: [KhadijaChahmoud](https://github.com/KhadijaChahmoud)
- Website: [khadijachahmoud.github.io](https://khadijachahmoud.github.io/)

This site uses the @eco ecosystem architecture and retains the original MIT license and attribution. See [LICENSE](./LICENSE).

## Pages

| Page | URL |
|---|---|
| Home | <https://khadijachahmoud.github.io/> |
| About | <https://khadijachahmoud.github.io/about.html> |
| Work timeline | <https://khadijachahmoud.github.io/timeline.html> |
| Protected users | <https://khadijachahmoud.github.io/protectedUSERS_root_path_secure/> |

## Architecture

The site keeps the same React/Vite multi-page architecture and @eco features: responsive sidebars, theme preferences, star-field background, music library, timeline and language showcase, plus a protected-users page backed by a Prisma API.

GitHub Pages serves the frontend only. The Node API handles GitHub OAuth and stores profile/session data through Prisma. MongoDB is the default provider; PostgreSQL remains supported. The first successful GitHub sign-in creates a user in `protected_users`; hashed sessions are stored in `protected_user_sessions`.

## Local development

1. Install frontend dependencies with `npm ci`.
2. Copy `api/.env.example` to `api/.env`. Set `DATABASE_URL` to your MongoDB connection string and configure the GitHub OAuth client ID, secret, callback, frontend URL, and allowed origin. The local callback is `http://localhost:8787/auth/github/callback`.
3. Install API dependencies with `npm --prefix api ci`, then create the MongoDB collections and indexes with `npm --prefix api run db:push:mongodb`.
4. Start the API with `npm --prefix api run dev`.
5. Copy `.env.example` to `.env.local`, set `VITE_API_BASE_URL=http://localhost:8787`, and start the frontend with `npm run dev`.

Configure the GitHub OAuth App callback URL to exactly match `GITHUB_CALLBACK_URL`. For production, set `VITE_API_BASE_URL` as a GitHub Actions variable and keep database credentials and the OAuth secret only on the API host.

See [api/README.md](./api/README.md) for deployment steps, PostgreSQL migration instructions, and how to inspect user records in MongoDB Atlas.

## Language starters

<!-- language-metrics:start -->
| Language | Equal starter share | Measured source share | Files | File types | Starter |
|----------|---------------------|-----------------------|-------|------------|---------|
| 🦀 Rust | 12.5% | 2.2% | 1 | `.rs` | [Open](./starters/rust/README.md) |
| 🐹 Go | 12.5% | 1.9% | 2 | `.go` | [Open](./starters/go/README.md) |
| 🐍 Python | 12.5% | 4.5% | 4 | `.py` | [Open](./starters/python/README.md) |
| 🔷 TypeScript | 12.5% | 64.7% | 20 | `.ts, .tsx` | [Open](./starters/typescript/README.md) |
| ⚡ JavaScript | 12.5% | 1.9% | 4 | `.js, .mjs, .cjs` | [Open](./starters/javascript/README.md) |
| 🗃️ SQL | 12.5% | 1.6% | 5 | `.sql` | [Open](./starters/sql/README.md) |
| 🎨 CSS | 12.5% | 21.7% | 3 | `.css` | [Open](./starters/css/README.md) |
| 🌐 HTML | 12.5% | 1.5% | 2 | `.html, .htm` | [Open](./starters/html/README.md) |
<!-- language-metrics:end -->

## Build and tests

```sh
npm run build
npm --prefix api run build
npm --prefix api test
```

Language metrics are regenerated before frontend development and production builds. The project is MIT-licensed; see [LICENSE](./LICENSE) for notices and terms.
=======
# 🌸 Khadija Chahmoud

### ✨ Entrepreneur · Content Creator · Digital Storyteller

<p align="center">
  <img src="https://img.shields.io/badge/CREATIVITY-FFB6C1?style=for-the-badge&logo=canva&logoColor=white" />
  <img src="https://img.shields.io/badge/STORYTELLING-E8B4B8?style=for-the-badge&logo=instagram&logoColor=white" />
  <img src="https://img.shields.io/badge/DIGITAL%20STRATEGY-C9A7EB?style=for-the-badge&logo=googleanalytics&logoColor=white" />
  <img src="https://img.shields.io/badge/MOROCCO%20%F0%9F%87%B2%F0%9F%87%A6-DUBAI%20%F0%9F%87%A6%F0%9F%87%AA-F5C6AA?style=for-the-badge" />
</p>

<p align="center">
  <em>Creative thinking. Authentic stories. Meaningful digital experiences.</em>
</p>

---

## 💖 About

Welcome to the professional portfolio of **Khadija Chahmoud** — an entrepreneur and content creator with an interest in digital communication, creative storytelling, and building meaningful brand experiences.

As the founder of **Brandy Socials**, Khadija brings together creativity and digital strategy to help shape how brands communicate and connect with their audiences.

Her professional journey connects the energy of **Dubai 🇦🇪** with her roots in **Morocco 🇲🇦**.

## 🎨 Professional Identity

| ✨ Area | 🌷 Focus |
|---|---|
| 🎥 Content Creation | Visual communication and creative content |
| 📱 Social Media | Digital presence and audience engagement |
| 🧠 Brand Strategy | Brand positioning and communication |
| ✍️ Storytelling | Human-centered narratives |
| 💡 Entrepreneurship | Creative ideas and business development |
| 🎬 Campaigns & Events | Digital communication and event coverage |

*These are professional areas represented in her public profile and work history, not a promise that every service is currently available.*

## 🚀 Professional Journey

- 🌸 Entrepreneur and content creator.
- 💼 Founder of **Brandy Socials**, as listed on her public professional profile.
- 🌍 Experience contributing to digital communication and major event-related projects in the UAE.
- 🎯 Interested in the relationship between creative content, brand identity, and audience connection.
- 🇲🇦 Connected to Morocco and the international creative environment.

## 💎 Creative Philosophy

> Great content is more than something people scroll past. It gives a brand a voice, creates a connection, and makes a story worth remembering.

A creative approach centered on:

- 🤍 Authentic communication
- 🎨 Visual identity and consistency
- 📖 Human storytelling
- 🌍 Cultural connection
- ✨ Creativity with purpose

## 🛠️ Areas of Expertise

<p>
  <img src="https://img.shields.io/badge/Content%20Creation-FFB6C1?style=flat-square" />
  <img src="https://img.shields.io/badge/Social%20Media-E8B4B8?style=flat-square" />
  <img src="https://img.shields.io/badge/Digital%20Marketing-C9A7EB?style=flat-square" />
  <img src="https://img.shields.io/badge/Brand%20Communication-F5C6AA?style=flat-square" />
  <img src="https://img.shields.io/badge/Creative%20Strategy-D8C4E8?style=flat-square" />
  <img src="https://img.shields.io/badge/Storytelling-F3AFC1?style=flat-square" />
</p>

## 🌍 Dubai × Morocco

Two places, different perspectives, and opportunities to connect people, ideas, and brands.

🇦🇪 Dubai · 🇲🇦 Casablanca · 🌍 International perspective

## 📸 Discover & Connect

<p align="center">
  <a href="https://www.instagram.com/khadija.chahmoud/">
    <img src="https://img.shields.io/badge/Instagram-Follow%20the%20Journey-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/khadija-chahmoud">
    <img src="https://img.shields.io/badge/LinkedIn-Professional%20Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>

---

<p align="center">
  🌸 <strong>Creativity with purpose. Stories with meaning.</strong> 🌸
  <br/>
  <sub>Personal professional portfolio · Khadija Chahmoud</sub>
</p>
>>>>>>> a91ac6846f6f8e8e4884e05ddd8054244e71c161
