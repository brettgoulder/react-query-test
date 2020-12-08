import { useQuery, useMutation, useQueryClient } from "react-query";
import { listUsers, fetchUser, createUser, updateUser } from "../api";

export const useUsers = () => {
  return useQuery("users", listUsers);
};

export const useUserDetail = (id) => {
  return useQuery(["users", id], () => fetchUser(id));
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation((user) => createUser(user), {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation((user) => updateUser(user), {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });
};
