import { trpc } from '@/utils/trpc';
import { Button, Card, List, Paragraph } from 'dracula-ui';

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
    <List className="w-full max-w-xl">
      {data?.map(({ id, title, content, createdAt }) => (
        <Card key={id} color="purple" p="md" m="md" className="shadow-none">
          <Paragraph weight="bold" size="lg" color="blackLight">
            {title}
          </Paragraph>
          <Paragraph size="xs" color="blackSecondary" mt="sm">
            {content}
          </Paragraph>
          <div className="flex w-full justify-end">
            <Button variant="ghost" color="animated" mt="md" ml="auto">
              Ver mais
            </Button>
          </div>
        </Card>
      ))}
    </List>
  );
};
