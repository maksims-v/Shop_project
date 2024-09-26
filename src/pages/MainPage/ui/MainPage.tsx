import { getSliderData } from 'entities/Slider/model/selectors/getSliderData';
import { fetchSliderData } from 'entities/Slider/model/services/fetchSliderData';
import { Slider } from 'entities/Slider/ui/Slider';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/hook';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const sliderData = useSelector(getSliderData);

  useEffect(() => {
    dispatch(fetchSliderData());
  }, []);

  return (
    <div>
      <Slider data={sliderData} />
    </div>
  );
};

export default MainPage;
