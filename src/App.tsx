import Login from "./login";
import Overview from "./overview";
import Users from "./users";
import Posts from "./Posts";
import ProfileSettings from "./ProfileSettings";

function App() {
  return (
    <>
      <div className="flex bg-gray-200">
        <div className="bg-white h-screen w-60 pl-5 flex flex-col">
          <h1 className="font-bold pb-7 pt-4 text-xl">Dashboard</h1>
          <ul className="pt-3 text-gray-500">
            <li className="py-1">Overview</li>
            <li className="py-1">Users</li>
            <li className="py-1">Posts</li>
          </ul>
          <div className="flex-grow"></div>
          <div className="flex pb-5">
            <img className="border rounded-full w-8 h-8" alt="img"></img>
            <div className="pl-3">
              <p className="text-xs font-bold">John Doe</p>
              <p className="text-xs">john@example.com</p>
            </div>
          </div>
        </div>
        <div className="w-full h-screen flex flex-col">
          <div className="flex h-15 bg-white items-center justify-between">
            <h1 className="font-semibold text large ml-5">Overview</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="mr-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <img className="border rounded-full w-8 h-8" alt="img"></img>
            </div>
          </div>
          <ProfileSettings />
        </div>
      </div>
    </>
  );
}

export default App;
