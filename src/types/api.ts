export type GeneralResponse<T = undefined> = {
  code: number;
  status: string;
  data: T;
};

export type ResultResponse<T> = {
  result: T[];
};

export type ErrorResponse = {
  code: number;
  status: string;
  errors?: { [key: string]: string[] };
};

export type Metadata = {
  page: number;
  limit: number;
  total: number;
  count: number;
  hasNext?: boolean;
  hasPrev?: boolean;
};

export type Pagination = {
  page?: number;
  limit?: number;
};

export type PaginatedResult<T> = GeneralResponse<{
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  to: number;
  total: number;
  data: T[];
}>;
