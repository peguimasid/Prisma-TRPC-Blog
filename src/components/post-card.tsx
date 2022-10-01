import { FunctionComponent } from 'react';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
    <main className="space-y-5 rounded-md bg-slate-700 p-5 shadow-lg">
      <h1 className="text-md font-semibold text-slate-100">{title}</h1>
      <p className="text-xs font-light text-slate-400">{content}</p>
      <div className="flex items-end justify-between">
        <p className="text-xs text-slate-500">
          {formatDistanceToNow(createdAt, { locale: ptBR, addSuffix: true })}
        </p>
        <a className="cursor-pointer text-xs text-slate-400 transition-colors hover:text-slate-200">
          Ler mais
        </a>
      </div>
    </main>
  );
};
