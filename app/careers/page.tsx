"use client";

import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock3,
  Heart,
  Zap,
  Wallet,
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Customer Success Associate",
    department: "Operations",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Compliance Officer",
    department: "Risk & Compliance",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
];

const values = [
  {
    icon: Wallet,
    title: "Build Financial Freedom",
    description:
      "Help millions of people manage money effortlessly through wallets, transfers, savings, and cards.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    description:
      "We ship quickly, learn rapidly, and continuously improve the way people interact with money.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision starts with creating exceptional experiences for our customers.",
  },
];

export default function CareersSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Careers at Durapay
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Build the future of
            <span className="text-blue-900"> personal banking</span>
          </h2>

          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            Join a team creating the next generation financial platform that
            helps people save, spend, transfer, receive money, buy gift cards,
            access virtual cards, earn rewards, and manage everyday finances
            effortlessly.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition-all">
            View Open Roles
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Culture Image Section */}
        <div className="mt-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 lg:p-16">
            <div className="max-w-3xl">
              <h3 className="text-3xl lg:text-5xl font-bold text-white">
                We are building Africa's most loved money app
              </h3>

              <p className="mt-6 text-lg text-blue-100">
                At Durapay, every team member contributes directly to products
                that power payments, savings, cards, rewards, and financial
                growth for customers globally.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <h3 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Why work at Durapay?
            </h3>
            <p className="mt-4 text-gray-600">
              We believe great products are built by great people.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Icon className="text-blue-600" size={26} />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-24 rounded-3xl bg-gray-50 p-8 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Benefits designed for growth
              </h3>

              <p className="mt-4 text-gray-600">
                We support your professional development, well-being, and
                financial future.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Competitive Salary",
                "Remote-Friendly Culture",
                "Health Insurance",
                "Learning Budget",
                "Flexible Leave",
                "Performance Bonuses",
                "Team Retreats",
                "Career Growth",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-xl bg-white p-5 font-medium text-gray-700"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Roles */}
        <div className="mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h3 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Open Positions
              </h3>
              <p className="mt-3 text-gray-600">
                Explore opportunities to help shape the future of digital
                banking.
              </p>
            </div>

            <button className="text-blue-600 font-semibold hover:text-blue-700">
              View All Roles →
            </button>
          </div>

          <div className="space-y-5">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {job.title}
                    </h4>

                    <p className="mt-2 text-blue-600 font-medium">
                      {job.department}
                    </p>

                    <div className="flex flex-wrap items-center gap-5 mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {job.location}
                      </span>

                      <span className="flex items-center gap-2">
                        <Clock3 size={16} />
                        {job.type}
                      </span>

                      <span className="flex items-center gap-2">
                        <Briefcase size={16} />
                        Immediate Opening
                      </span>
                    </div>
                  </div>

                  <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-black transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hiring Process ── */}
        <section className="bg-white border-t border-gray-100 px-4  py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2
                className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#1A202E]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Our Hiring Process
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#64748B] mt-2 max-w-lg">
                We keep things accessible, respectful of your time, and focused
                on real skills.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  step: "01",
                  title: "Application",
                  desc: "Submit your CV and a short note on why we should consider you for this position.",
                },
                {
                  step: "02",
                  title: "Screening Call",
                  desc: "A 30-minute video call with our talent team to learn more about each other.",
                },
                {
                  step: "03",
                  title: "Skills Assessment",
                  desc: "A practical take-home or live exercise relevant to the role — usually 1-2 hours.",
                },
                {
                  step: "04",
                  title: "Final Interview",
                  desc: "Meet the team and hiring manager. We'll cover values, experience, and answer your questions.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative flex flex-col gap-4">
                  {/* Connector line (hidden on mobile) */}
                  <div className="hidden lg:block absolute top-5 left-[52px] right-0 h-px bg-gray-200 -z-0" />
                  <div className="flex items-center gap-3 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#034EA2] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">
                      {step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-gray-900 mb-1">
                      {title}
                    </h3>
                    <p className="text-[13px] text-[#64748B] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-24">
          <div className="rounded-3xl bg-blue-600 p-10 lg:p-16 text-center">
            <h3 className="text-3xl lg:text-5xl font-bold text-white">
              Don't see the perfect role?
            </h3>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              We're always looking for exceptional people passionate about
              building financial products that improve lives.
            </p>

            <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-gray-100 transition-all">
              Join Our Talent Network
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
