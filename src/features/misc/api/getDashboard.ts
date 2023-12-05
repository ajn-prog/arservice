import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { GeneralResponse } from '@/types/api';

type DashboardResponse = {
  complain: number;
  install_base: number;
  tender: number;
  guide_product: number;
};

export async function getDashboard() {
  const res = await axios.get<GeneralResponse<DashboardResponse>>(`/ar-service/dashboard`);

  return res.data.data;
}

type QueryFnType = typeof getDashboard;

type UseDashboardOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useDashboard({ config }: UseDashboardOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['dashboard'],
    queryFn: () => getDashboard(),
  });
}
