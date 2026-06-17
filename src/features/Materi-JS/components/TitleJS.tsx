import { jsTitle } from "@/features/Materi-JS/data/data";

const TitleJS = () => {
  return (
    <>
      {jsTitle.map(({ id, title, desc }) => (
        <div className="flex flex-col items-start gap-4" key={id}>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="w-[80%] text-xl">{desc}</p>
        </div>
      ))}
    </>
  );
};

export default TitleJS;
