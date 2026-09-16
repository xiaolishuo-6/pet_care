"use client";

import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="爪爪沐光首页">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <circle cx="10" cy="10" r="4" fill="currentColor" />
              <circle cx="22" cy="10" r="4" fill="currentColor" />
              <circle cx="7" cy="19" r="3.5" fill="currentColor" />
              <circle cx="25" cy="19" r="3.5" fill="currentColor" />
              <path
                d="M10 22c0-5 2.8-9 6-9s6 4 6 9c0 4-2.8 6-6 6s-6-2-6-6Z"
                fill="currentColor"
              />
            </svg>
          </span>
          爪爪沐光 · PET SPA
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          aria-controls="site-menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <nav
          className={`nav-links${open ? " is-open" : ""}`}
          onClick={() => setOpen(false)}
          id="site-menu"
          aria-label="主导航"
        >
          <a href="#services">洗护服务</a>
          <a href="#pricing">参考价格</a>
          <a href="#spaces">门店环境</a>
          <a href="#location">到店路线</a>
          <a className="nav-cta" href="#contact">
            预约到店
          </a>
        </nav>
      </div>
    </header>
  );
}
