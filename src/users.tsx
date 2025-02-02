function Users() {
  return (
    <div className="mx-5">
      <h1 className="mt-5">Back to Users List</h1>
      <div className="flex pb-5 rounded pl-5 pt-4 bg-white justify-between my-5">
        <div className="flex">
          <img className="rounded-full w-18 h-18 border" alt="img"></img>
          <div className="ml-3">
            <p className="font-bold text-lg">John Doe</p>
            <p className="text-sm">@johndoe</p>
            <p className="rounded-full text-xs w-11 mt-1 pl-1 bg-green-200 text-green-900 font-semibold">
              Active
            </p>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex">
          <button
            className="justify-center border bg-black text-white rounded text-xs h-7 px-2 my-auto"
            type="submit"
          >
            Edit Profile
          </button>
          <button
            className="justify-center border text-red-400 rounded text-xs h-7 px-2 my-auto ml-2 mr-5 font-semibold"
            type="submit"
          >
            Deactivate Account
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="pl-5 rounded bg-white w-full mr-5">
          <h1 className="font-semibold py-3">Personal Information</h1>
          <p className="text-xs text-gray-400">Full Name</p>
          <p className="text-sm pb-3 ">John Doe</p>
          <p className="text-xs text-gray-400">Email</p>
          <p className="text-sm pb-3 ">john@example.com</p>
          <p className="text-xs text-gray-400">Phone</p>
          <p className="text-sm pb-3 ">+1 (555) 123-4567</p>
          <p className="text-xs text-gray-400">Location</p>
          <p className="text-sm pb-3 ">New York, USA</p>
          <p className="text-xs text-gray-400">Join Date</p>
          <p className="text-sm pb-3 ">January 15,2024</p>
        </div>
        <div className="rounded bg-white w-full pl-5 mr-5">
          <h1 className="font-semibold py-3">Account Statistics</h1>
          <p className="text-xs text-gray-400">Total Posts</p>
          <p className="text-lg pb-3 font-bold">247</p>
          <p className="text-xs text-gray-400">Posts This Month</p>
          <p className="text-lg pb-3 font-bold">12</p>
          <p className="text-xs text-gray-400">Last Active</p>
          <p className="text-sm pb-3 ">2 hours ago</p>
          <p className="text-xs text-gray-400">Account Status</p>
          <p className="text-sm pb-3 text-green-500">Active</p>
        </div>
        <div className="rounded bg-white w-full pl-5">
          <h1 className="font-semibold py-3">Recent activity</h1>
          <ul className="pl-5">
            <li className="list-disc marker:text-blue-500">
              <p className="text-sm">Created a new post</p>
              <p className="text-gray-400 pb-3 text-xs">2 hours ago</p>
            </li>
            <li className="list-disc marker:text-green-500">
              <p className="text-sm">Updated profile information</p>
              <p className="text-gray-400 pb-3 text-xs">1 day ago</p>
            </li>
            <li className="list-disc marker:text-purple-500">
              <p className="text-sm">Changed account settings</p>
              <p className="text-gray-400 pb-3 text-xs">3 days ago</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border rounded bg-white my-5 pl-5">
        <h1 className="font-semibold py-3">Recent Posts</h1>
        <p className="text-base pb-1">Getting started with Web Development</p>
        <p className="text-sm text-gray-500 pb-1">
          A comprehensive guide for beginners...
        </p>
        <p className="text-xs text-gray-400 pb-5">
          Posted 2 hours ago <span className="font-bold">.</span> 5 min read
        </p>
        <p className="text-base pb-1">10 Tips for Better Code Quality</p>
        <p className="text-sm text-gray-500 pb-1">
          Essential practices for writing maintainable code...
        </p>
        <p className="text-xs text-gray-400 pb-5">
          Posted 1 day ago <span className="font-bold">.</span> 8 min read
        </p>
        <p className="text-base pb-1">Understanding JavaScript Promises</p>
        <p className="text-sm text-gray-500 pb-1">
          Deep dive into asynchronous programming...
        </p>
        <p className="text-xs text-gray-400 pb-15">
          Posted 3 days ago <span className="font-bold">.</span> 12 min read
        </p>
      </div>
    </div>
  );
}

export default Users;
