"use client";

import type { PostDto } from "@/type/post";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  // const posts = [
  //   { id: 1, title: "명언 1" },
  //   { id: 2, title: "명언 2" },
  //   { id: 3, title: "명언 3" },
  //   { id: 4, title: "명언 4" },
  //   { id: 5, title: "명언 5" },
  //   { id: 6, title: "명언 6" },
  //   { id: 7, title: "명언 7" },
  //   { id: 8, title: "명언 8" },
  //   { id: 9, title: "명언 9" },
  //   { id: 10, title: "명언 10" },
  // ];
  const [posts, setPosts] = useState<PostDto[]>([]);

  useEffect(() => {
    // setPosts([
    //   { id: 1, title: "명언 1" },
    //   { id: 2, title: "명언 2" },
    //   { id: 3, title: "명언 3" },
    // ]);
    fetch("http://localhost:8080/api/v1/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <h1>글 목록</h1>

      {posts.length == 0 && <div>로딩중...</div>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
