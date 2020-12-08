import { useCreateUser } from "../hooks";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

export default function CreateUser() {
  const { mutateAsync } = useCreateUser();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
  };

  const handleSubmit = async (user) => {
    await mutateAsync(user);
    navigate("/");
  };

  return (
    <UserForm
      title="Create User"
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
}
