"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const [post, setPosts] = useState<{
    id: number;
    title: string;
    content: string;
  } | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/posts/${id}`)
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <h1>글 상세페이지</h1>
      {post == null && <div>로딩중...</div>}

      {post !== null && (
        <>
          <div>번호 : {post?.id}</div>
          <div>제목 : {post?.title}</div>
          <div style={{ whiteSpace: "pre-line" }}>{post?.content}</div>
        </>
      )}
    </>
  );
}
