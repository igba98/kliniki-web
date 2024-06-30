import React from "react";

const Login = () => {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center sm:pt-[160px]">
      <div className="mx-auto flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
          }}
        ></div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="mx-auto flex justify-center">
            <h1 className="text-[32px] font-bold">Klinik .</h1>
          </div>
          <p className="mt-3 text-center text-xl text-gray-600">
            Welcome back!
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <a
              href="#"
              className="text-center text-xs uppercase text-gray-500 hover:underline"
            >
              or login with email
            </a>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>
          <div className="mt-4">
            <label
              className="mb-2 block text-sm font-medium text-gray-600"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="mb-2 block text-sm font-medium text-gray-600"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <a href="#" className="text-xs text-gray-500 hover:underline">
                Forget Password?
              </a>
            </div>
            <input
              id="loggingPassword"
              className="block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              type="password"
            />
          </div>
          <div className="mt-6">
            <button className="w-full transform rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a
              href="#"
              className="text-xs uppercase text-gray-500 hover:underline"
            >
              or contact admin
            </a>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
