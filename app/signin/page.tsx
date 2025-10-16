import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#e8f4f8] relative overflow-hidden">
      {/* Logo */}
      <div className="w-full flex justify-center pt-8 pb-6 md:pt-12 md:pb-8">
        <Image
          src="/splash-wave.png"
          alt="Splashes Logo"
          width={300}
          height={80}
          className="w-64 md:w-80 h-auto"
          priority
        />
      </div>

      {/* Card + Mascot */}
      <div className="w-full flex justify-center px-4">
        <div className="relative w-11/12 md:w-full md:max-w-2xl">
          {/* Mascot peeking from the left of the card */}
          <Image
            src="/shark-full.png"
            alt="Splashes Mascot"
            width={260}
            height={260}
            aria-hidden="true"
            className="pointer-events-none select-none absolute -left-10 -top-12 w-32 md:w-52 md:-left-28 md:-top-10"
            priority
          />

          {/* Card */}
          <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] rounded-lg p-6 md:p-10 md:pl-36 flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-6 md:mb-8">
              SIGN IN
            </h1>

            <form className="space-y-5 md:space-y-6 w-full md:max-w-md">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#ff3655] font-medium mb-2"
                >
                  Email <span className="text-[#ff3655]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-[#ff3655] font-medium mb-2"
                >
                  Password <span className="text-[#ff3655]">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-cyan-500 hover:text-cyan-600 text-sm underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Actions */}
              {/* <768px: stacked; >=768px: side-by-side with equal width */}
              <div className="pt-2 space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
                <button
                  type="submit"
                  className="w-full md:w-1/2 bg-[#cfeef6] hover:bg-[#bde6f0] text-white font-medium py-3 px-6 rounded-full transition-colors duration-200"
                >
                  Sign In
                </button>

                <Link href="/signup" className="w-full md:w-1/2">
                  <button
                    type="button"
                    className="w-full bg-white hover:bg-gray-50 text-cyan-500 font-medium py-3 px-6 rounded-full border-2 border-cyan-500 transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
