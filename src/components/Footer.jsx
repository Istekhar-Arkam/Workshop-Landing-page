import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSocialClick = (platform) => {
    console.log(`${platform} clicked`);
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div
          className="
            absolute
            -top-40
            left-1/4
            h-80
            w-80
            rounded-full
            bg-blue-600/10
            blur-[120px]
          "
        />

        {/* Violet glow */}
        <div
          className="
            absolute
            right-0
            top-1/3
            h-96
            w-96
            rounded-full
            bg-violet-600/8
            blur-[140px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-blue-500/5
            blur-[120px]
          "
        />
      </div>

      {/* ================= TOP BORDER GLOW ================= */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-linear-to-r
          from-transparent
          via-blue-500/40
          to-transparent
        "
      />

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavigation("/")}
              className="
                group
                relative
                text-2xl
                font-black
                tracking-tight
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <span
                className="
                  relative
                  z-10
                  bg-linear-to-r
                  from-blue-400
                  via-indigo-400
                  to-violet-400
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_15px_rgba(59,130,246,0.25)]
                "
              >
                WE XBoard
              </span>

              {/* Logo glow */}
              <span
                className="
                  absolute
                  -inset-3
                  rounded-xl
                  bg-blue-500/20
                  blur-xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </button>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-neutral-400
                transition-colors
                duration-300
                hover:text-neutral-300
              "
            >
              WorkshopEdge is an early-stage software startup building
              innovative digital products that turn ideas into meaningful
              digital experiences.
            </p>

            {/* ================= SOCIAL BUTTONS ================= */}
            <div className="mt-7 flex items-center gap-3">
              {/* LinkedIn */}
              <button
                type="button"
                onClick={() => handleSocialClick("LinkedIn")}
                aria-label="LinkedIn"
                className="
                  group
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-sm
                  font-bold
                  text-neutral-400
                  shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:bg-blue-600
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(37,99,235,0.35)]
                "
              >
                <span className="relative z-10">in</span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-linear-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-500
                    group-hover:translate-x-full
                  "
                />
              </button>

              {/* GitHub */}
              <button
                type="button"
                onClick={() => handleSocialClick("GitHub")}
                aria-label="GitHub"
                className="
                  group
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-xs
                  font-bold
                  text-neutral-400
                  shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-neutral-800
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(255,255,255,0.08)]
                "
              >
                GH
              </button>

              {/* X */}
              <button
                type="button"
                onClick={() => handleSocialClick("Twitter")}
                aria-label="Twitter"
                className="
                  group
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-base
                  text-neutral-400
                  shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-neutral-900
                  hover:text-white
                  hover:shadow-[0_12px_30px_rgba(255,255,255,0.08)]
                "
              >
                𝕏
              </button>
            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
              "
            >
              Company
            </h3>

            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => handleNavigation(link.path)}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-neutral-400
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-blue-400
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-blue-400
                        transition-all
                        duration-300
                        group-hover:w-3
                      "
                    />

                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
              "
            >
              Get in touch
            </h3>

            <div className="mt-6 space-y-5">
              {/* Email */}
              <button
                type="button"
                onClick={() => console.log("Email clicked")}
                className="
                  block
                  text-left
                  text-sm
                  text-neutral-400
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-blue-400
                "
              >
                hello@workshopedge.com
              </button>

              {/* Message */}
              <p className="text-sm leading-6 text-neutral-400">
                Let's build something
                <br />
                meaningful together.
              </p>

              {/* Contact Button */}
              <button
                type="button"
                onClick={() => handleNavigation("/contact")}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-xl
                  border
                  border-blue-400/20
                  bg-linear-to-r
                  from-blue-600
                  to-indigo-600
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(37,99,235,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:from-blue-500
                  hover:to-violet-500
                  hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]
                  active:translate-y-0
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-linear-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">Contact us</span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        className="
          relative
          z-10
          border-t
          border-white/10
          bg-black/60
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            py-6
            sm:flex-row
            lg:px-8
          "
        >
          {/* Copyright */}
          <p
            className="
              text-center
              text-xs
              text-neutral-500
              sm:text-left
            "
          >
            © {currentYear} WorkshopEdge. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => console.log("Privacy Policy")}
              className="
                text-xs
                text-neutral-500
                transition-all
                duration-300
                hover:text-blue-400
              "
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => console.log("Terms")}
              className="
                text-xs
                text-neutral-500
                transition-all
                duration-300
                hover:text-blue-400
              "
            >
              Terms
            </button>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-1/2
          -translate-x-1/2
          bg-linear-to-r
          from-transparent
          via-blue-500/30
          to-transparent
        "
      />
    </footer>
  );
};

export default Footer;
