import { prisma } from '@/server/prisma';
import { t } from '../trpc';

export const postRouter = t.router({
  all: t.procedure.query(async () => {
    return await prisma.post.findMany();
  }),
});
