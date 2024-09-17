import { classNames } from 'shared/lib/classNames/classNames';

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return <div className={classNames('', {}, [className])}>PROFILE</div>;
};

export default ProfilePage;
