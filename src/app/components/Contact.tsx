import React from "react";
import ContactWheel from "./Contact/ContactWheel";

const Contact = () => {
  return (
    <div
      id="contact"
      className="mt-[800px] w-full justify-center flex mb-[50px]"
    >
      <div className="flex flex-col">
        <div className="text-center text-3xl font-semibold">Want to chat?</div>
        <div className="text-xl font-medium w-full mt-[30px] mb-[30px] flex flex-row max-md:flex-col items-center gap-y-[50px] gap-x-[50px] max-md:text-center">
          <div className="w-[calc(35vh-10rem)] min-w-[200px]">
            I&apos;m open to commissions for those who want their website
            designed. If you do wish to work with me, contact me at:
          </div>
          <ContactWheel />
        </div>
        <div className="font-mono text-sm font-light text-center">
          Built by Ean James Yu
        </div>
        <div className="font-mono text-sm font-light text-center">
          with React, Next.JS and Tailwind CSS
        </div>
      </div>
    </div>
  );
};

export default Contact;
