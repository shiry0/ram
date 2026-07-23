type KathmanduBackdropProps = {
  variant?: "dawn" | "night";
};

export function KathmanduBackdrop({ variant = "dawn" }: KathmanduBackdropProps) {
  return (
    <div className={`kathmandu-backdrop kathmandu-backdrop--${variant}`} aria-hidden="true">
      <div className="valley-hills valley-hills--far"><i /><i /><i /></div>
      <div className="valley-hills valley-hills--near"><i /><i /></div>
      <div className="city-wire"><i /><i /><i /><i /><i /></div>
      <div className="kathmandu-blocks">
        {Array.from({ length: 11 }, (_, index) => (
          <span style={{ "--building": index } as React.CSSProperties} key={index}><i /><i /></span>
        ))}
      </div>
      <div className="ram-home"><i /><span /></div>
    </div>
  );
}
