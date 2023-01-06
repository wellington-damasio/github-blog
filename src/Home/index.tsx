import { useContext } from "react";
import { AuthorPostsContext } from "../contexts/AuthorPostsContext";
import { AuthorCard } from "./components/AuthorCard";
import { FilterPostsForm } from "./components/FilterPostsForm";
import { PostCard } from "./components/PostCard";
import { PostsContainer } from "./components/PostsContainer";

export const Home = () => {
  const { filteredPosts } = useContext(AuthorPostsContext);
  return (
    <div>
      <AuthorCard />
      <FilterPostsForm />
      <PostsContainer>
        {filteredPosts.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              lastUpdate={post.updated_at}
              number={post.number}
            />
          );
        })}
      </PostsContainer>
    </div>
  );
};
