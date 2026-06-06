import "./globals.css";

export const metadata = {
  title: "Avni Hospital - Best Laparoscopic Surgeon and Gynaecologist in Patna",
  description: "Best Gynecology & Women’s Health Care in Patna. Providing comprehensive, patient-centric care with a focus on advanced treatments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full bg-slate-50 text-slate-900 antialiased m-0 p-0">
        {children}
      </body>
    </html>
  );
}
