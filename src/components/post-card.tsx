import { FunctionComponent } from 'react';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Button, Card, Paragraph } from 'dracula-ui';

type ICard = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  published: boolean;
};

export const PostCard: FunctionComponent<ICard> = ({
  title,
  content,
  createdAt,
}) => {
  return (
    <Card color="purpleCyan" p="md" m="md" className="shadow-none">
      <Paragraph weight="bold" size="lg" color="blackLight">
        {title}
      </Paragraph>
      <Paragraph size="sm" color="blackSecondary" mt="sm">
        {content}
      </Paragraph>
      <div className="flex w-full justify-between items-end">
        <Paragraph size="xs" color="blackSecondary" mt="sm">
          {formatDistanceToNow(new Date(createdAt), {
            locale: ptBR,
            addSuffix: true,
          })}
        </Paragraph>
        <Button variant="outline" color="black" mt="md" ml="auto">
          Ver mais
        </Button>
      </div>
    </Card>
  );
};
