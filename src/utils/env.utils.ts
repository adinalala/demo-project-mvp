import config from '@app/config/client.config';

export const isLocal = (): boolean => {
  return config.environment === 'local';
};

export const isTesting = (): boolean => {
  return config.environment === 'testing';
};

export const isStaging = (): boolean => {
  return config.environment === 'staging';
};

export const isProduction = (): boolean => {
  return config.environment === 'production';
};
