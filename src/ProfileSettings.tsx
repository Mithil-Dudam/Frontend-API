function ProfileSettings() {
  return (
    <div className="mx-5">
      <div className="rounded bg-white mt-5 pl-5 py-5">
        <h1 className="font-semibold">Settings</h1>
        <p className="text-sm text-gray-500">
          Manage your account preferences and system settings
        </p>
      </div>
      <div className="flex">
        <div className="bg-white mt-5 px-5 rounded w-full mr-5">
          <h1 className="font-semibold py-3">General Settings</h1>
          <p className="text-sm pb-3 pt-3 font-semibold">Email Notifications</p>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">New User Registration</p>
              <p className="text-xs text-gray-400 pb-3">
                Get notified when a new user registers
              </p>
            </div>
            <div>
              <input type="checkbox" checked></input>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">New Post Alerts</p>
              <p className="text-xs text-gray-400 pb-3">
                Recieve alerts for new posts
              </p>
            </div>
            <div>
              <input type="checkbox"></input>
            </div>
          </div>
          <p className="text-sm pb-3 pt-5 font-semibold">Data Display</p>
          <p className="text-sm">Default Data Range</p>
          <select className="w-full pl-5 pt-1 text-sm">
            <option>Last 7 days</option>
          </select>
          <p className="text-sm">Results Per Page</p>
          <select className="w-full pl-5 pt-1 text-sm">
            <option>10</option>
          </select>
          <p className="text-sm pb-3 pt-5 font-semibold">Security</p>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Two Factor Authentication</p>
              <p className="text-xs text-gray-400 pb-3">
                Add an extra layer of security
              </p>
            </div>
            <div>
              <input type="checkbox"></input>
            </div>
          </div>
        </div>
        <div className="bg-white mt-5 pl-5 rounded w-full h-2/3">
          <h1 className="font-semibold py-3">Quick Actions</h1>
          <ul>
            <li className="text-gray-500 text-sm py-2 pl-5">Update Profile</li>
            <li className="text-gray-500 text-sm py-2 pl-5">Change Password</li>
            <li className="text-gray-500 text-sm py-2 pl-5">Delete Account</li>
          </ul>
          <h1 className="font-semibold py-3 text-sm">System Information</h1>
          <p className="text-sm py-1">
            <span className="text-gray-500">Version: </span>2.1.0
          </p>
          <p className="text-sm py-1">
            <span className="text-gray-500">Last Updated: </span>Jan 15,2024
          </p>
          <p className="text-sm py-1">
            <span className="text-gray-500">Storage Used: </span>1.2 GB / 5 GB
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
