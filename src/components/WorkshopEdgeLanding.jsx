import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Activity,
  Users,
  MessageSquare,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Server,
  Code,
  Cloud,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    value: "99.9%",
    label: "System Uptime",
    desc: "Reliable workshop operations round the clock.",
  },
  {
    value: "10M+",
    label: "Tasks Automated",
    desc: "From ticket creation to final deployment.",
  },
  {
    value: "85%",
    label: "Time Saved",
    desc: "Streamlined requirement gathering and testing.",
  },
  {
    value: "50K+",
    label: "Tickets Managed",
    desc: "Seamless Jira tool integration.",
  },
];

const featuresList = [
  {
    id: "jira",
    title: "Integrated Ticket Management",
    desc: "Deep integration with Jira tools to define requirements, assign tasks, and track progress effortlessly.",
    icon: <CheckCircle className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "teams",
    title: "Cross-Functional Collaboration",
    desc: "Built-in ChatApp and Microsoft Teams sync. Work seamlessly with developers, designers, and contributors.",
    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "lifecycle",
    title: "Complete Product Lifecycle",
    desc: "Manage everything from idea and requirement gathering through development, testing, and continuous improvement.",
    icon: <Activity className="w-6 h-6 text-blue-400" />,
  },
];

const capabilities = [
  {
    title: "HRMS Integration",
    desc: "Manage your workforce, track attendance, and handle payroll within one ecosystem.",
    icon: <Users />,
  },
  {
    title: "Job Posting Portal",
    desc: "Attract top talent directly through our integrated job posting and applicant tracking system.",
    icon: <Briefcase />,
  },
  {
    title: "Postman API Testing",
    desc: "Ensure robust integrations with native support for Postman API collections and automated testing.",
    icon: <Code />,
  },
  {
    title: "Cloud Deployment",
    desc: "One-click deployment pipelines for continuous delivery and improvement.",
    icon: <Cloud />,
  },
];

export default function WorkshopEdgeLanding() {
  const [activeFeature, setActiveFeature] = useState(featuresList[0].id);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-[#050510] text-slate-300 font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="z-10"
        >
          <div className="inline-block border border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            Workshop Optimization Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-500 mb-6 leading-tight">
            Smarter SaaS Tools For <br /> Better Operations
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            WorkshopEdge makes managing workshops easy and efficient. Our
            software helps you save time and reduce costs by streamlining all
            your operations from idea to deployment.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center gap-2">
              Start Optimizing <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/10 hover:bg-white/5 px-8 py-3.5 rounded-full font-semibold transition-all">
              View Features
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-[#080814]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="pl-6 border-l border-blue-500/20"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-blue-400 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Feature Section (Mimicking the AI Brain section) */}

      {/* Capabilities / 3D Grid Section */}
      <section
        id="features"
        className="py-24 bg-[#080814] border-t border-white/5 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Capabilities
            </h2>
            <p className="text-slate-400">
              Tools designed for early-stage technology startups focusing on
              practical SaaS solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.05,
                  zIndex: 10,
                }}
                className="group p-8 rounded-2xl bg-[#0d0d20] border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform-style-3d hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)]"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-900/10 blur-[100px] z-0" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unlock Smarter Workflows <br /> For Better Operations
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Join WorkshopEdge and transform how your company manages the product
            lifecycle.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
            Start Optimizing Today
          </button>
        </motion.div>
      </section>
    </div>
  );
}
