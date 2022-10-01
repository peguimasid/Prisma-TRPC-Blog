import Link from 'next/link';

import { PostList } from '@/components/post-list';
import { Button } from 'dracula-ui';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-dracula-darker">
      <main className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col max-w-xl">
          <div className="w-full flex justify-end mt-10 px-8">
            <Link href="create-post">
              <Button as="a">Novo post</Button>
            </Link>
          </div>
          <PostList />
        </div>
      </main>
    </div>
  );
};

export default Home;
