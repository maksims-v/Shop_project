import { useSelector } from 'react-redux';
import { getSliderData } from '../model/selectors/getSliderData';
import { Slider } from 'shared/ui/Slider/Slider';

export const NewArrivalsSlider = () => {
  const data = useSelector(getSliderData);

  return <Slider data={data} section={'newArrivals'} title={'New Arrivals'} />;
};
