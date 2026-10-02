export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto mt-12 py-12 px-6 flex flex-col sm:flex-row items-center justify-between text-neutral-400 text-xs font-semibold uppercase tracking-wider gap-4">
      <p>© 100 Days of Building • All builds publicly documented.</p>
      <div className="flex items-center gap-6">
        <a href="#builds" className="hover:text-white transition-colors">Builds</a>
        <a href="#technologies" className="hover:text-white transition-colors">Technologies</a>
        <a href="#journey" className="hover:text-white transition-colors">Roadmap</a>
      </div>
    </footer>
  );
}