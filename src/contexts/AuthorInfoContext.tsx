import { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";

interface ProviderPropsTypes {
  children: React.ReactNode;
}

export interface UserDataTypes {
  avatarUrl: string;
  name: string;
  bio: string;
  nickname: string;
  company: string;
  login: string;
  numberOfFollowers: number;
}

export const AuthorInfoContext = createContext({} as UserDataTypes);

export const AuthorInfoContextProvider = ({ children }: ProviderPropsTypes) => {
  const [userData, setUserData] = useState<UserDataTypes>({
    avatarUrl: "",
    name: "",
    bio: "",
    nickname: "",
    company: "",
    numberOfFollowers: 0,
    login: "",
  });

  useEffect(() => {
    const getApiData = async () => {
      const apiResponse = await axios.get(
        "https://api.github.com/users/wellington-damasio",
        {
          headers: {
            authorization: "token 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",
          },
        }
      );

      const {
        name,
        login,
        company,
        avatar_url,
        followers: numberOfFollowers,
        bio,
      } = apiResponse.data;

      setUserData({
        name,
        avatarUrl: avatar_url,
        company,
        numberOfFollowers,
        nickname: login,
        bio,
        login,
      });
    };

    getApiData();
  }, []);

  return (
    <AuthorInfoContext.Provider
      value={{
        name: userData.name,
        avatarUrl: userData.avatarUrl,
        company: userData.company,
        numberOfFollowers: userData.numberOfFollowers,
        nickname: userData.nickname,
        bio: userData.bio,
        login: userData.login,
      }}
    >
      {children}
    </AuthorInfoContext.Provider>
  );
};
