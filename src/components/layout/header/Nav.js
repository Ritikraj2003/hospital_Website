import React from "react";

export default function Nav({ onItemClick, isMobile = false }) {
  const navItems = [
    { label: "Home", href: "#home-page" },
    { label: "About Us", href: "#about-us" },
    { label: "Departments", href: "#department-blk" },
    { label: "Services", href: "#services-blk" },
    { label: "Our Doctors", href: "#our-doctor" },
    { label: "Blogs", href: "#recent-news" },
    { label: "Contact Us", href: "#footer-blk" },
  ];

  if (isMobile) {
    return (
      <ul className="list-unstyled d-flex flex-column gap-3">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={onItemClick}
              className="d-block py-2 text-decoration-none fw-medium text-dark border-bottom"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="nav_tabs d-flex align-items-center mb-0">
      {navItems.map((item, index) => (
        <li key={item.label} className={index < navItems.length - 1 ? "mr_20" : ""}>
          <a
            href={item.href}
            className={`nav-item fs_14 fw_med lh_16 ${item.label === "Home" ? "active" : ""}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
