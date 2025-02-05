import { Navbar } from "../navbar";
import "./app.layout.scss";

export function AppLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={`app-layout ${className}`}>
      {children}
      <Navbar />
    </main>
  );
}
