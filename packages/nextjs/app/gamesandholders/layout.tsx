import Header from "./components/Header";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[95%] mx-auto">
      <Header />
      {children}
    </div>
  );
};

export default Home;
