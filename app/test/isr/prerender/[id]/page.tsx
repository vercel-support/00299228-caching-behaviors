export const revalidate = 60;

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function ISRPrerenderPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>ISR Page with Build-time Prerendering</h1>
      <p>
        This page is prerendered at build time for IDs 1, 2, and 3, and
        revalidated every 60 seconds.
      </p>
      <p>Current ID: {params.id}</p>
      <p>Generated at: {new Date().toISOString()}</p>
    </div>
  );
}
