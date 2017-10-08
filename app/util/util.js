export const getAuthUser = () => {
  if (localStorage.getItem('auth_username')) {
    return {
      response: {
        username: localStorage.getItem('auth_username'),
        inProgress: false
      }
    };
  }
  return null;
};

export const setAuthUser = (username) => {
  if (username) {
    localStorage.setItem('auth_username', username);
  } else {
    localStorage.removeItem('auth_username');
  }
};
