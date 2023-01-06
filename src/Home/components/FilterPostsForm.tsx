import { useContext, useState } from "react";
import { AuthorPostsContext } from "../../contexts/AuthorPostsContext";

export const FilterPostsForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const { filteredPosts, filterPostsFunc } = useContext(AuthorPostsContext);
  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    filterPostsFunc(e.target.value);
  };

  return (
    <div className="mx-auto mb-12 w-11/12 max-w-[54rem]">
      <div className="align-end mb-2 flex justify-between">
        <span className="ml-1 font-bold text-gray-300">Publicações</span>
        <small className="font-regular text-darkGray-300">
          {filteredPosts.length} publicações
        </small>
      </div>
      <input
        className="h-12 w-full rounded-md bg-darkGray-800 pl-4 drop-shadow-[0_0_1px_#3a536b] placeholder:text-darkGray-300 focus:outline-none focus:drop-shadow-[0_0_2px_#7b96b2]"
        type="text"
        placeholder="Buscar conteúdo"
        value={searchValue}
        onChange={(e) => handleSearchValueChange(e)}
      />
    </div>
  );
};
