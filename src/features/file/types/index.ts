import { Pagination } from '@/types/api';
import { BaseEntity } from '@/types/entity';

export interface FileBlob extends Blob {
  readonly lastModified: number;
  readonly name: string;
  readonly webkitRelativePath: string;
}

export type File = {
  filename: string;
  originalname: string;
  path: string;
  extension: string;
  size: number;
} & BaseEntity;

export type FileRequest = {
  file: FileBlob;
};

export type FileQuery = {
  user?: number;
} & Pagination;
