"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import Feature from "./Feature";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center p-[2rem] gap-4">
      <div className="text-5xl font-semibold max-w-xl text-center">
        Automate as fast as you can type
      </div>
      <div className="text-xl font-normal max-w-2xl text-center">
        Turn chaos into smooth operations by automating workflows yourself—no
        developers, no IT tickets, no delays. The only limit is your
        imagination.
      </div>
      <div className="flex gap-4">
        <PrimaryButton
          onClick={() => {
            router.push("/signup");
          }}
          size={"big"}
        >
          Get Started free
        </PrimaryButton>
        <SecondaryButton onClick={() => {}} size={"big"}>
          Contact Sales
        </SecondaryButton>
      </div>
      <Feature />
    </div>
  );
};

export default Hero;
