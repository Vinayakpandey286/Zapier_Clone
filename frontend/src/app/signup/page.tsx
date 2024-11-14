"use client";
import Appbar from "@/components/Appbar";
import GreenCheckFeature from "@/components/GreenCheckFeature";
import Input from "@/components/Input";

export default function () {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center items-center">
        <div className="flex flex-col flex-1">
          <div className="font-bold text-3xl">
            Join millions worldwide who automate their work using Zapier.
          </div>
          <GreenCheckFeature title="Easy setup, no coding required" />
          <GreenCheckFeature title="Free forever for core features" />
          <GreenCheckFeature title="14-day trial of premium features & apps" />
        </div>
        <div className="border-[1px] border-solid border-slate-100">
          <div>* indicates a required field</div>
          <Input type={"text"} label={" Your name"} onChange={(e) => {}} />
          <Input type={"email"} label={" Your email"} onChange={(e) => {}} />
          <Input
            type={"password"}
            label={" Your password"}
            onChange={(e) => {}}
          />
        </div>
      </div>
    </div>
  );
}
