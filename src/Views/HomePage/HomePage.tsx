import { useRouter } from "next/router";
import { Card, Layout } from "../../components";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const router = useRouter();

  const navigateToScheduler = () => {
    router.push("/schedule");
  };

  return (
    <Layout>
      <Card>
        <div className="p-4">
          <h1 className="text-xl">Career Foundry Scheduler</h1>

          <div className="flex flex-col">
            <input
              className="rouned-md border font-light text-sm border-slate-200 p-2 mt-3"
              placeholder="Enter your name and proceed..."
            />

            <button
              className="font-light rounded-md text-gray-50 bg-sky-500 text-sm py-1 mt-3"
              onClick={navigateToScheduler}
            >
              Next
            </button>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default HomePage;
