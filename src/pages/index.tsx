import { PostList } from '@/components/post-list';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <main className="w-full h-full flex flex-row justify-center">
        <PostList />
      </main>
    </div>
  );
};

export default Home;
