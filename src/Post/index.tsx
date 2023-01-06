import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { MarkdownRender } from "../components/MarkdownRender";
import { PostInfoCard } from "./PostInfoCard";

export const postLoader = async ({ params }: any) => {
  const apiResponse = await axios.get(
    `https://api.github.com/repos/wellington-damasio/github-blog_issues/issues/${params.id}`,
    {
      headers: {
        authorization: "token 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",
      },
    }
  );
  return await apiResponse.data;
};

export const Post = () => {
  const postData: any = useLoaderData();
  return (
    <>
      <PostInfoCard
        title={postData.title}
        lastUpdate={postData.updated_at}
        nickname={postData.user.login}
        numberOfComments={postData.comments}
        number={postData.number}
      />
      <div className="mx-auto w-11/12 max-w-[54rem]">
        <MarkdownRender markdown={postData.body} />
      </div>
    </>
  );
};
