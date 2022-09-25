import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { isLoading, data: posts } = trpc.post.all.useQuery();

  if (isLoading) {
    return <h1>Fetching...</h1>;
  }

  return (
    <div>
      <main>
        <ul className="bg-red-400">
          {posts?.map(({ id, content }) => (
            <li key={id}>{content}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
