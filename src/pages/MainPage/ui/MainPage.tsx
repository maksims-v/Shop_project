import { Banner, getBannerData } from 'entities/Banner';
import { BrandSection, getBrandSectionData } from 'entities/BrandSection';
import { getSliderData } from 'entities/Slider';
import { Slider } from 'entities/Slider/ui/Slider';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const sliderData = useSelector(getSliderData);
  const bannerData = useSelector(getBannerData);
  const brandSectionData = useSelector(getBrandSectionData);
  return (
    <div>
      <Banner data={bannerData} />
      {/* <Slider data={sliderData} /> */}
      <BrandSection data={brandSectionData} />
    </div>
  );
};

export default MainPage;
