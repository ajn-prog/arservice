import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { PaginatedResult } from '@/types/api';

import { File, FileQuery } from '../types';

export type FileParams = { page?: number; limit?: number };

type FileDTO = {
  params?: FileQuery;
};

export async function getFiles({ params }: FileDTO = {}) {
  const { data } = await axios.get<PaginatedResult<File>>('/file', { params });

  return data;
}

type QueryFnType = typeof getFiles;

type UseFilesOptions = {
  params?: FileParams;
  config?: QueryConfig<QueryFnType>;
};

export function useFiles({ params, config }: UseFilesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['files', params],
    queryFn: () => getFiles({ params }),
  });
}

export function useInfiniteFiles({ params }: UseFilesOptions = {}) {
  return useInfiniteQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['files', { ...params, infinite: true }],
    queryFn: ({ pageParam: page = 1 }) => getFiles({ params: { ...params, page } }),
    getNextPageParam: ({ metadata }) => (metadata.hasNext ? metadata.page + 1 : undefined),
    getPreviousPageParam: ({ metadata }) => (metadata.hasPrev ? metadata.page - 1 : undefined),
  });
}
