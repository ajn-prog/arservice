import { useMutation } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

import { FileRequest, File } from '../types';

type FileUploadDTO = {
  data: FileRequest;
};

export async function uploadFile({ data }: FileUploadDTO) {
  const formData = new FormData();
  formData.append('file', data.file, data.file.name);
  const res = await axios.post<GeneralResponse<File>>('/file', formData);

  return res.data;
}

type UseUploadFileOptions = {
  config?: MutationConfig<typeof uploadFile>;
};

export function useUploadFile({ config }: UseUploadFileOptions = {}) {
  return useMutation(uploadFile, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(['files']);

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
