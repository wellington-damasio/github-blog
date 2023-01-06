import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parseISO from "date-fns/esm/fp/parseISO/index.js";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { Link } from "react-router-dom";

interface PostInfoCardProps {
  title: string;
  nickname: string;
  lastUpdate: Date;
  numberOfComments: number;
  number: number;
}

export const PostInfoCard = ({
  title,
  nickname,
  lastUpdate,
  numberOfComments,
  number,
}: PostInfoCardProps) => {
  return (
    <div className="relative z-10 mx-auto mb-16 -mt-[3rem] flex w-11/12 max-w-[54rem] flex-col gap-2 rounded-lg bg-darkGray-600 px-3 py-6 md:flex-row md:gap-6 md:p-6">
      <div className="w-full flex-col md:flex">
        <div className="mb-4 flex items-center justify-between md:flex-row">
          <Link
            to="/"
            className="flex items-center gap-2 self-end text-xs text-blue-500 md:self-start"
          >
            <i className="fa-solid fa-less-than"></i>
            VOLTAR
          </Link>
          <span className="flex items-center gap-2 self-end text-xs text-blue-500 md:self-start">
            <span>
              <a
                href={`https://github.com/wellington-damasio/github-blog_issues/issues/${number}`}
                target="_blank"
              >
                VER NO GITHUB
              </a>
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
        </div>
        <h2 className="mb-8 text-center text-xl font-bold md:mb-2 md:text-left">
          {title}
        </h2>

        <div className="flex justify-center gap-4 md:mt-auto md:justify-start md:gap-10">
          <span className="flex w-4/12 flex-col items-center gap-2 text-center text-sm md:w-auto md:flex-row md:gap-3">
            <i className="fa-brands fa-github text-lg text-darkGray-300"></i>
            <span>{nickname}</span>
          </span>
          <span className="flex w-4/12 flex-col items-center gap-2 text-center text-sm md:w-auto md:flex-row md:gap-3">
            <i className="fa-sharp fa-solid fa-calendar-day text-lg text-darkGray-300"></i>
            {formatDistanceToNow(parseISO(lastUpdate.toString()), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
          <span className="flex w-4/12 flex-col items-center gap-2 text-center text-sm md:w-auto md:flex-row md:gap-3">
            <i className="fa-solid fa-comment text-lg text-darkGray-300"></i>
            {`${numberOfComments} ${
              numberOfComments > 1 ? "comentários" : "comentário"
            }`}
          </span>
        </div>
      </div>
    </div>
  );
};
