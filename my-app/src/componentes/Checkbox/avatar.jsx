import React from "react";
import { CustomUserCard } from "./CustomCheckbox";

export default function Avatar() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <CustomUserCard
        user={{
          name: "Damian",
          avatar:
            "https://res.cloudinary.com/divxrmzge/image/upload/v1706212705/dami_entott.png",
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
          avatar: "/jona.png",
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
