export default function ProjectCard() {
  return (
    <div
      className="text-center cursor-pointer hover:scale-105 
    transition-transform 
    hover:shadow-sm
    hover:shadow-white/20"
    >
      <h1>Project 1</h1>

      <img
        src="https://i.ytimg.com/an_webp/f5r4NUN-rOY/mqdefault_6s.webp?du=3000&sqp=CMTQiLkG&rs=AOn4CLDpIKl_sck6nfIno8_q2_xiC37hCA"
        alt="Project 1"
        width={300}
        height={200}
      />
    </div>
  );
}
