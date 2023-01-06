import { formatDistanceToNow, parseISO } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { Link } from "react-router-dom";
import { MarkdownRender } from "../../components/MarkdownRender";

interface PostCardProps {
  title: string;
  body: string;
  lastUpdate: Date;
  number: number;
}

export const PostCard = ({
  title,
  body,
  lastUpdate,
  number,
}: PostCardProps) => {
  return (
    <div className="post-card rounded-lg bg-darkGray-600 p-8">
      <div className="mb-5 flex justify-between gap-2">
        <Link to={`/post/${number}`}>
          <h2 className="w-full text-md font-bold">{title}</h2>
        </Link>
        <small className="min-w-max">
          {formatDistanceToNow(parseISO(lastUpdate.toString()), {
            locale: ptBR,
            addSuffix: true,
          })}
        </small>
      </div>
      <div className="block max-h-[15.3rem] overflow-hidden">
        <MarkdownRender markdown={body} />
      </div>
    </div>
  );
};
