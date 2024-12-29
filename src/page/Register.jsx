import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password } = data;

    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/register",
        { name, email, password }
      );

      console.log("User registered successfully!", response.data);
      reset();
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label
                htmlFor="name"
                className="block dark:text-teal-600 font-semibold "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-black   focus:border-violet-400 focus:dark:border-violet-600 bg-transparent"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block  dark:text-teal-600 font-semibold  "
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-teal-700   focus:border-violet-400 focus:dark:border-violet-600"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block  dark:text-teal-600 font-semibold  "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md text-black border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50  focus:border-violet-400 focus:dark:border-violet-600"
                {...register("password", { required: true })}
              />
            </div>
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
            <button className="block  w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bvioletg--400 dark:bg-teal-600">
              Register
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-gray-400 dark:text-gray-600 pt-5">
            Have an account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              href="#"
              className="underline  text-black dark:text-teal-600 "
            >
              Login up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
