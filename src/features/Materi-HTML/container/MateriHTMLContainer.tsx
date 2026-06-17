import TitleHTML from "@/features/Materi-HTML/components/TitleHTML";
import CardHTML from "@/features/Materi-HTML/components/CardHTML";

const MateriHTMLContainer = () => {
  return (
    <div className="flex flex-col gap-12">
      <TitleHTML />
      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
        <CardHTML />
      </div>
    </div>
  );
};

export default MateriHTMLContainer;
