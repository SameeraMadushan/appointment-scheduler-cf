import { useRouter } from "next/router";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Card, Layout } from "../../components";
import { useUserContext } from "../../context/UserContext";

const HomePage = () => {
  const router = useRouter();
  const { setUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = ({ user }) => {
    if (!setUser) return;
    setUser(user);
    router.push("/schedule");
  };

  return (
    <Layout>
      <Card>
        <div className="p-4">
          <h1 className="text-xl">Career Foundry Scheduler</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <input
                className="rouned-md border font-light text-sm border-slate-200 p-2 mt-3"
                placeholder="Enter your name and proceed..."
                {...register("user", {
                  required: true
                })}
              />

              {errors.user && (
                <span className="text-red-500 text-xs pt-1">
                  Please enter your first name
                </span>
              )}

              <button
                className="font-light rounded-md text-gray-50 bg-sky-500 text-sm py-1 mt-3 hover:bg-sky-600"
                type="submit"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </Card>
    </Layout>
  );
};

export default HomePage;
