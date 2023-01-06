interface PostsContainerProps {
  children: React.ReactNode;
}

export const PostsContainer = ({ children }: PostsContainerProps) => {
  return (
    <div className="mx-auto grid w-11/12 max-w-[54rem] grid-cols-1 gap-8 md:grid-cols-2">
      {children}
    </div>
  );
};
