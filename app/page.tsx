import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Next.js 14 SSG and ISR Examples</h1>
      <ul>
        <li>
          <Link href='/test/ssg/build'>SSG (No Revalidation)</Link>
        </li>
        <li>
          <Link href='/test/ssg/isr'>SSG with ISR (60s)</Link>
        </li>
        <li>
          <Link href='/test/isr/no-build'>ISR (No Build-time Generation)</Link>
        </li>
        <li>
          <Link href='/test/isr/prerender/1'>
            ISR with Prerendering (ID: 1)
          </Link>
        </li>
        <li>
          <Link href='/test/isr/prerender/2'>
            ISR with Prerendering (ID: 2)
          </Link>
        </li>
        <li>
          <Link href='/test/isr/prerender/3'>
            ISR with Prerendering (ID: 3)
          </Link>
        </li>
      </ul>
    </div>
  );
}
