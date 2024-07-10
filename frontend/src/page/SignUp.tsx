import { Link } from "react-router-dom";
import GoogleIcon from "../icons/Google";
import { useState } from "react";
import axios from "axios";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const SignUpHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/register", {
        email,
        password,
        username: name,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <main className="min-h-screen flex items-center justify-center py-20 bg-gray-100">
      <section className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-6xl mx-4 lg:mx-8 p-6 lg:p-12">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: "url('image.png')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Let's join us
          </h2>
          <a
            href="#"
            className="flex items-center justify-center my-4 bg-blue-700 text-white rounded-lg shadow-md hover:bg-white"
          >
            <GoogleIcon />
            <span className="px-4 py-3 w-5/6 text-center font-medium hover:text-blue-700">
              Sign up with Google
            </span>
          </a>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <p className="text-sm text-center text-gray-600 font-semibold">
              or, sign up with your email
            </p>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <form className="my-8" onSubmit={SignUpHandler}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                id="name"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none text-sm"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none text-sm"
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none text-sm"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                />
                <label
                  htmlFor="remember"
                  className="ml-3 text-sm font-medium text-gray-500"
                >
                  Agree to terms & conditions
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-white hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-m px-5 py-2.5 text-center shadow-lg"
            >
              Sign up
            </button>
          </form>

          <p className="text-sm font-medium text-gray-500">
            Already have an account?{" "}
            <Link to="/" className="font-medium text-blue-600 hover:underline">
              Sign in now
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};
export default SingUp;
