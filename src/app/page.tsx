'use client'
import HomePage from "@/view/home";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState()
  return (
    <>
      <HomePage />
    </>
  );
}
