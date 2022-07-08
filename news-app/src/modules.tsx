import React from "react";
import { Route, Routes } from "react-router-dom";

import welcomeModule from '@/pages/welcome';
import NotFound from "@/shared/components/not-found";

export const routes = () => {
  return (
    <Routes>
      {welcomeModule}
      <Route path="*" element={NotFound} key="not-found" />
    </Routes>
  );
};
