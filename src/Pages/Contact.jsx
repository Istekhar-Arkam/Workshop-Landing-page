import { useState } from "react";

function Contact() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login Data:", {
        firstName: formData.firstName,
        lastName: formData.lastName,
      });
    } else {
      console.log("Signup Data:", formData);
    }
  };
  const switchMode = () => {
    setIsLogin((prev) => !prev);
    setFormData({ firstName: "", lastName: "", email: "", password: "" });
  };
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4 py-25">
        {" "}
        {/* ================= ANIMATED BACKGROUND ================= */}{" "}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {" "}
          {/* Blue Orb */}{" "}
          <div className=" absolute -top-32 -left-32 h-72 w-72 md:h-96 md:w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse " />{" "}
          {/* Violet Orb */}{" "}
          <div className=" absolute -bottom-40 -right-32 h-80 w-80 md:h-[500px] md:w-[500px] rounded-full bg-violet-600/20 blur-3xl animate-pulse " />{" "}
          {/* Moving Blue Light */}{" "}
          <div className=" absolute top-1/2 left-1/2 h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-[spin_12s_linear_infinite] " />{" "}
          {/* Background Grid */}{" "}
          <div className=" absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:45px_45px] " />{" "}
        </div>{" "}
        {/* ================= FORM CONTAINER ================= */}{" "}
        <div className="relative z-10 w-full max-w-md">
          {" "}
          {/* 3D Card Shadow Layer */}{" "}
          <div className=" absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-blue-600/20 blur-sm " />{" "}
          {/* Main Card */}{" "}
          <div className=" relative rounded-3xl border border-white/10 bg-neutral-950 px-6 py-8 sm:px-8 sm:py-10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_100px_rgba(37,99,235,0.20)] ">
            {" "}
            {/* Top Accent */}{" "}
            <div className=" absolute top-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-[0_0_20px_rgba(59,130,246,0.7)] " />{" "}
            {/* ================= HEADER ================= */}{" "}
            <div className="text-center mb-8">
              {" "}
              <div className=" mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl font-black shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:rotate-6 hover:scale-110 ">
                {" "}
                W{" "}
              </div>{" "}
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {" "}
                {isLogin ? "Welcome Back" : "Create Your Account"}{" "}
              </h1>{" "}
              <p className="mt-2 text-sm text-neutral-500">
                {" "}
                {isLogin
                  ? "Login to continue to WorkshopEdge"
                  : "Join WorkshopEdge and simplify your workshop management"}{" "}
              </p>{" "}
            </div>{" "}
            {/* ================= FORM ================= */}{" "}
            <form onSubmit={handleSubmit} className="space-y-5">
              {" "}
              {/* First Name + Last Name */}{" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {" "}
                <div className="group">
                  {" "}
                  <label
                    htmlFor="firstName"
                    className=" mb-2 block text-sm font-medium text-neutral-300 "
                  >
                    {" "}
                    First Name{" "}
                  </label>{" "}
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className=" w-full rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 placeholder:text-neutral-600 focus:border-blue-500/70 focus:bg-neutral-900 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.10),inset_0_2px_8px_rgba(0,0,0,0.5)] "
                  />{" "}
                </div>{" "}
                <div className="group">
                  {" "}
                  <label
                    htmlFor="lastName"
                    className=" mb-2 block text-sm font-medium text-neutral-300 "
                  >
                    {" "}
                    Last Name{" "}
                  </label>{" "}
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className=" w-full rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 placeholder:text-neutral-600 focus:border-blue-500/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.10),inset_0_2px_8px_rgba(0,0,0,0.5)] "
                  />{" "}
                </div>{" "}
              </div>{" "}
              {/* ================= SIGNUP ONLY ================= */}{" "}
              {!isLogin && (
                <>
                  {" "}
                  <div>
                    {" "}
                    <label
                      htmlFor="email"
                      className=" mb-2 block text-sm font-medium text-neutral-300 "
                    >
                      {" "}
                      Email Address{" "}
                    </label>{" "}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className=" w-full rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 placeholder:text-neutral-600 focus:border-blue-500/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.10),inset_0_2px_8px_rgba(0,0,0,0.5)] "
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label
                      htmlFor="password"
                      className=" mb-2 block text-sm font-medium text-neutral-300 "
                    >
                      {" "}
                      Password{" "}
                    </label>{" "}
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className=" w-full rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 placeholder:text-neutral-600 focus:border-blue-500/70 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.10),inset_0_2px_8px_rgba(0,0,0,0.5)] "
                    />{" "}
                  </div>{" "}
                </>
              )}{" "}
              {/* ================= SUBMIT BUTTON ================= */}{" "}
              <button
                type="submit"
                className=" group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.30)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_18px_45px_rgba(37,99,235,0.45)] active:translate-y-1 active:scale-[0.98] "
              >
                {" "}
                {/* Button Shine */}{" "}
                <span className=" absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full " />{" "}
                <span className="relative z-10">
                  {" "}
                  {isLogin ? "Login" : "Create Account"}{" "}
                </span>{" "}
                <span className="relative z-10 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  {" "}
                  →{" "}
                </span>{" "}
              </button>{" "}
            </form>{" "}
            {/* ================= SWITCH LOGIN / SIGNUP ================= */}{" "}
            <div className="mt-7 text-center">
              {" "}
              <p className="text-sm text-neutral-500">
                {" "}
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={switchMode}
                  className=" ml-2 font-semibold text-blue-400 transition-all duration-300 hover:text-blue-300 hover:underline hover:underline-offset-4 "
                >
                  {" "}
                  {isLogin ? "Sign up" : "Login"}{" "}
                </button>{" "}
              </p>{" "}
            </div>{" "}
            {/* Bottom 3D Shadow */}{" "}
            <div className=" pointer-events-none absolute -bottom-3 left-8 right-8 h-3 rounded-b-3xl bg-blue-600/20 blur-md " />{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Contact;
