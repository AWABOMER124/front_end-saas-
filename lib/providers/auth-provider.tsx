"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Tenant, User } from "@/lib/api";
import * as api from "@/lib/api";

interface AuthContextProps {
  user?: User;
  tenant?: Tenant;
  loading: boolean;
  login: (phone: string) => Promise<void>;
  register: (name: string, store: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const [tenant, setTenant] = useState<Tenant>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("ideal-agent-auth") : null;
    if (stored) {
      const parsed = JSON.parse(stored) as { user: User; tenant: Tenant };
      setUser(parsed.user);
      setTenant(parsed.tenant);
    }
    setLoading(false);
  }, []);

  const persist = (u: User, t: Tenant) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ideal-agent-auth", JSON.stringify({ user: u, tenant: t }));
    }
  };

  const handleLogin = async (phone: string) => {
    setLoading(true);
    const res = await api.login(phone);
    setUser(res.user);
    setTenant(res.tenant);
    persist(res.user, res.tenant);
    setLoading(false);
  };

  const handleRegister = async (name: string, store: string) => {
    setLoading(true);
    const res = await api.register(name, store);
    setUser(res.user);
    setTenant(res.tenant);
    persist(res.user, res.tenant);
    setLoading(false);
  };

  const logout = () => {
    setUser(undefined);
    setTenant(undefined);
    if (typeof window !== "undefined") {
      localStorage.removeItem("ideal-agent-auth");
    }
  };

  return (
    <AuthContext.Provider value={{ user, tenant, loading, login: handleLogin, register: handleRegister, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
