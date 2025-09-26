// File: src/app/posts/[slug]/page.jsx
import Image from "next/image";
/*
 * Next.js có tính năng tự động deduplicate các yêu cầu `fetch`.
 * Điều này có nghĩa là nếu bạn gọi `fetch` với cùng một URL và các tùy chọn trong cùng một lần render (ví dụ: trong `generateMetadata` và trong component `PostPage`),
 * Next.js sẽ chỉ thực hiện MỘT request thực tế.
 * Đây là một tối ưu hóa tích hợp sẵn giúp tránh việc gọi API dư thừa.
 *
 * Để biết thêm chi tiết, bạn có thể tham khảo tài liệu chính thức của Next.js tại đây:
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#deduplicate-requests-and-cache-data
 */
export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://test-deploy-vercel-five-blush.vercel.app//api/posts/${params.slug}`
  );
  const post = await res.json();

  if (!post) {
    return { title: "Không tìm thấy bài viết" };
  }
  return {
    title: post.title,
    description: `Đọc bài viết chi tiết về ${post.title}`,
  };
}

export default async function PostPage({ params }) {
  const res = await fetch(
    `https://test-deploy-vercel-five-blush.vercel.app//api/posts/${params.slug}`
  );
  const post = await res.json();

  if (!post) {
    return (
      <div>
        <h1>Không tìm thấy bài viết</h1>
        <p>Bài viết bạn đang tìm kiếm không tồn tại.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <Image
        src="/next.svg"
        alt="Sample image from Picsum"
        width={250}
        height={100}
      />
      <p>{post.description}</p>
      <p>Nội dung bài viết cho slug: {params.slug}</p>
    </div>
  );
}
