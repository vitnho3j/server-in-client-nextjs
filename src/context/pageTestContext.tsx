// EContext.tsx (Client)
"use client"
import { createContext, useContext } from "react";

const DContext = createContext<React.ReactNode>(null);
export const useD = () => useContext(DContext);

export function DProvider({ children, componentE }:{ children: React.ReactNode; componentE: React.ReactNode }) {
  return <DContext.Provider value={componentE}>{children}</DContext.Provider>;
}
