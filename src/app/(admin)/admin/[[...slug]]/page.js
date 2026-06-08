import AdminPage from "@/components/adminpage/AdminPage";

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["dashboard"] },
    { slug: ["appointment"] },
    { slug: ["appointments"] },
    { slug: ["inquiry"] },
    { slug: ["inquiries"] },
  ];
}

export default async function Page() {
  return <AdminPage />;
}
