import TitleCSS from "@/features/Materi-CSS/components/TitleCSS";
import CardCSS from "@/features/Materi-CSS/components/CardCSS";

const MateriHTMLContainer = () => {
  return (
    <div className="flex flex-col gap-12">
      <TitleCSS />
      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
        <CardCSS />
      </div>
    </div>
  );
};

export default MateriHTMLContainer;
