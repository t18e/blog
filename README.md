# Personal Blog

A minimalist blog built with Next.js that supports:
- Markdown content
- Dark/light mode
- Year-based post organization
- View counts
- Easy deployment to Netlify

## Project Structure

\```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── blog/
│       └── [...slug]/
│           └── page.tsx
├── components/
│   ├── header.tsx
│   ├── theme-toggle.tsx
│   ├── post-list.tsx
│   └── mdx-components.tsx
├── content/
│   └── posts/
│       └── 2024/
│           └── hello-world.mdx
├── lib/
│   ├── posts.ts
│   └── utils.ts
└── public/
    └── images/
\```

