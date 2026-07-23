type RamPose = "standing" | "victory" | "watching" | "searching" | "slumped" | "seated";

type RamFigureProps = {
  className?: string;
  pose?: RamPose;
};

export function RamFigure({ className = "", pose = "standing" }: RamFigureProps) {
  return (
    <div className={`ram-figure ram-figure--${pose} ${className}`} aria-hidden="true">
      <span className="ram-figure__shadow" />
      <span className="ram-figure__backpack" />
      <span className="ram-figure__head"><i /><b className="ram-figure__ear" /><b className="ram-figure__eye" /></span>
      <span className="ram-figure__neck" />
      <span className="ram-figure__body"><i /><b /></span>
      <span className="ram-figure__arm ram-figure__arm--left" />
      <span className="ram-figure__arm ram-figure__arm--right" />
      <span className="ram-figure__leg ram-figure__leg--left" />
      <span className="ram-figure__leg ram-figure__leg--right" />
    </div>
  );
}
