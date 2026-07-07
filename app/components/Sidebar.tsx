"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BnuLogo from "./BnuLogo";
import {
  CollapseIcon,
  FinancialIcon,
  HealthIcon,
  HomeIcon,
  MentorshipIcon,
  MinusIcon,
  PlusIcon,
  PortalIcon,
  ServicesIcon,
  StudentIcon,
} from "./icons";

const STUDENT_SERVICES_SUBMENU = [
  { label: "Need-Based Scholarship", href: "#" },
  { label: "Gym Registration", href: "/student-services/gym-registration" },
  { label: "Laptop Maintenance Form", href: "#" },
  { label: "Current Subscriptions", href: "/student-services/current-subscriptions" },
  { label: "University Leaving Form", href: "#" },
  { label: "Counseling Form", href: "#" },
  { label: "Hostel Night Leave Form", href: "#" },
];

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
};

function ExpandableNavItem({
  label,
  icon,
  expanded,
  onToggle,
  collapsed,
  active,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  expanded: boolean;
  onToggle: () => void;
  collapsed: boolean;
  active?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
          active
            ? "bg-[#1a6157] font-semibold text-white"
            : "text-gray-700 hover:bg-[#dde5e8]"
        } ${collapsed ? "justify-center px-2" : ""}`}
        title={collapsed ? label : undefined}
        aria-expanded={expanded}
      >
        <span className="shrink-0">{icon}</span>
        {!collapsed && (
          <>
            <span className="flex-1 truncate">{label}</span>
            <span className="shrink-0 opacity-80">
              {expanded ? <MinusIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
            </span>
          </>
        )}
      </button>
      {!collapsed && expanded && children && (
        <div className="pb-1">{children}</div>
      )}
    </div>
  );
}

function SimpleNavItem({
  label,
  icon,
  collapsed,
  href = "#",
  active = false,
  onNavigate,
}: {
  label: string;
  icon: React.ReactNode;
  collapsed: boolean;
  href?: string;
  active?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
        active
          ? "bg-[#1a6157] font-semibold text-white"
          : "text-gray-700 hover:bg-[#dde5e8]"
      } ${collapsed ? "justify-center px-2" : ""}`}
      title={collapsed ? label : undefined}
      aria-current={active ? "page" : undefined}
    >
      <span className="shrink-0">{icon}</span>
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  );
}

export default function Sidebar({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  const pathname = usePathname();
  const isHomeActive = pathname === "/home";
  const isStudentServicesActive = pathname.startsWith("/student-services");

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    student: false,
    health: false,
    financial: false,
    services: isStudentServicesActive,
    mentorship: false,
  });

  useEffect(() => {
    setExpandedSections((prev) => ({
      ...prev,
      services: pathname.startsWith("/student-services"),
    }));
  }, [pathname]);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleServicesToggle = () => {
    setExpandedSections((prev) => ({
      ...prev,
      services: !prev.services,
    }));
  };

  const sidebarContent = (
    <div className="flex h-full flex-col bg-[#e8eef0]">
      <div className={`border-b border-[#d5dde0] py-5 ${collapsed ? "px-2" : "px-4"}`}>
        <Link href="/home" onClick={onMobileClose} aria-label="Go to Home">
          <BnuLogo />
        </Link>
      </div>

      <div className={`border-b border-[#d5dde0] py-3 ${collapsed ? "px-2" : "px-4"}`}>
        <button
          type="button"
          onClick={onToggleCollapse}
          className="flex items-center justify-center rounded p-1.5 text-[#1a237e] transition-colors hover:bg-[#dde5e8]"
          aria-label="Toggle sidebar"
        >
          <CollapseIcon />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        <SimpleNavItem
          label="Home"
          icon={<HomeIcon />}
          collapsed={collapsed}
          href="/home"
          active={isHomeActive}
          onNavigate={onMobileClose}
        />

        <ExpandableNavItem
          label="Student"
          icon={<StudentIcon />}
          expanded={expandedSections.student}
          onToggle={() => toggleSection("student")}
          collapsed={collapsed}
        />

        <ExpandableNavItem
          label="Students Health"
          icon={<HealthIcon />}
          expanded={expandedSections.health}
          onToggle={() => toggleSection("health")}
          collapsed={collapsed}
        />

        <ExpandableNavItem
          label="Students Financial"
          icon={<FinancialIcon />}
          expanded={expandedSections.financial}
          onToggle={() => toggleSection("financial")}
          collapsed={collapsed}
        />

        <SimpleNavItem label="ePortal" icon={<PortalIcon />} collapsed={collapsed} />

        <ExpandableNavItem
          label="Student Services"
          icon={<ServicesIcon />}
          expanded={expandedSections.services}
          onToggle={handleServicesToggle}
          collapsed={collapsed}
          active={isStudentServicesActive}
        >
          {STUDENT_SERVICES_SUBMENU.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onMobileClose}
                className={`block py-2 pl-12 pr-4 text-sm transition-colors ${
                  isActive
                    ? "border-l-[3px] border-[#1a6157] font-semibold text-[#1a6157]"
                    : "border-l-[3px] border-transparent text-gray-600 hover:text-[#1a6157]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </ExpandableNavItem>

        <ExpandableNavItem
          label="Peer Mentorship"
          icon={<MentorshipIcon />}
          expanded={expandedSections.mentorship}
          onToggle={() => toggleSection("mentorship")}
          collapsed={collapsed}
        />
      </nav>
    </div>
  );

  return (
    <>
      <aside
        className={`hidden shrink-0 transition-all duration-300 lg:block ${
          collapsed ? "w-[72px]" : "w-[260px]"
        }`}
      >
        {sidebarContent}
      </aside>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={onMobileClose}
          aria-hidden="true"
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[260px] shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {sidebarContent}
        </aside>
      </div>
    </>
  );
}
