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
    onMutate: async (newUser) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("users");

      // Snapshot the previous value
      const previousUsers = queryClient.getQueryData("users");

      // Optimistically update to the new value
      queryClient.setQueryData("users", (old) => [
        ...old,
        { ...newUser, id: Date.now() },
      ]);
      return { previousUsers };
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, newUser, context) => {
      queryClient.setQueryData("users", context.previousUsers);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries("users");
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation((user) => updateUser(user), {
    onMutate: async (newUser) => {
      await queryClient.cancelQueries("users");
      const previousUsers = queryClient.getQueryData("users");
      queryClient.setQueryData(
        "users",
        previousUsers.map((user) => (user.id === newUser.id ? newUser : user))
      );
      return { previousUsers };
    },

    onError: (err, newUser, context) => {
      queryClient.setQueryData("users", context.previousUsers);
    },

    onSettled: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
