import { Prisma } from '@prisma/client';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Button, Card, Paragraph } from 'dracula-ui';
import { FunctionComponent } from 'react';

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
    <Card color="purple" p="md" m="md" className="shadow-none">
      <Paragraph weight="bold" size="lg" color="blackLight">
        {title}
      </Paragraph>
      <Paragraph size="sm" color="blackSecondary" mt="sm">
        {content}
      </Paragraph>
      <div className="flex w-full justify-between items-end">
        <Paragraph size="xs" color="white" mt="sm">
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
