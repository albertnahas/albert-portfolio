import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Albert Nahas
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Senior Front-End Engineer | React, TypeScript, AI
          </p>
        </div>
        <Chat />
      </div>
    </main>
  );
}
