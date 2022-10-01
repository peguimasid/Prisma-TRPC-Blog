import Link from 'next/link';

import { PostList } from '@/components/post-list';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="h-full min-h-screen w-full">
      <main className="flex w-full flex-col items-center justify-center">
        <div className="flex max-w-xl flex-col">
          <div className="mt-10 flex w-full justify-end px-8">
            <Link href="create-post">
              <a>Novo post</a>
            </Link>
          </div>
          <PostList />
        </div>
      </main>
    </div>
  );
};

export default Home;
