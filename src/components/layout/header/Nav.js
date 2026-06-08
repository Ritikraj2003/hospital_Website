import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav({ onItemClick, isMobile = false }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Departments", href: "/#department-blk" },
    { label: "Services", href: "/#services-blk" },
    { label: "Our Doctors", href: "/#our-doctor" },
    { label: "Blogs", href: "/#recent-news" },
    { label: "Contact Us", href: "/contact" },
  ];

  if (isMobile) {
    return (
      <ul className="list-unstyled d-flex flex-column gap-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onItemClick}
                className={`d-block py-2 text-decoration-none fw-medium border-bottom ${isActive ? "text-primary-color fw-bold" : "text-dark"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="nav_tabs d-flex align-items-center mb-0">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.label} className={index < navItems.length - 1 ? "mr_20" : ""}>
            <Link
              href={item.href}
              className={`nav-item fs_14 fw_med lh_16 ${isActive ? "active" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
