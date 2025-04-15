export function Tabs({ children, defaultValue, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children }) {
  return <div className="flex space-x-2 mb-4">{children}</div>;
}

export function TabsTrigger({ children, value }) {
  // Just a basic mockup version
  return (
    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
      {children}
    </button>
  );
}

export function TabsContent({ children, value }) {
  return <div>{children}</div>;
}
