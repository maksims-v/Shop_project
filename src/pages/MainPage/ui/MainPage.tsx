import { Banner, getBannerData } from 'entities/Banner';
import { BrandSection, getBrandSectionData } from 'entities/BrandSection';
import { ClearanceSlider } from 'entities/ClearanceSlider';
import { getPopularSectionData, PopularSection } from 'entities/PopularSection';
import { getSecondBannerData, SecondBanner } from 'entities/SecondBanner';
import { NewArrivalsSlider } from 'entities/NewArrivalsSlider';
import { useSelector } from 'react-redux';
import { getBannerIsLoading } from 'entities/Banner/model/selectors/getBannerIsLoading';

const MainPage = () => {
  const bannerData = useSelector(getBannerData);
  const brandSectionData = useSelector(getBrandSectionData);
  const popularSectionData = useSelector(getPopularSectionData);
  const secondBannerData = useSelector(getSecondBannerData);
  const bannerIsloading = useSelector(getBannerIsLoading);

  return (
    <>
      <Banner data={bannerData} isLoading={bannerIsloading} />
      <PopularSection data={popularSectionData} />
      <NewArrivalsSlider />
      <BrandSection data={brandSectionData} />
      <SecondBanner data={secondBannerData} />
      <ClearanceSlider />
    </>
  );
};

export default MainPage;
