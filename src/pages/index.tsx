import type { NextPage } from 'next';
import { trpc } from '../services/trpc';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const hello = trpc.hello.list.useQuery();
  console.log(hello);

  if (hello.isLoading) {
    return <h1>Fetching...</h1>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul>
          {hello?.data?.map(({ id, content }) => (
            <li key={id}>{content}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
