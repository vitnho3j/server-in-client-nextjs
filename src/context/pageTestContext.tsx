// EContext.tsx (Client)
"use client"
import { createContext, useContext } from "react";

const DContext = createContext<React.ReactNode>(null);
export const useD = () => useContext(DContext);

export function DProvider({ children, componentD }:{ children: React.ReactNode; componentD: React.ReactNode }) {
  return <DContext.Provider value={componentD}>{children}</DContext.Provider>;
}
