import TitleJS from "@/features/Materi-JS/components/TitleJS";
import CardJS from "@/features/Materi-JS/components/CardJS";

const MateriHTMLContainer = () => {
  return (
    <div className="flex flex-col gap-12">
      <TitleJS />
      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
        <CardJS />
      </div>
    </div>
  );
};

export default MateriHTMLContainer;
