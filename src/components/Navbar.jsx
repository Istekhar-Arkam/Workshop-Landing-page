import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/service",
    },
    {
      name: "About Us",
      path: "/aboutus",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const handleSignup = () => {
    navigate("/signup");
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-5 lg:px-8 pt-3">
      <nav
        className="
          group
          relative
          max-w-7xl
          mx-auto
          overflow-hidden
          rounded-2xl
          
          bg-slate-950/60
          backdrop-blur-2xl
          backdrop-saturate-150
          
          border
          border-white/10
          
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          shadow-blue-950/20
          
          transition-all
          duration-500
          
          hover:border-blue-400/20
          hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)]
        "
      >
        {/* Top glass reflection */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-white/40
            to-transparent
          "
        />

        {/* Soft ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-24
            left-1/3
            w-72
            h-40
            bg-blue-500/10
            blur-3xl
            rounded-full
          "
        />

        {/* Main Navbar */}
        <div className="relative h-16 flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavigation("/")}
            className="
              group/logo
              relative
              text-xl
              sm:text-2xl
              font-black
              tracking-tight
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            <span
              className="
                relative
                z-10
                bg-linear-to-r
                from-blue-300
                via-indigo-400
                to-violet-400
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_12px_rgba(96,165,250,0.25)]
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
                blur-2xl
                opacity-0
                group-hover/logo:opacity-100
                transition-opacity
                duration-500
              "
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item.path)}
                className="
                  relative
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-400
                  rounded-xl
                  
                  border
                  border-transparent
                  
                  hover:text-white
                  hover:bg-white/5
                  hover:border-white/10
                  hover:-translate-y-0.5
                  
                  transition-all
                  duration-300
                "
              >
                {item.name}

                {/* Glass hover glow */}
                <span
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-linear-to-b
                    from-white/5
                    to-transparent
                    opacity-0
                    hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

                {/* Underline */}
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-0
                    h-0.5
                    rounded-full
                    bg-linear-to-r
                    from-blue-400
                    to-violet-400
                    group-hover:w-5
                    transition-all
                    duration-300
                  "
                />
              </button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {/* Login */}
            <button
              type="button"
              onClick={handleLogin}
              className="
                relative
                overflow-hidden
                px-4
                py-2
                text-sm
                font-semibold
                text-slate-300
                
                bg-white/3
                backdrop-blur-md
                
                border
                border-white/10
                rounded-xl
                
                shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                
                hover:text-white
                hover:bg-white/8
                hover:border-blue-400/30
                hover:-translate-y-0.5
                
                active:translate-y-0
                
                transition-all
                duration-300
              "
            >
              Login
            </button>

            {/* Signup */}
            <button
              type="button"
              onClick={handleSignup}
              className="
                group/signup
                relative
                overflow-hidden
                px-5
                py-2
                text-sm
                font-semibold
                text-white
                
                bg-linear-to-br
                from-blue-600
                via-indigo-600
                to-violet-600
                
                border
                border-blue-400/20
                rounded-xl
                
                shadow-inner
                
                
                hover:from-blue-500
                hover:via-indigo-500
                hover:to-violet-500
                
                hover:-translate-y-1
                
                active:translate-y-0
                
                transition-all
                duration-300
              "
            >
              {/* Top highlight */}
              <span
                className="
                  absolute
                  inset-x-2
                  top-0
                  h-px
                  bg-white/40
                "
              />

              {/* Shine */}
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  group-hover/signup:translate-x-full
                  bg-linear-to-r
                  from-transparent
                  via-white/25
                  to-transparent
                  transition-transform
                  duration-700
                "
              />

              <span className="relative z-10">Signup</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              md:hidden
              relative
              p-2.5
              
              text-slate-300
              
              bg-white/5
              backdrop-blur-md
              
              border
              border-white/10
              rounded-xl
              
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
              
              hover:text-white
              hover:bg-white/10
              hover:border-blue-400/30
              hover:-translate-y-0.5
              
              active:translate-y-0
              
              transition-all
              duration-300
            "
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="
              md:hidden
              relative
              
              border-t
              border-white/10
              
              px-4
              pb-4
              pt-3
              
              bg-slate-950/70
              backdrop-blur-2xl
              
              rounded-b-2xl
              
              shadow-[inset_0_10px_30px_rgba(0,0,0,0.15)]
              
              animate-[fadeIn_0.2s_ease-out]
            "
          >
            {/* Mobile Navigation */}
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item.path)}
                  className="
                    w-full
                    text-left
                    
                    px-4
                    py-3
                    
                    text-slate-400
                    font-medium
                    
                    bg-white/2
                    border
                    border-transparent
                    rounded-xl
                    
                    hover:bg-blue-500/10
                    hover:border-blue-400/10
                    hover:text-blue-300
                    hover:translate-x-1
                    
                    transition-all
                    duration-300
                  "
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Auth */}
            <div className="flex gap-3 mt-4">
              {/* Login */}
              <button
                type="button"
                onClick={handleLogin}
                className="
                  flex-1
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  
                  text-blue-300
                  
                  bg-white/5
                  backdrop-blur-md
                  
                  border
                  border-blue-500/30
                  rounded-xl
                  
                  hover:bg-blue-500/10
                  hover:border-blue-400/50
                  hover:-translate-y-0.5
                  
                  transition-all
                  duration-300
                "
              >
                Login
              </button>

              {/* Signup */}
              <button
                type="button"
                onClick={handleSignup}
                className="
                  flex-1
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  
                  bg-linear-to-br
                  from-blue-600
                  via-indigo-600
                  to-violet-600
                  
                  border
                  border-blue-400/20
                  rounded-xl
                  
                  shadow-[0_8px_20px_rgba(37,99,235,0.25)]
                  
                  hover:from-blue-500
                  hover:to-violet-500
                  hover:-translate-y-0.5
                  
                  transition-all
                  duration-300
                "
              >
                Signup
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
