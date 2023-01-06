import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

interface PostTypes {
  id: number;
  title: string;
  numberOfComments: number;
  updated_at: Date;
  body: string;
  number: number;
}

interface AuthorPostsContextTypes {
  posts: PostTypes[];
  filteredPosts: PostTypes[];
  filterPostsFunc: (filterString: string) => void;
}

interface PostsContextProviderProps {
  children: React.ReactNode;
}

export const AuthorPostsContext = createContext({} as AuthorPostsContextTypes);

export const AuthorPostsContextProvider = ({
  children,
}: PostsContextProviderProps) => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostTypes[]>([]);

  useEffect(() => {
    const getApiData = async () => {
      const apiResponse = await axios.get(
        "https://api.github.com/repos/wellington-damasio/github-blog_issues/issues",
        {
          headers: {
            authorization: "token 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",
          },
        }
      );

      setPosts(apiResponse.data);
      setFilteredPosts(apiResponse.data);
    };

    getApiData();
  }, []);

  const filterPostsFunc = (filterString: string) => {
    const lowerCaseFilterString = filterString.trim().toLowerCase();

    if (lowerCaseFilterString === "") {
      setFilteredPosts(posts);
    }

    const newFilteredPosts = posts.filter((post) => {
      const lowerCaseTitle = post.title.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseFilterString);
    });

    setFilteredPosts(newFilteredPosts);
  };

  return (
    <AuthorPostsContext.Provider
      value={{ posts, filterPostsFunc, filteredPosts }}
    >
      {children}
    </AuthorPostsContext.Provider>
  );
};
