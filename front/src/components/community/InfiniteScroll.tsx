// InfiniteScroll.tsx
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { getPostList, postType } from "./postList";

const InfiniteScroll = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<postType[]>(getPostList(1));

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setPosts(posts.concat(getPostList(page + 1)));
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [page, posts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <Container>
      {posts.map((post: postType, idx: number) => (
        <PostItem key={idx}>{post.contents}</PostItem>
      ))}
    </Container>
  );
};

export default InfiniteScroll;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
`;

const PostItem = styled.div`
  width: 100%;
  height: 350px;
  border: 2px solid black;
`;
