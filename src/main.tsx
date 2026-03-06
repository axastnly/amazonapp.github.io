
  import { createRoot } from "react-dom/client";
  import { Component, type ReactNode } from "react";
  import App from "./app/MainApp.tsx";
  import "./styles/index.css";

  class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
    state = { error: null };
    static getDerivedStateFromError(error: Error) { return { error }; }
    render() {
      if (this.state.error) {
        return (
          <div style={{ padding: 24, fontFamily: "monospace", color: "red" }}>
            <strong>App crashed:</strong>
            <pre style={{ whiteSpace: "pre-wrap", marginTop: 8 }}>
              {(this.state.error as Error).message}
              {"\n"}
              {(this.state.error as Error).stack}
            </pre>
          </div>
        );
      }
      return this.props.children;
    }
  }

  createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
