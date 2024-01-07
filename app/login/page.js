"use client";

import { set } from "mongoose";
import { useState } from "react";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      toast.error(result?.error);
    } else {
      toast.success("Login success");
      router.push("/");
    }
  };

  return (
    <main>
      <div className="container my-5">
        <div className="row d-flex justify-content-center align-items- center vh-90">
          <div className="col-lg-5 bg-light p-5 shadow">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-4"
                placeholder="Your email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-4"
                placeholder="Your password"
              />
              <button
                className="btn btn-primary btn-raised"
                disabled={loading || !email || !password}
              >
                {loading ? "Please wait.." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
