// app/providers.js
"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export const Providers = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);
