"use client"; // Mark this component as a client component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /admin/dashboard when the page loads
    router.push("/admin/dashboard");
  }, [router]);

  return null; // No content to display as the user is being redirected
}
