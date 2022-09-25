import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { isLoading, data: posts } = trpc.hello.list.useQuery();

  if (isLoading) {
    return <h1>Fetching...</h1>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
