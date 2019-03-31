export interface Content {
  type: string;
  name: string;
  added?: string | null;
  files?: (FilesItems)[] | null;
}
export interface FilesItems {
  type: string;
  name: string;
  added: string;
}
