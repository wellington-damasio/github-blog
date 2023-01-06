import { useContext } from "react";
import { AuthorInfoContext } from "../../contexts/AuthorInfoContext";

export const AuthorCard = () => {
  const { name, avatarUrl, bio, company, login, nickname, numberOfFollowers } =
    useContext(AuthorInfoContext);

  return (
    <div className="container relative z-10 mx-auto mb-16 -mt-[3rem] flex w-11/12 max-w-[54rem] flex-col gap-2 rounded-lg bg-darkGray-600 px-3 py-6 md:flex-row md:gap-6 md:p-6">
      <a
        href={`https://github.com/${login}`}
        target="_blank"
        className="border-blue mx-auto inline-block aspect-square w-full max-w-[10rem] overflow-hidden rounded"
      >
        <img src={avatarUrl} alt="" />
      </a>
      <div className="flex-col md:flex">
        <div className="mb-2 flex flex-col items-center md:flex-row md:justify-between">
          <h2 className="text-center text-lg font-bold md:text-xl">
            {name || ""}
          </h2>
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            className="flex items-center gap-2 self-end text-xs text-blue-500 md:self-start"
          >
            <span>GITHUB</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <p className="mb-4 text-center md:text-left">{bio || ""}</p>

        <div className="flex justify-center gap-4 md:mt-auto md:justify-start md:gap-8">
          <span className="flex w-4/12 flex-col items-center gap-2 text-center text-sm md:w-auto md:flex-row md:gap-3">
            <i className="fa-brands fa-github text-lg text-darkGray-300"></i>
            <span>{nickname || "unknown"}</span>
          </span>
          <span className="flex w-4/12 flex-col items-center gap-2 text-center text-sm md:w-auto md:flex-row md:gap-3">
            <i className="fa-solid fa-building text-lg text-darkGray-300"></i>
            {company || "unknown"}
          </span>
          <span className="flex w-4/12 flex-col items-center gap-2 text-center text-sm md:w-auto md:flex-row md:gap-3">
            <i className="fa-solid fa-user-group text-lg text-darkGray-300"></i>
            {numberOfFollowers || "0"}
          </span>
        </div>
      </div>
    </div>
  );
};
