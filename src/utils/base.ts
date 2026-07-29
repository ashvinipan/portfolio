/**
 * Astro's configured base path, normalized to always end in a single slash.
 * `import.meta.env.BASE_URL` does not guarantee a trailing slash, so every
 * internal link/asset path must go through this instead of using it raw.
 */
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
