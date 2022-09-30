import { FunctionComponent } from 'react';
import { trpc } from '@/utils/trpc';

import { List } from 'dracula-ui';
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
    <List className="w-full max-w-xl">
      {data?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </List>
  );
};
