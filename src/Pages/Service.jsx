import { useEffect, useState } from "react";

const Service = () => {
  const [activeService, setActiveService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setVisible(true);
  }, []);

  const services = [
    {
      number: "01",
      title: "Digital Product Development",
      description:
        "We design and develop innovative digital products that turn ideas into scalable, user-focused experiences.",
      icon: "✦",
      category: "Product",
      tags: ["Web Apps", "SaaS", "MVP"],
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "Modern, responsive and high-performance web applications built with technologies designed for growth.",
      icon: "◈",
      category: "Development",
      tags: ["React", "Frontend", "Backend"],
      color: "violet",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      number: "03",
      title: "Product Design",
      description:
        "We create clean and intuitive interfaces that make complex digital products simple and enjoyable to use.",
      icon: "◉",
      category: "Design",
      tags: ["UI/UX", "Prototype", "Design"],
      color: "pink",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      number: "04",
      title: "MVP Development",
      description:
        "Turn your startup idea into a functional MVP quickly, validate your concept and prepare it for the next stage.",
      icon: "⚡",
      category: "Product",
      tags: ["Prototype", "Validation", "Launch"],
      color: "amber",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      number: "05",
      title: "API & Backend Solutions",
      description:
        "Reliable backend systems and APIs that power secure, scalable and maintainable digital products.",
      icon: "⌘",
      category: "Development",
      tags: ["APIs", "Node.js", "Database"],
      color: "emerald",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      number: "06",
      title: "Product Improvement",
      description:
        "We analyze existing products and improve their performance, usability and overall digital experience.",
      icon: "↗",
      category: "Growth",
      tags: ["Optimization", "Performance", "Growth"],
      color: "indigo",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  const categories = [
    "All",
    "Product",
    "Development",
    "Design",
    "Growth",
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      text: "Understand the problem, users and opportunities before writing a single line of code.",
      icon: "⌕",
    },
    {
      number: "02",
      title: "Design",
      text: "Turn ideas into intuitive interfaces and meaningful product experiences.",
      icon: "✧",
    },
    {
      number: "03",
      title: "Build",
      text: "Develop a reliable, scalable and production-ready digital product.",
      icon: "⌘",
    },
    {
      number: "04",
      title: "Iterate",
      text: "Learn from feedback, measure results and continuously improve.",
      icon: "↗",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(139,92,246,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.12),transparent_30%)]" />

          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

          <div className="absolute -bottom-40 -left-40 w-112.5 h-112.5 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="absolute top-[25%] left-[8%] w-4 h-4 rounded-full bg-blue-500 animate-ping" />

          <div className="absolute top-[20%] right-[20%] w-12 h-12 border border-blue-400/40 rounded-2xl rotate-12 animate-[bounce_4s_ease-in-out_infinite]" />

          <div className="absolute bottom-[25%] right-[8%] w-5 h-5 rounded-full bg-purple-500 animate-pulse" />
        </div>

        <div
          className={`relative max-w-7xl mx-auto px-6 lg:px-8 w-full transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur border border-blue-500/20 shadow-lg shadow-blue-950/20 text-sm font-semibold text-blue-400 mb-7">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Digital product studio
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-white">
                We build

                <span className="block bg-linear-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  digital ideas.
                </span>
              </h1>

              <p className="mt-7 text-lg sm:text-xl leading-8 text-slate-400 max-w-xl">
                WorkshopEdge is an early-stage software startup building
                innovative digital products that transform ideas into
                meaningful experiences.
              </p>

              {/* CTA */}

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group px-7 py-3.5 rounded-xl bg-white text-slate-950 font-semibold shadow-xl shadow-blue-950/20 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  Explore services

                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("process")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-7 py-3.5 rounded-xl bg-slate-900/70 backdrop-blur text-slate-300 font-semibold border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
                >
                  How we work
                </button>
              </div>

              {/* Stats */}

              <div className="mt-12 grid grid-cols-3 max-w-lg">
                <div>
                  <p className="text-3xl font-black text-white">06+</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Capabilities
                  </p>
                </div>

                <div className="border-l border-slate-800 pl-6">
                  <p className="text-3xl font-black text-blue-400">∞</p>
                  <p className="text-sm text-slate-500 mt-1">Ideas</p>
                </div>

                <div className="border-l border-slate-800 pl-6">
                  <p className="text-3xl font-black text-violet-400">
                    24/7
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Building</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}

            <div className="relative hidden md:block">
              <div className="absolute -inset-10 bg-linear-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-700/60 rounded-[2.5rem] shadow-2xl shadow-black/40 p-7 rotate-2 hover:rotate-0 transition-transform duration-700">
                {/* Browser bar */}

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>

                  <div className="text-xs text-slate-600">
                    workshopedge.dev
                  </div>
                </div>

                {/* Main visual */}

                <div className="relative h-107.5 flex items-center justify-center">
                  <div className="absolute w-72 h-72 rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]" />

                  <div className="absolute w-56 h-56 rounded-full border border-dashed border-violet-500/30 animate-[spin_12s_linear_infinite_reverse]" />

                  <div className="absolute w-40 h-40 rounded-full bg-linear-to-br from-blue-500 via-indigo-500 to-violet-600 blur-2xl opacity-30 animate-pulse" />

                  <div className="relative w-32 h-32 rounded-4xl bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-5xl shadow-2xl shadow-blue-950/60">
                    ✦
                  </div>

                  {/* Floating cards */}

                  <div className="absolute top-16 left-5 bg-slate-800/90 backdrop-blur rounded-2xl px-4 py-3 shadow-xl border border-slate-700 animate-[bounce_5s_ease-in-out_infinite]">
                    <p className="text-xs text-slate-500">Build</p>
                    <p className="font-bold text-slate-200">Fast ⚡</p>
                  </div>

                  <div className="absolute bottom-20 right-2 bg-slate-800/90 backdrop-blur rounded-2xl px-4 py-3 shadow-xl border border-slate-700 animate-[bounce_6s_ease-in-out_infinite]">
                    <p className="text-xs text-slate-500">Ideas</p>
                    <p className="font-bold text-blue-400">
                      ∞ possibilities
                    </p>
                  </div>

                  <div className="absolute top-28 right-5 bg-linear-to-br from-violet-500 to-purple-600 text-white rounded-2xl px-4 py-3 shadow-xl">
                    <p className="text-xs text-violet-200">Product</p>
                    <p className="font-bold">Growing ↗</p>
                  </div>
                </div>

                {/* Bottom mini cards */}

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20" />

                  <div className="h-16 rounded-xl bg-linear-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20" />

                  <div className="h-16 rounded-xl bg-linear-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="relative py-24 bg-slate-950 overflow-hidden"
      >
        {/* Background blobs */}

        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
              <span>✦</span>
              What we do
            </div>

            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              From idea to
              <span className="text-blue-400"> impact.</span>
            </h2>

            <p className="mt-5 text-lg text-slate-400 leading-8 max-w-2xl">
              We combine product thinking, design and engineering to build
              digital experiences that are useful, scalable and built for the
              future.
            </p>
          </div>

          {/* Category Filter */}

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-slate-950 border-white shadow-lg shadow-blue-950/20"
                    : "bg-slate-900 text-slate-400 border-slate-700 hover:border-blue-500/50 hover:text-blue-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cards */}

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.number}
                onMouseEnter={() => setActiveService(service.number)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative bg-slate-900 border border-slate-800 rounded-4xl p-7 overflow-hidden cursor-pointer shadow-[0_10px_35px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Gradient glow */}

                <div
                  className={`absolute -top-24 -right-24 w-52 h-52 rounded-full bg-linear-to-br ${service.gradient} opacity-10 blur-3xl group-hover:opacity-25 group-hover:scale-125 transition-all duration-700`}
                />

                {/* Gradient top line */}

                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-full bg-linear-to-r ${service.gradient} opacity-60 group-hover:opacity-100`}
                />

                {/* Number */}

                <span className="absolute -right-2 -top-8 text-[9rem] font-black leading-none text-slate-800/70 group-hover:text-slate-800 transition-colors duration-500 select-none">
                  {service.number}
                </span>

                {/* Icon */}

                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl bg-linear-to-br ${service.gradient} text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {service.icon}
                </div>

                {/* Category */}

                <div className="relative z-10 mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {service.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-7">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}

                <div className="relative z-10 flex flex-wrap gap-2 mt-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}

                <div
                  className={`absolute bottom-7 right-7 w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg transition-all duration-300 ${
                    activeService === service.number
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-3"
                  }`}
                >
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WORKSHOP EDGE
      ====================================================== */}

      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Why WorkshopEdge
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black leading-tight text-white">
                Small team.
                <br />
                <span className="text-blue-400">Big possibilities.</span>
              </h2>

              <p className="mt-6 text-lg text-slate-400 leading-8">
                We are an early-stage startup ourselves. That means we
                understand uncertainty, experimentation and the importance of
                moving quickly without losing sight of the product.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("process")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 hover:-translate-y-1 shadow-lg shadow-blue-950/40 transition-all"
              >
                See our process →
              </button>
            </div>

            {/* Right feature cards */}

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: "⚡",
                  title: "Fast Iteration",
                  text: "Build, test and improve without unnecessary complexity.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: "◎",
                  title: "User Focused",
                  text: "Every decision starts with the people using the product.",
                  gradient: "from-violet-500 to-purple-500",
                },
                {
                  icon: "◈",
                  title: "Modern Stack",
                  text: "Modern technologies designed for maintainability and growth.",
                  gradient: "from-emerald-400 to-teal-500",
                },
                {
                  icon: "↗",
                  title: "Built to Grow",
                  text: "Architecture that can evolve alongside your business.",
                  gradient: "from-orange-400 to-pink-500",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-linear-to-br ${feature.gradient} text-white flex items-center justify-center text-xl shadow-lg`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 leading-6">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        id="process"
        className="relative py-24 bg-black text-white overflow-hidden"
      >
        {/* Background */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.20),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.20),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                How we work
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black">
                Build.
                <br />
                Learn.
                <br />
                <span className="text-blue-400">Improve.</span>
              </h2>

              <p className="mt-6 text-lg text-slate-400 leading-8 max-w-lg">
                Great products are rarely perfect on the first attempt. We
                believe in a continuous cycle of discovery, design, development
                and improvement.
              </p>

              {/* Active step description */}

              <div className="mt-8 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur">
                <div className="text-4xl text-blue-400">
                  {processSteps[activeStep].icon}
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  {processSteps[activeStep].title}
                </h3>

                <p className="mt-2 text-slate-400 leading-7">
                  {processSteps[activeStep].text}
                </p>
              </div>
            </div>

            {/* Steps */}

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 ${
                    activeStep === index
                      ? "bg-blue-600 border-blue-500 shadow-xl shadow-blue-900/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                      activeStep === index
                        ? "bg-white text-blue-600"
                        : "bg-white/10 text-blue-400"
                    }`}
                  >
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{step.title}</h3>

                    <p
                      className={`text-sm mt-1 ${
                        activeStep === index
                          ? "text-blue-100"
                          : "text-slate-500"
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>

                  <span
                    className={`text-xl transition-transform ${
                      activeStep === index
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STRIP
      ====================================================== */}

      <section className="py-16 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Technologies we love building with
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Tailwind CSS",
              "REST APIs",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-400 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-blue-600 via-indigo-600 to-violet-700 px-8 py-20 sm:px-16 text-center shadow-2xl shadow-blue-950/40">
            {/* Decorative circles */}

            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-white/30 animate-ping" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold">
                <span>✦</span>
                Have an idea?
              </div>

              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-white">
                Let's build something

                <span className="block text-cyan-200">
                  meaningful.
                </span>
              </h2>

              <p className="mt-6 text-blue-100 max-w-xl mx-auto leading-7">
                Whether you have a product idea or want to improve an existing
                digital experience, WorkshopEdge is ready to explore what's
                possible.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() =>
                    console.log("Contact WorkshopEdge")
                  }
                  className="group px-7 py-3.5 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-950 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
                >
                  Let's talk

                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  Explore services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Service;

