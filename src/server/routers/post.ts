import { prisma } from '@/server/prisma';
import { t } from '../trpc';

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
});
