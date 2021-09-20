import { reactive } from "vue";

type IPagination<T> = {
  [K in keyof T]: T[K];
} & {
  currentChange(currentPage: number): void;
  sizeChange(num: number): void;
  layout: string;
  total: number;
};

export interface IpaginationParams {
  pageSize: number;
  currentSize: number;
}

export type UsePagination = IPagination<IpaginationParams>;

function usePagination(
  getQuery: (params: IpaginationParams) => void
): UsePagination {
  const params = reactive<UsePagination>({
    pageSize: 10,
    layout: "total, sizes, prev, pager, next, jumper",
    total: 100,
    currentSize: 1,
    currentChange(currentPage: number) {
      params.currentSize = currentPage;
      getQuery({
        currentSize: params.currentSize,
        pageSize: params.pageSize,
      });
    },
    sizeChange(num: number) {
      params.pageSize = num;
    },
  });

  return params;
}

export default usePagination;
