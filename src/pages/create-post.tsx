import { useCallback, useState, useEffect, useMemo } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Please provide a name' }),
});

const defaultValues = {
  name: '',
};

const CreatePost = () => {
  const { control, formState, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { errors, isValid } = formState;

  const onSubmit = useCallback(({ name }: z.infer<typeof schema>) => {
    console.log(name);
  }, []);

  return (
    <main className="flex h-full min-h-screen w-full items-center justify-center bg-slate-800">
      <div className="flex h-full w-full max-w-lg flex-row items-center justify-center">
        <form name="loginForm" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  className="w-full rounded-md bg-slate-600 py-2 px-5 text-sm leading-6 text-slate-300 shadow-sm ring-2 ring-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Nome"
                />
                <p className="mt-1 text-xs font-light text-red-700">
                  {errors.name?.message}
                </p>
              </div>
            )}
          />

          <button
            type="submit"
            disabled={!isValid}
            className="my-5 ml-auto w-full rounded-md bg-indigo-600 py-1 px-3 text-xs font-medium leading-6 text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-200"
          >
            Criar
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
