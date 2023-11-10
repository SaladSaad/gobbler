import { useState, useCallback } from "react";
import Input from "@/components/input"; //when called, pass in parameters for inputProps in input.tsx to modularize input field.

const Auth = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login"); //default is login

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login",
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/bookHero.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className="bg-black w-full h-full lg:bg-opacity-0">
        <nav className="px-12 py-5">
          <img
            src="/images/turkeyLogo.svg"
            alt="Logo"
            className="h-12 filter
            invert
            drop-shadow-xl"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(e: any) => {
                    setUserName(e.target.value);
                  }}
                  id="name"
                  value={userName}
                />
              )}
              {/*The above only runs if variant==register */}

              <Input
                label="Email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "register" ? "Create Account" : "Log In"}
            </button>
            <p className="text-neutral-500 mt-12 text-center">
              {variant === "register"
                ? "Already have an account?"
                : "First time using Gobbler?"}
              <span
                className=" text-white ml-1 hover:underline cursor-pointer"
                onClick={toggleVariant}
              >
                {variant === "register" ? "Sign In" : "Create an account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
