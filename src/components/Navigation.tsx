import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/newsletter", label: "Newsletter" },
    { to: "/reach-me", label: "Reach Me" },
  ];

  const socialLinks = [
    { href: "https://linkedin.com/in/namanjain", label: "LinkedIn" },
    { href: "https://medium.com/@namanjain", label: "Medium" },
    { href: "https://github.com/namanjain", label: "GitHub" },
    { href: "https://substack.com/@namanjain", label: "Substack" },
  ];

  return (
    <header className="w-full py-6 px-6 md:px-12 lg:px-24">
      <nav className="flex items-center justify-between">
        {/* Left navigation */}
        <ul className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right social links */}
        <ul className="hidden md:flex items-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
