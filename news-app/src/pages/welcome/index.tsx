import React from "react";
import { Route } from "react-router-dom";

import Welcome from "@/pages/welcome/welcome";

export default (
  <Route path="/" element={<Welcome />} />
);
