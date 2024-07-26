"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);

      router.push("/client/profiles");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      const res = await axios.post("/api/register", {
        email,
        name,
        password,
      });
      // console.log(res.data);
      setVariant("login");
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.response?.data);
    }
  }, [email, name, password]);

  return (
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 sm:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">
          {variant === "login" ? "Sign in" : "Register"}
        </h2>

        <div className="flex flex-col gap-4">
          {variant === "register" && (
            <div className="relative ">
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Label htmlFor="name">{"Username"}</Label>
            </div>
          )}

          <div className="relative ">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Label htmlFor="email">{"Email address"}</Label>
          </div>

          <div className="relative ">
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Label htmlFor="password">{"Password"}</Label>
          </div>

          <button
            onClick={variant === "login" ? login : register}
            className="bg-red-600 py-3 text-white rounded-md w-full mt-5 hover:bg-red-700 transition"
          >
            {variant === "login" ? "Login" : "Sign up"}
          </button>

          {variant === "login" && (
            <div className="flex flex-row items-center gap-4 mt-5 justify-center">
              <div
                onClick={() =>
                  signIn("google", { callbackUrl: "/client/profiles" })
                }
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() =>
                  signIn("github", { callbackUrl: "/client/profiles" })
                }
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={32} />
              </div>
            </div>
          )}

          <p className="text-neutral-500 mt-5 text-sm">
            {variant === "login"
              ? "First time using Netflix?"
              : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Login"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
