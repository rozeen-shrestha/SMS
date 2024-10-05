// next.config.mjs
export default {
    reactStrictMode: true, // Enables React's Strict Mode
    env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
  };
