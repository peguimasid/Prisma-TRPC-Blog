import { initTRPC } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';

export const t = initTRPC.create();

const delay = async (time = 0) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(async ({ input }) => {
      await delay(3000);
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      };
    }),
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
