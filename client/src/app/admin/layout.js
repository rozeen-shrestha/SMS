import { getServerSession } from "next-auth";
import { redirect } from "next/navigation"; // <-- Import Next.js redirect helper
import ADMINUI from "@/components/adminui/page";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Admin Dashboard",
  description: "Protected Admin Dashboard",
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  // If no session, use Next.js redirect function to send user to login page
  if (!session) {
    redirect("/login"); // <-- Use redirect helper instead of returning an object
  }

  return (
    <html lang="en">
      <body>
        <ADMINUI>
          {children} {/* Render children in the right place */}
        </ADMINUI>
      </body>
    </html>
  );
}
