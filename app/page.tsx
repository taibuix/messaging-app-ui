import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          Fast • Secure • Real-time
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
          Chat with anyone,
          <br />
          anywhere.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          A modern messaging platform built with Next.js. Send messages in
          real-time, create group chats, share media, and stay connected across
          all your devices.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/chat"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Open Chat
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <FeatureCard
            title="Real-time Messaging"
            description="Instant message delivery powered by WebSockets."
          />

          <FeatureCard
            title="Group Chats"
            description="Create teams, communities, and private groups."
          />

          <FeatureCard
            title="Secure"
            description="Authentication, encrypted communication, and protected accounts."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}