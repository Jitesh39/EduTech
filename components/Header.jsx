import Link from "next/link";
import "./Header.css";
export default function Header() {
    return (
        // <header style={{ padding: "15px", background: "#000", color: "#fff" }}>
        //   <h1>My Website</h1>
        //   <nav>
        //   <Link href="/">Home</Link> |{" "}
        //   <Link href="/about">About</Link> |{" "}
        //   <Link href="/contact">Contact</Link>
        // </nav>
        // </header>

        <header className="header">
            <Link href="/" className="logo-link">
                <h1 className="logo">EduTech</h1>
            </Link>

            <nav className="nav">
                <Link href="/courses" className="nav-link">Courses</Link>
                <Link href="/contact" className="nav-link">ContactUs</Link>
                <Link href="/login" className="nav-link">Login</Link>
                <Link href="/signup" className="nav-link">SignUp</Link>
            </nav>

        </header>
    );
}
