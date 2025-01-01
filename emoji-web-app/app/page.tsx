export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold">NEXT.js</h1>
      
      <ol className="list-decimal">
        <li className="mb-2">
          Get started by editing{" "}
          <code className="bg-white/10 px-2 py-1 rounded">
            app/page.tsx
          </code>
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex gap-4">
        <a 
          href="#"
          className="bg-white text-black px-4 py-2 rounded-full"
        >
          Deploy now
        </a>
        <a 
          href="#"
          className="border border-white/20 px-4 py-2 rounded-full"
        >
          Read our docs
        </a>
      </div>

      <footer className="flex gap-4">
        <a href="#" className="hover:underline">Learn</a>
        <a href="#" className="hover:underline">Examples</a>
        <a href="#" className="hover:underline">Go to nextjs.org →</a>
      </footer>
    </div>
  );
}