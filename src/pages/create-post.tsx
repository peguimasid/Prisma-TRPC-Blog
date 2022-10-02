import Router from 'next/router';
import { useCallback } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';
import { trpc } from '@/utils/trpc';

const schema = z.object({
  title: z
    .string()
    .min(10, { message: 'No mínimo 10 caracteres' })
    .max(50, { message: 'No máximo 50 caractéres' }),
  content: z
    .string()
    .min(300, { message: 'No minimo 300 caracteres' })
    .max(5000, { message: 'No máximo 5000 caracteres' }),
});

const defaultValues = {
  title: '',
  content: '',
};

const CreatePost = () => {
  const mutation = trpc.post.create.useMutation();

  const { control, formState, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { errors, isValid } = formState;

  const onSuccess = () => Router.push('/');
  const onError = () => alert('Algo deu errado, tente novamente');

  const onSubmit = useCallback(
    async ({ title, content }: z.infer<typeof schema>) => {
      mutation.mutate({ title, content }, { onSuccess, onError });
    },
    [mutation]
  );

  return (
    <main className="flex h-full min-h-screen w-full items-center justify-center bg-slate-800">
      <div className="flex h-full w-full flex-row items-center justify-center">
        <form
          name="loginForm"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm"
        >
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  className="w-full rounded-md bg-slate-600 py-2 px-5 text-sm leading-6 text-slate-300 shadow-sm ring-2 ring-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  disabled={mutation.isLoading}
                  placeholder="Título"
                />
                <p className="mt-1 text-xs font-light text-red-700">
                  {errors.title?.message}
                </p>
              </div>
            )}
          />
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <div>
                <textarea
                  {...field}
                  className="mt-2 max-h-64 w-full rounded-md bg-slate-600 py-2 px-5 text-sm leading-6 text-slate-300 shadow-sm ring-2 ring-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  disabled={mutation.isLoading}
                  placeholder="Conteúdo"
                />
                <div className="flex flex-row justify-between">
                  <p className="mt-1 text-xs font-light text-red-700">
                    {errors.content?.message}
                  </p>
                  <p className="mt-1 text-xs font-light text-slate-400">
                    {field.value.length} de 5000
                  </p>
                </div>
              </div>
            )}
          />

          <button
            type="submit"
            disabled={mutation.isLoading || !isValid}
            className="my-5 ml-auto w-full rounded-md bg-indigo-600 py-1 px-3 text-xs font-medium leading-6 text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-200"
          >
            {mutation.isLoading ? 'Enviando...' : 'Criar'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
