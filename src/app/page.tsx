"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/select-monsters");
  };

  return <button onClick={handleClick}>Jogar</button>;
}
