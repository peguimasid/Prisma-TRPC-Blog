import { FunctionComponent } from 'react';
import { trpc } from '@/utils/trpc';

import { PostCard } from './post-card';

export const PostList: FunctionComponent = () => {
  const { isLoading, data } = trpc.post.all.useQuery();

  if (isLoading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <ul className="w-full space-y-8">
      {data?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ul>
  );
};
