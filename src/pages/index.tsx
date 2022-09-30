import { PostList } from '@/components/post-list';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-dracula-darker">
      <main className="w-full h-full flex justify-center">
        <PostList />
      </main>
    </div>
  );
};

export default Home;
