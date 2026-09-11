import { motion } from "framer-motion";
import { Check, Briefcase, Rocket, Building2 } from "lucide-react";

export default function WorkshopEdgePricing() {
  const plans = [
    {
      name: "Starter Plan",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      description:
        "Perfect for small teams starting to define requirements and assign tasks.",
      price: "19",
      features: [
        "Basic Requirement Gathering",
        "Standard Task Assignment",
        "Core Analytics",
        "Email Support",
        "Standard Security",
      ],
      buttonText: "START FREE",
      popular: false,
    },
    {
      name: "Professional Plan",
      icon: <Rocket className="w-6 h-6 text-blue-400" />,
      description:
        "Manage the complete product lifecycle from idea to deployment.",
      price: "49",
      features: [
        "Full Lifecycle Management",
        "Advanced Timeline Tracking",
        "Team Progress Dashboards",
        "Priority Support",
        "API Access for Developers",
      ],
      buttonText: "UPGRADE NOW",
      popular: true,
    },
    {
      name: "Enterprise Plan",
      icon: <Building2 className="w-6 h-6 text-blue-400" />,
      description:
        "For large operations requiring continuous improvement and custom SaaS solutions.",
      price: "99",
      features: [
        "Unlimited Operations Streamlining",
        "Custom Tool Integrations",
        "Dedicated Success Manager",
        "Advanced Security Protocols",
        "SLA Guarantee",
      ],
      buttonText: "START FREE",
      popular: false,
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-blue-500/30">
      {/* 3D Background Elements / Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-indigo-900/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-white via-gray-200 to-gray-500">
              Flexible Plans For <br /> Every Business Stage
            </h1>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed border-l-2 border-blue-500/50 pl-6">
              WorkshopEdge makes managing Workshops easy and efficient. Our
              software helps you save time and reduce costs by streamlining all
              your operations—from idea and requirement gathering through
              continuous improvement.
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
          style={{ perspective: "1000px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                rotateX: 2,
                rotateY: -2,
                scale: 1.02,
                boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.15)",
              }}
              className={`relative rounded-2xl border backdrop-blur-xl flex flex-col ${
                plan.popular
                  ? "bg-linear-to-b from-blue-900/20 to-gray-900/40 border-blue-500/50"
                  : "bg-gray-900/30 border-gray-800/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 right-8 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  POPULAR
                </div>
              )}

              <div className="p-8 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {plan.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm min-h-15 leading-relaxed">
                  {plan.description}
                </p>

                <div className="my-8 flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 font-medium">/month</span>
                </div>

                <div className="h-px w-full bg-linear-to-r from-transparent via-gray-700 to-transparent mb-8" />

                <div className="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">
                  Included:
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0 mt-auto">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
