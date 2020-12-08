import wretch from "wretch";

export const listUsers = () => {
  return wretch()
    .url("/api/users")
    .get()
    .json((res) => res.users);
};

export const fetchUser = (id) => {
  return wretch()
    .url(`/api/users/${id}`)
    .get()
    .json((res) => res.user);
};

export const createUser = (user) => {
  return wretch()
    .url("/api/users")
    .post(JSON.stringify(user))
    .json((res) => res.user);
};

export const updateUser = (user) => {
  return wretch()
    .url(`/api/users/${user.id}`)
    .patch(JSON.stringify(user))
    .json((res) => res.user);
};
