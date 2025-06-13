"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import RenderComponent from "@/components/Table";
import { useRouter } from "next/navigation";

export default function Activities() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Carregando...</p>; // ou spinner
  }

  return <RenderComponent />;
}