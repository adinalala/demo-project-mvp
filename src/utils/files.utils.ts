import clientConfig from '@app/config/client.config';

export const getPublicUrl = (file: string): string => {
  if (!file) {
    return '';
  }

  return encodeURI(`${clientConfig.storageUrl}/${file}`);
};

export const getPublicUrls = (files: string[]): string[] => {
  if (!files) {
    return [];
  }

  return files.map((file) => getPublicUrl(file));
};
