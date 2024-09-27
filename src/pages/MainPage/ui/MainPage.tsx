import { Banner, getBannerData } from 'entities/Banner';
import { getSliderData } from 'entities/Slider';
import { Slider } from 'entities/Slider/ui/Slider';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const sliderData = useSelector(getSliderData);
  const bannerData = useSelector(getBannerData);

  return (
    <div>
      <Banner data={bannerData} />
      <Slider data={sliderData} />
    </div>
  );
};

export default MainPage;
