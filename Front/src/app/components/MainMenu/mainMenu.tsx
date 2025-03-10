"use client";

import { useRouter } from "next/navigation";

export default function MainMenu() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/select-monsters");
  };

  return (
    <div>
      <button onClick={handleClick}>Single Player</button>
      <button onClick={handleClick}>Multi Player</button>
    </div>
  );
}
