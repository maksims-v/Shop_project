import { useSelector } from 'react-redux';
import { getClearanceSliderData } from '../model/selectors/getClearanceSliderData';
import { Slider } from 'shared/ui/Slider/Slider';

export interface ClearanceSliderProps {}

export const ClearanceSlider = ({}: ClearanceSliderProps) => {
  const data = useSelector(getClearanceSliderData);
  return <Slider data={data} section={'clearance'} title={'Clearance'} />;
};
