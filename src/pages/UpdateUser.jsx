import { useUpdateUser, useUserDetail } from "../hooks";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";

export default function UpdateUser() {
  const { id } = useParams();
  const { mutateAsync } = useUpdateUser();
  const { data, isSuccess, isLoading } = useUserDetail(id);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    const initialValues = data;

    const handleSubmit = async (user) => {
      await mutateAsync(user);
      navigate("/");
    };

    return (
      <UserForm
        title="Update User"
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    );
  }
}
