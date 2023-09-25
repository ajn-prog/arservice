import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { File } from '../types';

type FileDeleteDTO = {
  id: number;
};

export async function deleteFile({ id }: FileDeleteDTO) {
  const res = await axios.delete<GeneralResponse<File>>(`/file/${id}`);

  return res.data;
}

type UseDeleteFileOptions = {
  config?: MutationConfig<typeof deleteFile>;
};

export function useDeleteFile({ config }: UseDeleteFileOptions = {}) {
  return useMutation(deleteFile, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['files']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
