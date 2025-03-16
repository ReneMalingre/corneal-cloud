import { ErrorInfo } from 'react';

interface CustomFallbackProps {
  error: Error;
  errorInfo: ErrorInfo | null;
  resetError: () => void;
}

export function CustomFallback({ error, errorInfo, resetError }: CustomFallbackProps) {
  const errorDetails = `Error: ${error.message}\n\nStack trace:\n${
    error.stack ?? 'No stack trace available'
  }\n\nComponent Stack:\n${errorInfo?.componentStack ?? 'No component stack available'}`;

  const handleCopyError = async () => {
    try {
      await navigator.clipboard.writeText(errorDetails);
      // You could add a toast notification here
      console.log('Error details copied to clipboard');
    } catch (err) {
      console.error('Failed to copy error details:', err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="border-destructive bg-destructive/10 text-destructive max-w-md rounded-lg border-l-4 p-6 shadow-md">
        <h2 className="mb-2 text-lg font-semibold">Oops! Something went wrong</h2>
        <p className="text-sm opacity-90">{error.message}</p>

        {errorInfo && (
          <pre className="bg-background/50 mt-4 max-h-32 overflow-auto rounded p-2 text-xs">
            {errorInfo.componentStack}
          </pre>
        )}

        <div className="mt-4 flex gap-4">
          <button
            type="button"
            className="bg-primary text-primary-foreground rounded-lg px-4 py-2 hover:opacity-90"
            onClick={resetError}
          >
            Try Again
          </button>
          <button
            type="button"
            className="bg-muted text-muted-foreground rounded-lg px-4 py-2 hover:opacity-90"
            onClick={() => void handleCopyError()}
          >
            Copy Error Details
          </button>
          <button
            type="button"
            className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 hover:opacity-90"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}
