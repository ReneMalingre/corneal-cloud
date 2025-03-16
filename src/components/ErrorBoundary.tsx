import { Component, ErrorInfo, ReactNode } from 'react';

interface FallbackProps {
  error: Error;
  errorInfo: ErrorInfo | null;
  resetError: () => void;
}

interface Props {
  children: ReactNode;
  fallback?: (props: FallbackProps) => ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    console.error('Uncaught error:', error, errorInfo);
  }

  private resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: null });
  };

  public render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      return (
        this.props.fallback?.({
          error: this.state.error,
          errorInfo: this.state.errorInfo,
          resetError: this.resetError,
        }) ?? (
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="bg-destructive/10 text-destructive max-w-md rounded-lg p-6">
              <h2 className="mb-2 text-lg font-semibold">Something went wrong</h2>
              <p className="text-sm opacity-90">{this.state.error.message}</p>
              <button
                type="button"
                onClick={this.resetError}
                className="bg-destructive text-destructive-foreground mt-4 rounded px-4 py-2 hover:opacity-90"
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
