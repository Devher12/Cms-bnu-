"use client";

import Image from "next/image";
import { useState } from "react";

const COMMUNITY_ICONS = [
  { label: "Calendar", icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" },
  { label: "Search", icon: "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" },
  { label: "Document", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z M14 2v6h6" },
  { label: "Recycle", icon: "M7 7l-3 3 3 3M17 17l3-3-3-3M3 12h13M21 12H8" },
  { label: "Code", icon: "M8 9l-3 3 3 3M16 9l3 3-3 3M14 4l-4 16" },
  { label: "Video", icon: "M5 5h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z M17 9l4-2v10l-4-2" },
  { label: "Chat", icon: "M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4v8z" },
  { label: "Phone", icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" },
  { label: "Hand", icon: "M18 11V6a2 2 0 00-4 0v5M14 10V4a2 2 0 00-4 0v6M10 10V5a2 2 0 00-4 0v9M6 14v1a6 6 0 006 6 6 6 0 006-6v-3" },
];

const PROFILE_FIELDS = [
  { label: "ID", value: "F2023-548" },
  { label: "Email", value: "moeedikram3@gmail.com" },
  { label: "Parent Email", value: "zahidhusnain8@gmail.com" },
  { label: "Contact", value: "923262070326" },
  { label: "Degree", value: "BSc (Hons) in Computer Science" },
  { label: "Department", value: "Department of Information Technology" },
  { label: "School", value: "School of Computer & Information Technology" },
];

const NOTIFICATIONS = [
  { otp: "4821" },
  { otp: "7394" },
  { otp: "1056" },
  { otp: "8832" },
  { otp: "2947" },
];

const COURSE_ROWS = [
  { label: "Grading", icon: "M8 21l4-7 4 7M12 3v11" },
  { label: "Assignments", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z M14 2v6h6" },
  { label: "Online Exam", icon: "M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5V6.5A2.5 2.5 0 016.5 4H20v15H6.5A2.5 2.5 0 014 19.5z" },
  { label: "Attendance", icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" },
];

const STATS = [
  { label: "Student CGPA", value: "2.47", icon: "M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Dues Remain", value: "", icon: "M3 10h18v8H3z M7 10V6a5 5 0 0110 0v4" },
  { label: "Course Attendance", value: "", icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" },
  { label: "Enrolled Courses", value: "2", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
];

function TealCircleIcon({ path }: { path: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a6157] text-white">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function SectionHeading({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-base font-bold text-gray-900">{title}</h2>
      {action}
    </div>
  );
}

export default function HomePageContent() {
  const [showAlert, setShowAlert] = useState(true);
  const [notificationTab, setNotificationTab] = useState<"all" | "unread">("all");

  return (
    <div className="mx-auto w-full max-w-2xl space-y-5 pb-6">
      {/* Explore BNU Community */}
      <div className="rounded-2xl bg-[#1a6157] p-5 shadow-sm">
        <h2 className="text-lg font-bold text-white">Explore BNU Community</h2>
        <p className="mt-1 text-sm leading-relaxed text-white/90">
          University systems provide integrated platforms to manage academics.
        </p>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {COMMUNITY_ICONS.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-label={item.label}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#1a6157] shadow-sm transition-transform hover:scale-105"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Info alert banner */}
      {showAlert && (
        <div className="flex items-center gap-3 rounded-xl bg-[#fff8e1] px-4 py-3 shadow-sm">
          <svg className="h-5 w-5 shrink-0 text-[#f9a825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="flex-1 text-sm text-gray-800">
            Info: Your Qualification Documentation Details &quot;OK&quot;.
          </p>
          <button
            type="button"
            onClick={() => setShowAlert(false)}
            aria-label="Dismiss"
            className="shrink-0 text-red-500"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}

      {/* Profile Overview */}
      <section>
        <SectionHeading title="Profile Overview" />
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="flex flex-col items-center px-4 pb-4 pt-6">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-[#1565c0] ring-4 ring-[#e3f2fd]">
              <Image
                src="/profile-photo.png"
                alt="Muhammad Moeed Ikram"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-3 text-base font-bold text-gray-900">Muhammad Moeed Ikram</h3>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-[#c8e6c9] px-3 py-1 text-xs font-semibold text-[#1b5e20]">
                Active
              </span>
              <span className="rounded-full bg-[#e1bee7] px-3 py-1 text-xs font-semibold text-[#6a1b9a]">
                Semester VI
              </span>
              <span className="rounded-full bg-[#ffe0b2] px-3 py-1 text-xs font-semibold text-[#e65100]">
                Spring 2026
              </span>
            </div>
          </div>
          <div className="border-t border-[#e0e0e0]">
            {PROFILE_FIELDS.map((field, index) => (
              <div
                key={field.label}
                className={`flex items-center gap-3 px-4 py-3 ${
                  index < PROFILE_FIELDS.length - 1 ? "border-b border-[#e0e0e0]" : ""
                }`}
              >
                <TealCircleIcon path="M12 12a5 5 0 100-10 5 5 0 000 10z M12 14v4" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">{field.label}</p>
                  <p className="text-sm font-medium text-gray-800">{field.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section>
        <SectionHeading
          title="Notifications"
          action={
            <button type="button" className="text-sm font-medium text-[#1a6157] underline">
              View All
            </button>
          }
        />
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="flex border-b border-[#e0e0e0]">
            <button
              type="button"
              onClick={() => setNotificationTab("all")}
              className={`flex-1 px-4 py-3 text-sm font-semibold ${
                notificationTab === "all"
                  ? "border-b-2 border-[#1a6157] text-[#1a6157]"
                  : "text-gray-500"
              }`}
            >
              All Notifications
            </button>
            <button
              type="button"
              onClick={() => setNotificationTab("unread")}
              className={`flex-1 px-4 py-3 text-sm font-semibold ${
                notificationTab === "unread"
                  ? "border-b-2 border-[#1a6157] text-[#1a6157]"
                  : "text-gray-500"
              }`}
            >
              Unread
            </button>
          </div>
          <div>
            {NOTIFICATIONS.map((item, index) => (
              <div
                key={item.otp}
                className={`flex items-center justify-between gap-3 px-4 py-3 ${
                  index < NOTIFICATIONS.length - 1 ? "border-b border-[#e0e0e0]" : ""
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">Notification</span>
                    <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                      New
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Mobile OTP Code: {item.otp}
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-lg bg-[#1a6157] px-3 py-1.5 text-xs font-semibold text-white"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section>
        <SectionHeading
          title="Enrolled Courses"
          action={
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e0e0] text-gray-400"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a6157] text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          }
        />
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="flex items-center justify-between bg-[#1a6157] px-4 py-3">
            <h3 className="text-sm font-bold text-white">MTH-109 Math I (A)</h3>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1a6157]">
              Relative
            </span>
          </div>
          <div>
            {COURSE_ROWS.map((row, index) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-4 py-3 ${
                  index < COURSE_ROWS.length - 1 ? "border-b border-[#e0e0e0]" : ""
                }`}
              >
                <span className="text-sm font-medium text-gray-800">{row.label}</span>
                <TealCircleIcon path={row.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section>
        <SectionHeading title="Statistics" />
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="grid grid-cols-2">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center px-4 py-5 text-center ${
                  index % 2 === 0 ? "border-r border-[#e0e0e0]" : ""
                } ${index < 2 ? "border-b border-[#e0e0e0]" : ""}`}
              >
                <TealCircleIcon path={stat.icon} />
                <p className="mt-2 text-xs text-gray-500">{stat.label}</p>
                {stat.value && (
                  <p className="mt-1 text-lg font-bold text-gray-900">{stat.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today Classes */}
      <section>
        <SectionHeading
          title="Today Classes"
          action={
            <button type="button" className="text-sm font-medium text-[#1a6157] underline">
              View Time Table
            </button>
          }
        />
        <div className="rounded-xl bg-white px-4 py-8 text-center shadow-sm">
          <div className="flex justify-center">
            <TealCircleIcon path="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
          </div>
          <p className="mt-3 text-sm font-bold text-gray-900">No classes today.</p>
          <p className="mt-1 text-xs text-gray-500">
            Your timetable will appear here when classes are scheduled.
          </p>
        </div>
      </section>
    </div>
  );
}
