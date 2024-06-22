import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-2xl">Home page</h1>
      <Link href="/about">About</Link>
      <Link href="/battle-bank">Battle Bank</Link>
      <Link href="/bravocare">BravoCare</Link>
      <Link href="/woodforest-national-bank">Woodforest National Bank</Link>
    </main>
  );
};

export default Home;
