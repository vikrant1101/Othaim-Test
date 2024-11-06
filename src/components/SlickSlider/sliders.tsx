'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SlidersProps {
  className?: string;
  children?: React.ReactNode;
  dir?: String | any;
}

export const Sliders: React.FC<SlidersProps> = ({
  className,
  children,
  dir,
  ...rest
}) => {
  return (
    <div className="slider-wrapper">
      <Slider className={className} {...rest}>
        {children}
      </Slider>
    </div>
  );
};
