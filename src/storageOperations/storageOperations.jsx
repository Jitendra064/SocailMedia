// auth

export const storageUser = () =>
  JSON.parse(localStorage.getItem("userData")) || [];

export const loggedInUser = () =>
  JSON.parse(localStorage.getItem("loggedInUser"));

export const setStorageUser = (userData) =>
  localStorage.setItem("user", JSON.stringify(userData));

export const setLoggedUser = (user) =>
  localStorage.setItem("loggedInUser", JSON.stringify(user));

export const removeLoggedInUser = () => localStorage.removeItem("loggedInUser");

// post
export const storagePost = () =>
  JSON.parse(localStorage.getItem("posts")) || [];

export const setStoragePost = (posts) =>
  localStorage.setItem("posts", JSON.stringify(posts));

// like post
