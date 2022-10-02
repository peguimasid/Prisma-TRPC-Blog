import { prisma } from '@/server/prisma';
import { t } from '../trpc';
import { z } from 'zod';

export const postRouter = t.router({
  all: t.procedure.query(async () => {
    const posts = await prisma.post.findMany({
      where: { published: { equals: true } },
      orderBy: { createdAt: 'desc' },
    });
    return posts.map(({ content, ...rest }) => ({
      content: `${content?.substring(0, 300)}...`,
      ...rest,
    }));
  }),
  create: t.procedure
    .input(z.object({ name: z.string() }))
    .output(z.object({ success: z.boolean() }))
    .mutation(async () => {
      console.log('ok', name);
      return {
        success: true,
      };
    }),
});
