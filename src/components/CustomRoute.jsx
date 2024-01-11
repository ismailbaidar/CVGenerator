export default function CustomRoute({ page, path, children }) {
  return (
    <div className="route" data-visible={path == page}>
      {children}
    </div>
  )
}
