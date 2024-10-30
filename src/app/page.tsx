import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1 className="text-2xl font-bold text-center">All Portfolios</h1>

        <SearchBar />

        <div className="grid grid-cols-1 gap-4 gap-y-8 mt-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {Array.from({ length: 12 }).map((_, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
