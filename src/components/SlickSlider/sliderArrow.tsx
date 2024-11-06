import Link from 'next/link';

export const NextArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div>
      <span className="slider-arrow next" onClick={onClick}>
        <span className="icon-right-arrow"></span>
        <span className={`sr-only`}> Next </span>
      </span>
    </div>
  );
};

export const PrevArrow = (props: any) => {
  const { style, onClick } = props;
  return (
    <div>
      <span className="slider-arrow previous" onClick={onClick}>
        <span className="icon-left-arrow"></span>
        <span className={`sr-only`}> Previous </span>
      </span>
    </div>
  );
};
