import React from "react";
import { CustomUserCard } from "./CustomCheckbox";
import useStore from "@/zustand";

export default function Avatar() {
  const images = useStore((state) => state.images);

  if (images.length === 0) {
    console.log("sin chambaaaa");
    return null;
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <CustomUserCard
        user={{
          name: "Damian",
          avatar: images[0],
          username: "Diaz",
          url: "https://www.instagram.com/damicitoo/",
          role: "Full Stack Developer",
          status: "Active",
        }}
        statusColor="secondary"
      />
      <CustomUserCard
        user={{
          name: "Jhonatan",
          avatar: images[1],
          username: "Gabriel",
          url: "https://www.instagram.com/vestigio_sincero/",
          role: "Full Stack Developer",
          status: "Active",
        }}
        statusColor="warning"
      />
    </div>
  );
}
