function Login() {
  return (
    <div className="bg-white rounded w-75 aspect-square px-4 mx-auto my-auto pt-7">
      <div className="text-center">
        <h2 className="font-bold text-lg pb-1">Welcome back</h2>
        <p className="text-gray-500 text-sm">Please enter your details</p>
      </div>
      <div className="pt-2">
        <form>
          <label className="grid text-xs" htmlFor="email">
            Email
          </label>
          <input
            className="pl-2 border border-gray-50 w-full"
            type="email"
            placeholder="Enter your email"
          />
          <label className="grid text-xs" htmlFor="password">
            Password
          </label>
          <input
            className="pl-2 border border-gray-50 w-full"
            type="password"
            placeholder="Enter your password"
          />
          <div className="flex justify-between items-center text-xs pt-4 pb-2">
            <label className="flex">
              <input className="flex" type="checkbox" />
              Remember me
            </label>
            <p className="">Forgot password?</p>
          </div>
          <button
            className="w-full flex justify-center border bg-black text-white rounded text-xs h-7 pt-1"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
      <p className="flex justify-center text-xs text-gray-500 pt-3">
        Don't have an account? Sign up
      </p>
    </div>
  );
}

export default Login;
