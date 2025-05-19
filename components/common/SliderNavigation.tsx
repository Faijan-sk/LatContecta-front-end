const SliderNavigation = ({
  sliderRef,
  arrow,
  clss,
}: {
  sliderRef: any;
  arrow: string;
  clss?: string;
}) => {
  return (
    <div
      className={`owl-nav d-flex align-items-center justify-content-center ${clss}`}
    >
      <button
        type="button"
        className="owl-prev border-0 z-1"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <i className="material-symbols-outlined border">{arrow}</i>
      </button>
      <button
        type="button"
        className="owl-next border-0 z-1"
        onClick={() => sliderRef.current.slickNext()}
      >
        <i className="material-symbols-outlined border">{arrow}</i>
      </button>
    </div>
  );
};

export default SliderNavigation;
