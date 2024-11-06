export const dynamic = 'force-static';
export const revalidate = false;

export default function SSGBuildPage() {
  return (
    <div>
      <h1>SSG Page (No Revalidation)</h1>
      <p>
        This page is statically generated at build time and never revalidated.
      </p>
      <p>Generated at: {new Date().toISOString()}</p>
    </div>
  );
}
