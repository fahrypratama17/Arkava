import { htmlTitle } from "@/features/Materi-HTML/data/data";

const TitleHTML = () => {
  return (
    <div>
      {htmlTitle.map(({ id, title, desc }) => (
        <div key={id}>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-xl">{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default TitleHTML;
