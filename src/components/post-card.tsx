import { FunctionComponent } from "react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

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
    <main>
      <p>{title}</p>
      <p>{content}</p>
      <div>
        <p>
          {formatDistanceToNow(new Date(createdAt), {
            locale: ptBR,
            addSuffix: true,
          })}
        </p>
        <button>Ver mais</button>
      </div>
    </main>
  );
};
