// File: src/app/api/posts/[slug]/route.js
import { NextResponse } from 'next/server';

const posts = [
  { slug: 'bai-viet-1', title: 'Bài viết đầu tiên', description: 'Đây là nội dung của bài viết đầu tiên.' },
  { slug: 'bai-viet-2', title: 'Bài viết thứ hai', description: 'Đây là nội dung của bài viết thứ hai.' },
  { slug: 'bai-viet-3', title: 'Bài viết thứ ba', description: 'Đây là nội dung của bài viết thứ ba.' },
];

export async function GET(request, { params }) {
  const { slug } = params;
  const post = posts.find(p => p.slug === slug);

  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }
}
