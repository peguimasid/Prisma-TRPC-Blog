import { trpc } from '@/utils/trpc';
import { Card, Paragraph } from 'dracula-ui';

export const PostList = () => {
  const { isLoading, data } = trpc.post.all.useQuery();

  if (isLoading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <ul>
      {data?.map(({ id, title, content, createdAt }) => (
        <Card key={id} variant="subtle" color="pink" p="md" m="md">
          <Paragraph color="blackLight">{title}</Paragraph>
          <Paragraph color="blackSecondary">{content}</Paragraph>
        </Card>
      ))}
    </ul>
  );
};
