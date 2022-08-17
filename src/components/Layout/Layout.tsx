import { RefreshIcon, ExclamationCircleIcon } from "@heroicons/react/solid";

interface LayoutProps {
  children: React.ReactNode;
  loading?: boolean;
  error?: string;
}

const Layout = ({ children, loading, error }: LayoutProps) => {
  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <ExclamationCircleIcon className=" h-5 w-5 text-gray-400 mr-2" />
        <h3 className="text-sm text-gray-400">{error}</h3>
      </div>
    );
  }

  return (
    <div className="h-screen flex justify-center items-center">
      {loading ? (
        <RefreshIcon className="animate-spin h-5 w-5 text-gray-400" />
      ) : (
        children
      )}
    </div>
  );
};

export default Layout;
