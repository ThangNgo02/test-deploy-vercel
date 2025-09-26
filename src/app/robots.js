// File: src/app/robots.js
const BASE_URL = 'https://test-deploy-vercel-five-blush.vercel.app/'; // Thay bằng domain thật khi triển khai và nên lưu vào file .env

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
