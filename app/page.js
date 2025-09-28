import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to VAT Calculator App</h1>
      <p>
        <Link href="/vat">Go to VAT Calculator</Link>
      </p>
    </div>
  );
}
