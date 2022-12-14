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
      content: `${content?.substring(0, 450)}...`,
      ...rest,
    }));
  }),
  create: t.procedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(async ({ input: { title, content } }) => {
      await prisma.post.create({
        data: {
          title,
          content,
          published: true,
        },
      });
    }),
});
