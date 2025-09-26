// File: src/app/sitemap.js
const BASE_URL = 'https://test-deploy-vercel-five-blush.vercel.app/'; // Thay bằng domain thật khi triển khai

export default async function sitemap() {
  // 1. Lấy tất cả các bài viết từ API
  const res = await fetch(`${BASE_URL}/api/posts`);
  const posts = await res.json();
  
  // 2. Tạo URL động cho mỗi bài viết
  const postUrls = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.lastModified), // Lấy ngày cập nhật từ API
  }));

  // 3. Kết hợp các trang tĩnh (Trang chủ, Giới thiệu) với các trang động
  return [
    {
      url: BASE_URL,
      lastModified: new Date(), // Trong dự án thực tế, nên lấy ngày cập nhật từ database hoặc hệ thống quản lý nội dung (CMS)
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(), // Tương tự, nên lấy từ nguồn dữ liệu thực tế
    },
    ...postUrls,
  ];
}
