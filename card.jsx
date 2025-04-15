export function Card({ children }) {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
  <Card>
    <CardContent>
      <p className="text-sm text-gray-500">Total Likes</p>
      <p className="text-2xl font-bold">
        {data.reduce((acc, item) => acc + item.likes, 0)}
      </p>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <p className="text-sm text-gray-500">Total Shares</p>
      <p className="text-2xl font-bold">
        {data.reduce((acc, item) => acc + item.shares, 0)}
      </p>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <p className="text-sm text-gray-500">Total Comments</p>
      <p className="text-2xl font-bold">
        {data.reduce((acc, item) => acc + item.comments, 0)}
      </p>
    </CardContent>
  </Card>
</div>

  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
