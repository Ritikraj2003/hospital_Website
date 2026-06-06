import AdminPage from "@/components/adminpage/AdminPage";

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["dashboard"] },
    { slug: ["appointment"] },
    { slug: ["appointments"] },
  ];
}

export default async function Page() {
  return <AdminPage />;
}
