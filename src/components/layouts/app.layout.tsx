import "./app.layout.scss";

export function AppLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <main className={`app-layout ${className}`}>{children}</main>;
}
