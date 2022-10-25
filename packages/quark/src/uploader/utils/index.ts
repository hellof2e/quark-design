export type UploaderResultType = 'dataUrl' | 'text' | 'file';
export function readFileContent(file: File, resultType: UploaderResultType) {
  return new Promise<string | void>((resolve) => {
    if (resultType === 'file') {
      resolve();
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      resolve((event.target as FileReader).result as string);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

export type UploaderFileListItem = {
  id?: number;
  url?: string;
  file?: File;
  content?: string;
  isImage?: boolean;
  status?: '' | 'uploading' | 'done' | 'failed';
  message?: string;
  deletable?: boolean;
  previewSize?: number | string;
};
export type UploaderMaxSize = number | string | ((file: File) => boolean);

export const toArray = <T>(item: T | T[]): T[] =>
  Array.isArray(item) ? item : [item];
export function isOversize(
  items: UploaderFileListItem | UploaderFileListItem[],
  maxSize: UploaderMaxSize
): boolean {
  return toArray(items).some((item) => {
    if (item.file) {
      return item.file.size > maxSize;
    }
    return false;
  });
}

export function filterFiles(
  items: UploaderFileListItem[],
  maxSize: UploaderMaxSize
) {
  const valid: UploaderFileListItem[] = [];
  const invalid: UploaderFileListItem[] = [];

  items.forEach((item) => {
    if (isOversize(item, maxSize)) {
      invalid.push(item);
    } else {
      valid.push(item);
    }
  });

  return { valid, invalid };
}
