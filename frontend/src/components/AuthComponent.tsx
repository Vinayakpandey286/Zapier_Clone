"use client";
import React from "react";
import Input from "./Input";
import PrimaryButton from "./buttons/PrimaryButton";
import GreenCheckFeature from "./GreenCheckFeature";
import { useRouter } from "next/navigation";

const AuthComponent = ({ type }: { type: "signup" | "login" }) => {
  const router = useRouter();
  return (
    <div className="flex h-[80vh] items-center mt-4 justify-around">
      <div className="flex flex-col gap-4 w-[35%] pl-8">
        <div className="font-bold text-3xl font-serif">
          Join millions worldwide who automate their work using Zapier.
        </div>
        <GreenCheckFeature title="Easy setup, no coding required" />
        <GreenCheckFeature title="Free forever for core features" />
        <GreenCheckFeature title="14-day trial of premium features & apps" />
      </div>
      <div className="border-[1px] border-solid border-slate-100 p-8 w-[40%] flex flex-col gap-4">
        <div className="font-normal text-sm text-center">
          * indicates a required field
        </div>
        {type === "signup" && (
          <Input type={"text"} label={"* Your name"} onChange={(e) => {}} />
        )}
        <Input type={"email"} label={"* Your email"} onChange={(e) => {}} />
        <Input
          type={"password"}
          label={"* Your password"}
          onChange={(e) => {}}
        />
        <PrimaryButton size="big" onClick={() => {}}>
          Get Started For Free
        </PrimaryButton>
        <div className="flex justify-center">
          <div>
            {type === "signup"
              ? "Already have an account?"
              : "Do not have an account?"}
          </div>
          <div
            className="underline text-blue-900 ml-1"
            onClick={() => {
              type === "signup" ? router.push("login") : router.push("signup");
            }}
          >
            {type === "signup" ? "Login" : "Sign In"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
