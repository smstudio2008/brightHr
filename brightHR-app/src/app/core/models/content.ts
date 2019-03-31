export interface Content {
  type: string;
  name: string;
  size?: number;
  added?: string | null;
  files?: (FilesItems)[] | null;
}
export interface FilesItems {
  type: string;
  name: string;
  size?: number;
  added: string;
}
