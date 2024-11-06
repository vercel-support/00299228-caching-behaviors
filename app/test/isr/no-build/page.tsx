export const revalidate = 60;

export default function SSGISRPage() {
  return (
    <div>
      <h1>SSG Page with ISR (60s revalidation)</h1>
      <p>This page is statically generated and revalidated every 60 seconds.</p>
      <p>Generated at: {new Date().toISOString()}</p>
    </div>
  );
}
