'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Heart, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

const socialLinks = [
  { href: 'https://github.com/Sriram1021', icon: Github, label: 'GitHub', hover: 'hover:bg-slate-900 hover:text-white', ring: 'focus-visible:ring-slate-300' },
  { href: 'https://www.linkedin.com/in/sriram1021/', icon: Linkedin, label: 'LinkedIn', hover: 'hover:bg-blue-600 hover:text-white', ring: 'focus-visible:ring-blue-300' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-24 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white text-slate-700">
      {/* Top wave */}
      <div className="absolute inset-x-0 top-0 -mt-24 overflow-hidden">
        <svg
          className="relative block h-24 w-full text-slate-100"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          aria-hidden="true"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top row: brand + nav + socials */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          {/* Brand + CTA */}
          <div className="md:col-span-4 flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              <div className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-sm font-semibold text-white shadow-sm">
                S
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Sri</p>
                <p className="text-xs text-slate-500">Frontend Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700">
                Available for work
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
              >
                Get in touch
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Nav (pill style) */}
          <nav
            aria-label="Footer"
            className="md:col-span-5 flex flex-wrap items-center justify-center gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials with hover label */}
          <div className="md:col-span-3 flex items-center justify-center gap-4 md:justify-end">
            {socialLinks.map((s) => (
              <div key={s.label} className="group relative flex flex-col items-center">
                {/* Tooltip that appears on hover */}
                <span className="absolute -top-8 scale-0 rounded bg-slate-800 px-2 py-1 text-xs font-medium text-white group-hover:scale-100 transition-transform duration-200 ease-in-out">
                  {s.label}
                  {/* Tooltip arrow */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></span>
                </span>
                
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition ${s.hover} focus-visible:outline-none focus-visible:ring-2 ${s.ring}`}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-slate-200" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sriram. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-slate-500">
            Made with
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-hidden="true" />
            for the web
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
