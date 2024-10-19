import PageLayout from '../../components/Layout/PageLayout';
// import { useAppSelector } from '../../hooks/redux';
// import s from './index.module.scss';
// import img from '../../assets/img/testImg.jpg';
import Profile from './Profile';

const ProfilePage = () => {
  // const { user } = useAppSelector((state) => state.userReducer);

  return (
    <PageLayout>
      <Profile />
      <div style={{ height: '100px' }}> </div>
    </PageLayout>
  );
};

export default ProfilePage;
