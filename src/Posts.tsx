function Posts() {
  return (
    <div className="mx-5">
      <div className="rounded bg-white mt-5 pl-5 flex justify-between py-5">
        <div>
          <h1 className="font-semibold">Posts List</h1>
          <p className="text-sm text-gray-500">View and manage all posts</p>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search posts..."
            className="mr-5 rounded-md focus:outline-none h-8 my-auto focus:ring-2 focus:ring-blue-500"
          />
          <label className="my-auto pr-5">
            <select>
              <option>All posts</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="w-full rounded bg-white pl-5 mr-5">
          <div className="flex justify-between pr-5">
            <div className="flex pb-5 pt-4 items-center">
              <img className="border rounded-full w-9 h-9" alt="img"></img>
              <div className="pl-3">
                <p className="text-xs">John Doe</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <p className="rounded-full text-xs w-15 my-auto pl-1 bg-green-200 text-green-900 font-semibold">
              Published
            </p>
          </div>
          <p className="pb-1 font-semibold text-base">
            Getting started with Web Development
          </p>
          <p className="text-sm text-gray-500 pb-1">
            A comprehensive guide for beginners looking to start their journey
            in web development...
          </p>
          <div className="flex justify-between pr-5">
            <p className="text-xs text-gray-400 pb-5">1.2k views</p>
            <div className="flex space-x-2">
              <p className="text-gray-500 cursor-pointer text-xs">Edit</p>
              <p className="text-red-500 font-semibold cursor-pointer text-xs">
                Delete
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded pl-5 mr-5">
          <div className="flex justify-between pr-5 mr-5">
            <div className="flex pb-5 pt-4 items-center">
              <img className="border rounded-full w-9 h-9" alt="img"></img>
              <div className="pl-3">
                <p className="text-xs">Jane Smith</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <p className="rounded-full text-xs w-10 my-auto pl-1 bg-yellow-200 text-yellow-700 font-semibold">
              Draft
            </p>
          </div>
          <p className="pb-1 font-semibold text-base">
            10 Tips for Better Code Quality
          </p>
          <p className="text-sm text-gray-500 pb-1">
            Essential practices every developer should know for writing
            maintainable and efficient code...
          </p>
          <div className="flex justify-between pr-5">
            <p className="text-xs text-gray-400 pb-5">856 views</p>
            <div className="flex space-x-2">
              <p className="text-gray-500 cursor-pointer text-xs">Edit</p>
              <p className="text-red-500 font-semibold cursor-pointer text-xs">
                Delete
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded pl-5">
          <div className="flex justify-between pr-5">
            <div className="flex pb-5 pt-4 items-center">
              <img className="border rounded-full w-9 h-9" alt="img"></img>
              <div className="pl-3">
                <p className="text-xs">Mike Johnson</p>
                <p className="text-xs text-gray-500">1 Day ago</p>
              </div>
            </div>
            <p className="rounded-full text-xs w-15 my-auto pl-1 bg-green-200 text-green-900 font-semibold">
              Published
            </p>
          </div>
          <p className="pb-1 font-semibold text-base">
            Understanding JavaScript Promises
          </p>
          <p className="text-sm text-gray-500 pb-1">
            A deep dive into asynchronous programming and how to handle promises
            effectively...
          </p>
          <div className="flex justify-between pr-5">
            <p className="text-xs text-gray-400 pb-5">2.1k views</p>
            <div className="flex space-x-2">
              <p className="text-gray-500 cursor-pointer text-xs">Edit</p>
              <p className="text-red-500 font-semibold cursor-pointer text-xs">
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between rounded pt-3 pl-5 mt-5 bg-white my-auto pb-3">
        <p className="text-xs">Showing 1 to 6 of 24 posts</p>
        <div className="flex space-x-2">
          <p className="cursor-pointer text-xs">Previous</p>
          <p className="cursor-pointer text-xs">1</p>
          <p className="cursor-pointer text-xs">2</p>
          <p className="cursor-pointer text-xs">3</p>
          <p className="cursor-pointer pr-5 text-xs ">Next</p>
        </div>
      </div>
      <div className="rounded bg-white mt-5 pl-5 flex justify-between py-5">
        <div>
          <h1 className="font-semibold">Analytics Overview</h1>
          <p className="text-sm text-gray-500">Track user and post metrics</p>
        </div>
        <div className="my-auto">
          <label className="pr-5">
            <select>
              <option>Last 7 days</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="rounded bg-white mt-5 px-5 w-full py-4 mr-5">
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">Total Users</h1>
            <p className="rounded-full text-green-400 text-xs px-1">+12.5%</p>
          </div>
          <div className="flex">
            <h1 className="text-xl font-bold pt-2">1,482</h1>
            <p className="pt-4 text-xs ml-1 text-gray-400">users</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        <div className="rounded bg-white mt-5 px-5 w-full py-4 mr-5">
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">Active Users</h1>
            <p className="rounded-full text-green-400 text-xs px-1">+8.2%</p>
          </div>
          <div className="flex">
            <h1 className="text-xl font-bold pt-2">892</h1>
            <p className="pt-4 text-xs ml-1 text-gray-400">active</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
        <div className="rounded bg-white mt-5 px-5 w-full py-4 mr-5">
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">Total Posts</h1>
            <p className="rounded-full text-green-400 text-xs px-1">+15.7%</p>
          </div>
          <div className="flex">
            <h1 className="text-xl font-bold pt-2">3,642</h1>
            <p className="pt-4 text-xs ml-1 text-gray-400">posts</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: "83%" }}
            ></div>
          </div>
        </div>
        <div className="rounded bg-white mt-5 px-5 w-full py-4">
          <div className="flex justify-between">
            <h1 className="text-sm text-gray-500">Engagement Rate</h1>
            <p className="rounded-full text-red-400 text-xs px-1">-2.3%</p>
          </div>
          <div className="flex">
            <h1 className="text-xl font-bold pt-2">68%</h1>
            <p className="pt-4 text-xs ml-1 text-gray-400">engaged</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className="bg-yellow-500 h-2 rounded-full"
              style={{ width: "68%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="bg-white rounded-lg p-5 shadow-md w-full mr-5">
          <h2 className="text-sm font-semibold mb-4">User Growth</h2>
          <div className="flex justify-between items-end h-32">
            <div className="flex flex-col items-center">
              <div className="w-6 bg-blue-100 h-10 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Mon</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-blue-200 h-16 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Tue</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-blue-300 h-12 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Wed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-blue-400 h-20 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Thu</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-blue-500 h-16 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Fri</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-blue-600 h-24 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Sat</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-blue-700 h-20 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Sun</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-md w-full">
          <h2 className="text-sm font-semibold mb-4">Post Activity</h2>
          <div className="flex justify-between items-end h-32">
            <div className="flex flex-col items-center">
              <div className="w-6 bg-purple-100 h-10 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Mon</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-purple-200 h-16 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Tue</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-purple-300 h-12 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Wed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-purple-400 h-20 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Thu</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-purple-500 h-16 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Fri</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-purple-600 h-24 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Sat</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 bg-purple-700 h-20 rounded"></div>
              <p className="text-xs text-gray-500 mt-1">Sun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
