"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function AppLayout({ children }) {
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #ddd",
                padding: "8px",
                color: "#333",
              },
            }}
          />
          {children}
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default AppLayout;
