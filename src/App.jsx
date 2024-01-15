import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="w-full  h-lvh bg-rose-100">
        <h1 className="w-1/5 mx-auto bg-blue-950 text-white text-center p-2 mb-16">
          React Context API
        </h1>
        <div className="flex flex-wrap justify-center items-center mx-auto mb-10">
          <Login />
        </div>
        <div className="flex flex-wrap justify-center items-center mx-auto">
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
