// File: src/app/api/posts/route.js
import { NextResponse } from 'next/server';

const posts = [
  { slug: 'bai-viet-1', title: 'Bài viết đầu tiên', description: 'Đây là nội dung của bài viết đầu tiên.', lastModified: '2023-01-01T10:00:00Z' },
  { slug: 'bai-viet-2', title: 'Bài viết thứ hai', description: 'Đây là nội dung của bài viết thứ hai.', lastModified: '2023-02-15T11:30:00Z' },
  { slug: 'bai-viet-3', title: 'Bài viết thứ ba', description: 'Đây là nội dung của bài viết thứ ba.', lastModified: '2023-03-20T14:00:00Z' },
];

// File: src/app/api/posts/route.js
export async function GET() {
  return NextResponse.json(posts);
}
