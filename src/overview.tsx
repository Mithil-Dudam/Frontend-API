function Overview() {
  return (
    <div className="mx-5">
      <div className="flex bg-white h-12 mt-5 rounded pt-3">
        <p className="text-gray-500 pl-5 text-sm">Today</p>
        <p className="text-gray-500 pl-5 text-sm">Yesterday</p>
        <p className="text-gray-500 pl-5 text-sm">Last 2 weeks</p>
      </div>
      <div className="flex justify-between">
        <div className="rounded bg-white mt-5 px-5 w-full py-4 mr-5">
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">Total Users</h1>
            <p className="rounded-full bg-green-200 text-green-600 text-xs px-1">
              +12%
            </p>
          </div>
          <div className="flex">
            <h1 className="text-xl font-bold pt-2">1,482</h1>
            <p className="pt-4 text-xs ml-1 text-gray-400">users</p>
          </div>
        </div>
        <div className="rounded bg-white mt-5 px-5 w-full py-4 mr-5">
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">New Users</h1>
            <p className="rounded-full bg-green-200 text-green-600 text-xs px-1">
              +8%
            </p>
          </div>
          <div className="flex">
            <h1 className="text-xl font-bold pt-2">142</h1>
            <p className="pt-4 text-xs ml-1 text-gray-400">this period</p>
          </div>
        </div>
        <div className="rounded bg-white mt-5 px-5 w-full py-4 mr-5">
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">Total Posts</h1>
            <p className="rounded-full bg-green-200 text-green-600 text-xs px-1">
              +24%
            </p>
          </div>
          <div className="flex">
            <h1 className="text-xl font-bold pt-2">3,642</h1>
            <p className="pt-4 text-xs ml-1 text-gray-400">posts</p>
          </div>
        </div>
        <div className="rounded bg-white mt-5 px-5 w-full py-4">
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">New Posts</h1>
            <p className="rounded-full bg-green-200 text-green-600 text-xs px-1">
              +18%
            </p>
          </div>
          <div className="flex">
            <h1 className="text-xl font-bold pt-2">264</h1>
            <p className="pt-4 text-xs ml-1 text-gray-400">this period</p>
          </div>
        </div>
      </div>
      <div className="rounded bg-white mt-5 pl-5">
        <h1 className="font-semibold py-3 text-sm">Recent Activity</h1>
        <div className="flex pb-5 pt-4">
          <img className="border rounded-full w-9 h-9" alt="img"></img>
          <div className="pl-3">
            <p className="text-xs">John Doe created a new post</p>
            <p className="text-xs text-gray-500">2 minutes ago</p>
          </div>
        </div>
        <div className="flex pb-5">
          <img className="border rounded-full w-9 h-9" alt="img"></img>
          <div className="pl-3">
            <p className="text-xs">Jane Smith registerd</p>
            <p className="text-xs text-gray-500">15 minutes ago</p>
          </div>
        </div>
        <div className="flex pb-5">
          <img className="border rounded-full w-9 h-9" alt="img"></img>
          <div className="pl-3">
            <p className="text-xs">Mike Johnson updated their profile</p>
            <p className="text-xs text-gray-500">1 hour ago</p>
          </div>
        </div>
      </div>
      <div className="rounded bg-white mt-5 pl-5 flex justify-between py-5">
        <div>
          <h1 className="font-semibold">Users List</h1>
          <p className="text-sm text-gray-500">
            Manage and view all registered users
          </p>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search users..."
            className="mr-5 rounded-md focus:outline-none h-8 my-auto focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="justify-center bg-black text-white rounded text-xs h-7 px-2 my-auto ml-2 mr-5 font-semibold"
            type="submit"
          >
            Add User
          </button>
        </div>
      </div>
      <div className="bg-white mt-5 p-5 rounded">
        <div className="grid grid-cols-5 border-b-gray-100 pb-2 text-xs text-gray-400 font-semibold">
          <h1 className="text-left">USER</h1>
          <h1 className="text-left">EMAIL</h1>
          <h1 className="text-left">STATUS</h1>
          <h1 className="text-left">JOINED DATE</h1>
          <h1 className="text-left">ACTIONS</h1>
        </div>
        <div className="grid grid-cols-5 items-center border-b-gray-100 py-3 text-xs">
          <div className="flex items-center">
            <img className="border rounded-full w-9 h-9" alt="img"></img>
            <div className="pl-3">
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-500">@johndoe</p>
            </div>
          </div>
          <p className="text-gray-500">john@example.com</p>
          <p className="rounded-full text-xs h-5 w-14 flex items-center justify-center bg-green-200 text-green-900 font-semibold">
            Active
          </p>
          <p className="text-gray-500">Jan 15, 2024</p>
          <div className="flex space-x-2">
            <p className="text-gray-500 cursor-pointer">View</p>
            <p className="text-gray-500 cursor-pointer">Edit</p>
            <p className="text-red-500 font-semibold cursor-pointer">Delete</p>
          </div>
        </div>
        <div className="grid grid-cols-5 items-center border-b-gray-100 py-3 text-xs">
          <div className="flex items-center">
            <img className="border rounded-full w-9 h-9" alt="img"></img>
            <div className="pl-3">
              <p className="font-semibold">Jane Smith</p>
              <p className="text-gray-500">@janesmith</p>
            </div>
          </div>
          <p className="text-gray-500">jane@example.com</p>
          <p className="rounded-full text-xs h-5 w-14 flex items-center justify-center bg-yellow-200 text-yellow-700 font-semibold">
            Pending
          </p>
          <p className="text-gray-500">Jan 14, 2024</p>
          <div className="flex space-x-2">
            <p className="text-gray-500 cursor-pointer">View</p>
            <p className="text-gray-500 cursor-pointer">Edit</p>
            <p className="text-red-500 font-semibold cursor-pointer">Delete</p>
          </div>
        </div>

        <div className="grid grid-cols-5 items-center border-b-gray-100 py-3 text-xs">
          <div className="flex items-center">
            <img className="border rounded-full w-9 h-9" alt="img"></img>
            <div className="pl-3">
              <p className="font-semibold">Mike Johnson</p>
              <p className="text-gray-500">@mikejohnson</p>
            </div>
          </div>
          <p className="text-gray-500">mike@example.com</p>
          <p className="rounded-full text-xs h-5 w-14 flex items-center justify-center bg-green-200 text-green-900 font-semibold">
            Active
          </p>
          <p className="text-gray-500">Jan 13, 2024</p>
          <div className="flex space-x-2">
            <p className="text-gray-500 cursor-pointer">View</p>
            <p className="text-gray-500 cursor-pointer">Edit</p>
            <p className="text-red-500 font-semibold cursor-pointer">Delete</p>
          </div>
        </div>
        <div className="flex justify-between pt-3">
          <p className="text-sm">Showing 1 to 10 of 97 results</p>
          <div className="flex space-x-2">
            <p className="cursor-pointer">1</p>
            <p className="cursor-pointer">2</p>
            <p className="cursor-pointer">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
