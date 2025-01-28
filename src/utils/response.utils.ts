export const DEFAULT_ERROR_RESPONSE = 'Something went wrong. Please contact the support.';

export const parseResponseError = async (response: Response): Promise<string> => {
  try {
    const data = await response.json();
    return data?.message ?? DEFAULT_ERROR_RESPONSE;
  } catch (e) {
    return DEFAULT_ERROR_RESPONSE;
  }
};

export const parseResponseData = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await parseResponseError(response);

    // TODO Throw a custom error
    throw new Error(error);
  }

  return response.json();
};
