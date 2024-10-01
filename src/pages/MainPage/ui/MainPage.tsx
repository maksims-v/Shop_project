import { Slider } from 'shared/ui/Slider/Slider';
import { Banner, getBannerData } from 'entities/Banner';
import { BrandSection, getBrandSectionData } from 'entities/BrandSection';
import { getClearanceSliderData } from 'entities/ClearanceSlider';
import { getPopularSectionData, PopularSection } from 'entities/PopularSection';
import { getSecondBannerData, SecondBanner } from 'entities/SecondBanner';
import { getSliderData } from 'entities/NewArrivalsSlider';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const sliderData = useSelector(getSliderData);
  const bannerData = useSelector(getBannerData);
  const brandSectionData = useSelector(getBrandSectionData);
  const popularSectionData = useSelector(getPopularSectionData);
  const secondBannerData = useSelector(getSecondBannerData);
  const clearanceSliderData = useSelector(getClearanceSliderData);
  return (
    <div>
      <Banner data={bannerData} />
      <PopularSection data={popularSectionData} />
      <Slider data={sliderData} section={'newArrivals'} title={'New Arrivals'} />
      <BrandSection data={brandSectionData} />
      <SecondBanner data={secondBannerData} />
      <Slider data={clearanceSliderData} section={'clearance'} title={'Clearance'} />
    </div>
  );
};

export default MainPage;
