# Security policy

## Scope

This repository builds a static GitHub Pages site and a separately hosted API.
The API handles GitHub OAuth sign-in, stores profile records and hashed session
tokens through Prisma, and provides the aggregate profile-link click counter.
It does not store GitHub access tokens. MongoDB is the default database
provider; PostgreSQL is also supported.

The music player stores visitor-added files in the browser's IndexedDB and saved
audio URLs and playback position in that browser's local storage. This data is not uploaded by this site, is not encrypted by the site, and is not
synchronized between devices. A saved audio URL is not loaded until the visitor
chooses to play it, at which point the browser contacts that audio host.

GitHub sign-in requests basic profile access. The API stores the GitHub account
ID, username, available name/email, avatar URL, and profile URL. Session cookies
are HTTP-only; only SHA-256 hashes of session tokens are stored in the database.
Keep database credentials and the GitHub OAuth client secret in the API host's
environment, never in the frontend or source control.

## Reporting a vulnerability

Please do not publish details of an unpatched security issue in a public issue.
Use GitHub's private vulnerability reporting for this repository if it is
available. Otherwise, contact the maintainer through the GitHub profile:
<https://github.com/KhadijaChahmoud>.

Include the affected URL or file, the impact, and steps to reproduce. Avoid
including real credentials, private audio links, or other personal data.

## Safe use

- Do not put passwords, access tokens, or sensitive signed URLs in a playlist.
- Clear this site's browser storage to remove locally saved music and settings.
- Only add or publish audio that you own or are authorized to use.
