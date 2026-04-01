import Link from "next/link";
import Image from "next/image";

function Header() {
    return (
        <header className="header">
            <nav>
                <div className="logo"><Link href="/">
                <Image src="/kemenag.svg" alt="Logo" width={50} height={50}/   >
                </Link>
                </div>
                <div className="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>

        </header>
    )
}

export default Header