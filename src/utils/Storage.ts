export const getSessionStorage = (key: string) => {
  const data = sessionStorage.getItem(key);

  return data ? JSON.parse(data) : data;
};
export const setSessionStorage = (key: string, result: string) => {
  sessionStorage.setItem(
    key,
    typeof result === "object" ? JSON.stringify(result) : result
  );
};

export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItems(key);
};

export const setLocalStorage = (key: string, result: string) => {
  localStorage.setItem(
    key,
    typeof result === "object" ? JSON.stringify(result) : result
  );
};

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : data;
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
