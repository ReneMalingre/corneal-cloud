import { useEffect, useState } from 'react';
import { getSystemTheme, setTheme, toggleTheme } from '../lib/theme';

export function TestCard() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const initialTheme = getSystemTheme();
    setIsDark(initialTheme === 'dark');
    setTheme(initialTheme);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setIsDark(newTheme === 'dark');
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      {/* Theme Toggle */}
      <button
        type="button"
        onClick={handleThemeToggle}
        className="bg-primary text-primary-foreground fixed right-4 top-4 rounded-md px-4 py-2 transition-opacity hover:opacity-90"
      >
        {isDark ? '🌞 Light' : '🌙 Dark'}
      </button>

      {/* Card */}
      <div className="bg-card rounded-lg border p-6 shadow-sm">
        <div className="space-y-4">
          <h2 className="text-card-foreground text-2xl font-bold tracking-tight">
            Tailwind Test Component
          </h2>
          <p className="text-muted-foreground">
            This component demonstrates various Tailwind CSS features including colors, spacing, and
            dark mode support.
          </p>

          {/* Button Group */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="bg-primary text-primary-foreground ring-offset-background hover:bg-primary/90 focus-visible:ring-ring inline-flex flex-1 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Primary Button
            </button>
            <button
              type="button"
              className="bg-secondary text-secondary-foreground ring-offset-background hover:bg-secondary/80 focus-visible:ring-ring inline-flex flex-1 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Secondary Button
            </button>
          </div>

          {/* Feature List */}
          <div className="space-y-2">
            <h3 className="text-card-foreground font-medium">Features demonstrated:</h3>
            <ul className="text-muted-foreground list-inside list-disc space-y-1">
              <li>System theme detection</li>
              <li>Dark mode support</li>
              <li>Responsive design</li>
              <li>Custom color scheme</li>
              <li>Hover and focus states</li>
            </ul>
          </div>

          {/* Alert */}
          <div className="bg-muted text-muted-foreground rounded-md p-4 text-sm">
            <p>
              Tip: Click the button in the top-right corner to toggle between light and dark modes!
              The initial theme is based on your system preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Card */}
      <div className="bg-accent text-accent-foreground rounded-lg border p-6">
        <p className="text-sm">
          This is a secondary card using the accent color scheme to demonstrate color variations.
        </p>
      </div>
    </div>
  );
}
