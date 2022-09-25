import { trpc } from '@/utils/trpc';

export const PostList = () => {
  const { isLoading, data } = trpc.post.all.useQuery();

  if (isLoading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <ul>
      {data?.map(({ id, title, content, createdAt }) => (
        <li key={id}>
          <div className="flex flex-col rounded-md cursor-pointer mt-10 bg-slate-100 hover:bg-slate-200 transition-colors">
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
