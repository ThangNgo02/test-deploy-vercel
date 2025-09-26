// File: src/app/robots.js
const BASE_URL = 'http://localhost:3000'; // Thay bằng domain thật khi triển khai và nên lưu vào file .env

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
