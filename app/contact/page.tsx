"use client";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-10 lg:mt-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold text-gray-900">
            Get in touch with Durapay
          </h1>
          <p className="mt-4 text-gray-800 text-base md:text-lg">
            Need help with transfers, wallet issues, virtual cards, savings or
            rewards? Our support team is available to assist you anytime.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Contact Methods */}
          <div className="space-y-6">
            {/* Email */}
            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-sm transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Email Support
              </h3>
              <p className="text-gray-600 mt-2">
                Send us a message and we’ll respond within a few hours.
              </p>
              <div className="mt-3 text-sm text-blue-600 font-medium">
                support@durapay.com
              </div>
            </div>

            {/* Live Chat */}
            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-sm transition">
              <h3 className="text-lg font-semibold text-gray-900">
                In-App Chat
              </h3>
              <p className="text-gray-600 mt-2">
                Fastest way to get help inside the Durapay app.
              </p>
              <div className="mt-3 text-sm text-blue-600 font-medium">
                Available 24/7
              </div>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-sm transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Social Media
              </h3>
              <p className="text-gray-600 mt-2">
                Reach us on our official platforms for updates & support.
              </p>
              <div className="mt-3 flex flex-col text-sm text-blue-600 gap-1">
                <span>@durapayapp (Twitter/X)</span>
                <span>@durapay.official (Instagram)</span>
              </div>
            </div>
          </div>

          {/* CENTER: Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Send us a message
              </h2>

              <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="md:col-span-2 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />

                <textarea
                  placeholder="Describe your issue..."
                  rows={6}
                  className="md:col-span-2 w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                />

                <button
                  type="submit"
                  className="md:col-span-2 bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SUPPORT FOOTER STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-2xl">
            <h4 className="font-semibold text-gray-900">Response Time</h4>
            <p className="text-gray-700 mt-2">
              Usually within a few hours, depending on request volume.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h4 className="font-semibold text-gray-900">
              Support Availability
            </h4>
            <p className="text-gray-700 mt-2">
              24/7 support for wallet, cards, transfers & savings issues.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h4 className="font-semibold text-gray-900">Help Categories</h4>
            <p className="text-gray-700 mt-2">
              Wallet, VTU, Gift Cards, Virtual Cards, Savings, Rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
