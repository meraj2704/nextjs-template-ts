import store from "@/redux/Store/store";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";

const WrapProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    const queryClient = new QueryClient();
  return <Provider store={store}>{children}</Provider>;
};

export default WrapProvider;
