import React, { Component, ErrorInfo, ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import SiteView from "./pages/SiteView";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
          <div className="max-w-xl w-full bg-white border border-red-200 rounded-2xl shadow-xl p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Studio Render Encountered an Issue
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {this.state.error?.message || "An unexpected error occurred while rendering the studio."}
            </p>
            {this.state.error?.stack && (
              <pre className="text-left bg-gray-900 text-red-400 p-4 rounded-lg text-xs overflow-x-auto max-h-48 font-mono">
                {this.state.error.stack}
              </pre>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  try {
                    localStorage.clear();
                  } catch {}
                  window.location.reload();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg transition"
              >
                Reset Saved State & Reload
              </button>
              <Link
                to="/site"
                className="w-full sm:w-auto px-5 py-2.5 bg-orange hover:bg-orange/90 text-white text-xs font-bold rounded-lg transition inline-block text-center"
              >
                Open Full Website View (/site) ↗
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const isInsideIframe = typeof window !== "undefined" && window.self !== window.top;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={isInsideIframe ? <SiteView /> : <Index />} />
            <Route path="/site" element={<SiteView />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
