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
    <main className="space-y-5 rounded-md bg-slate-700 p-7 shadow-lg">
      <h1 className="text-3xl font-semibold text-slate-100">{title}</h1>
      <p className="text-md font-light text-slate-400">{content}</p>
      <div className="flex items-end justify-between pt-5">
        <p className="text-sm text-slate-300">
          {formatDistanceToNow(createdAt, { locale: ptBR, addSuffix: true })}
        </p>
        <a className="cursor-pointer rounded-lg bg-slate-600 py-3 px-5 text-sm text-slate-300 transition-all hover:opacity-70">
          Ler mais
        </a>
      </div>
    </main>
  );
};
