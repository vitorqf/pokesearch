"use client";

import { queryClient } from "@/libs/tanstack";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export const Registry = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
