"use client";
import { useRouter } from "next/navigation";
import LinkButton from "./buttons/LinkButton";
import PrimaryButton from "./buttons/PrimaryButton";

const Appbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between border-b-2">
      <div className="font-extrabold text-2xl flex items-center ml-8">
        <p>Zapier</p>
      </div>
      <div className="flex justify-around">
        <LinkButton onClick={() => {}}>Contact Sales</LinkButton>
        <LinkButton
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </LinkButton>
        <PrimaryButton
          onClick={() => {
            router.push("/signup");
          }}
        >
          Sign Up
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Appbar;
