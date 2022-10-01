import type { NextPage } from 'next';
import Link from 'next/link';

import { PostList } from '@/components/post-list';

const Home: NextPage = () => {
  return (
    <main className="h-full min-h-screen w-full bg-slate-800">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex max-w-md flex-col px-5 pb-20">
          <Link href="create-post">
            <a className="my-5 ml-auto rounded-md bg-indigo-600 py-1 px-3 text-xs font-medium leading-6 text-white transition-colors hover:bg-indigo-700">
              Novo post
            </a>
          </Link>
          <PostList />
        </div>
      </div>
    </main>
  );
};

export default Home;
