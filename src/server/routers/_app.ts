import { t } from '../trpc';
import { helloRouter } from './hello';
import { postRouter } from './post';

export const appRouter = t.router({
  hello: helloRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
