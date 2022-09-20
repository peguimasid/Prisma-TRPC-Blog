import type { NextPage } from 'next';
import { trpc } from '../services/trpc';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const hello = trpc.hello.useQuery({ text: 'Guilhermo' });

  if (hello.isLoading) {
    return <h1>Fetching...</h1>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{hello.data?.greeting}</h1>
      </main>
    </div>
  );
};

export default Home;
