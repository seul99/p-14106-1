const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URI;

export const apiFetch = (url: string) => {
  return fetch(`${NEXT_PUBLIC_API_BASE_URL}${url}`).then((res) => res.json());
};
