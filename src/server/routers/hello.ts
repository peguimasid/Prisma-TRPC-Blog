import { prisma } from '@/server/prisma';
import { z } from 'zod';
import { t } from '../trpc';

export const helloRouter = t.router({
  byName: t.procedure
    .input(z.object({ name: z.string().nullish() }).nullish())
    .query(async ({ input }) => {
      return {
        greeting: `Hello ${input?.name ?? 'world'}`,
      };
    }),
  list: t.procedure.query(async () => {
    return await prisma.post.findMany();
  }),
});
