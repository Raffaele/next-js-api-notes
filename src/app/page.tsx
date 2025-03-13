export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          NextJS API notes
        </h1>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        Page created as note of the NextJS API features
      </main>
    </div>
  );
}
