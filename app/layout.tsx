import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
// import "./globals.css";

export const metadata = {
  title: "EduTech",
  description: "Learn new skills with industry-ready courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />

        {/* Page Content */}
        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
