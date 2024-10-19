import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';
import V from '../../assets/img/V.svg';
import Coin from '../../assets/img/Coin.svg';
import Coin2 from '../../assets/img/Group 24.svg';
import Coin3 from '../../assets/img/Group 25.svg';
import Top from '../../assets/img/Top.svg';
import personFace from '../../assets/img/personFace.svg';

import {
  First,
  Second,
  ViralBlueIcon,
  Third,
  GradientBg,
  ArrowRight,
  LockIcon,
  ShareArrowIcon,
  CopyIcon,
  StarIcon,
  ArrowCircleIcon,
  ArrowRightIcon,
} from '../../components/svg/svgComponents';
import collab from '../../assets/img/collab.svg';
import promote from '../../assets/img/promote.svg';
import PageLayout from '../../components/Layout/PageLayout';
import Tabs from '../../components/Tabs';
import UserProfileRow from '../../components/UserProfileRow';
// import { useAppSelector } from '../../hooks/redux';
import Modal from '../../components/Modal';
// import Button from '../../components/Button';
import Profile from '../ProfilePage/Profile';
import useNavigateUtils from '../../hooks/useNavigateUtils';
import { ERoutes } from '../../Router/router.constant';
import { mainApi } from '../../api';
import { useTheme } from '@mui/material/styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@mui/material';
import InputMui from '../../components/TextField';
import { useAppSelector } from '../../hooks/redux';
import { IChat, IChatKeyword } from '../../models';
import SearchIcon from '@mui/icons-material/Search';

const TopPage = () => {
  const [modalPromoteOpen, setOpenPromoteModal] = useState(false);
  const [chatInfoModal, setChatInfoModal] = useState<IChat>();
  const [modalPayWallOpen, setOpenModalPayWall] = useState(false);
  // const { tg } = useAppSelector((state) => state.userReducer);
  const theme = useTheme(); // Получаем текущую тему
  const { data } = mainApi.useGetUsersQuery({});

  const [findChats] = mainApi.useFindChatsMutation();

  const [foundedChats, setFoundedChats] = useState<IChat[]>();
  // const [step, setStep] = useState(1);
  // const [progress, setProgress] = useState(0);
  const { goTo } = useNavigateUtils();

  const { user } = useAppSelector((state) => state.userReducer);

  // const { data: userChats } = mainApi.useGetUserChatsQuery(user.id);

  console.log('USER', user);

  console.log('foundedChats', foundedChats);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Имя обязательно')
      .min(2, 'Имя должно содержать минимум 2 символа'),
    // email: Yup.string()
    //   .required('Электронная почта обязательна')
    //   .email('Неверный формат электронной почты'),
  });

  const [payVariant, setPayVariant] = useState(1);

  const submit = async (values: any) => {
    console.log('values', values);

    const res = await findChats(values).unwrap();

    setFoundedChats(res?.chats);
    console.log('RES', res);
  };

  const showKeywords = (chat: IChat) => {
    // setOpenModalPayWall(true);
    setChatInfoModal(chat);
  };

  return (
    <>
      <PageLayout>
        <Typography className={s.headline} variant="h5">
          My chats
        </Typography>

        <div className={s.greyPaper}>
          {user?.chats?.map((i: IChat) => {
            return (
              <UserProfileRow
                i={i}
                onClick={() => showKeywords(i)}
                key={i.id}
                isEditAction
              />
            );
          })}
        </div>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={validationSchema}
          onSubmit={submit}
        >
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <Form>
              <div className={s.inputForm}>
                <InputMui
                  fullWidth
                  margin="normal"
                  id="name"
                  name="name"
                  label="Имя"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={s.textField}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  color="primary" // Использует основной цвет из темы
                />
                <Button type="submit" className={s.searchBtn}>
                  <SearchIcon style={{ color: '#fff' }} />
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </PageLayout>
      <Typography variant="h5" className={s.headline}>
        Result
      </Typography>
      <div className={s.greyPaper}>
        {foundedChats?.map((i: IChat) => {
          return <UserProfileRow i={i} userChats={user?.chats} />;
        })}
      </div>
      <Modal
        isOpen={Boolean(chatInfoModal)}
        closeModal={() => setChatInfoModal(undefined)}
      >
        <>
          <div className={s.shareContent}>
            <div className={s.shareTitle}>{chatInfoModal?.title}</div>
            <div className={s.shareDescription}>{chatInfoModal?.username}</div>
          </div>
          {chatInfoModal &&
            chatInfoModal?.keywords?.map((i) => {
              return (
                <div className={s.linksBlock}>
                  <div className={cn(s.box, s.boxStat)}>{i.keyword}</div>
                </div>
              );
            })}
        </>
      </Modal>
      {/* <div
        className={s.greyPaper} 
      >
        <Tabs data={foundedChats} />
      </div>
      <div
        className={s.currentUserProfileRow}
        onClick={() => goTo(ERoutes.PROFILE)}
      >
        <UserProfileRow currentUser={true} />
      </div> */}
      {/* <Modal
        isOpen={modalPromoteOpen}
        closeModal={() => setOpenPromoteModal(false)}
      >
        <div className={s.topImg}>
          <img src={Top} alt="" />
          <div className={s.topPerson}>
            <div className={cn(s.rowBox)}>
              <img src={personFace} className={s.image} alt="" />
              <div className={s.rowContent}>
                <div className={s.topRow}>Test Name</div>
                <div className={s.underTopRow}>
                  <img className={s.v} src={V} alt="" />
                  <div className={s.count}>34,333,444</div>
                </div>
              </div>
              <ArrowCircleIcon
                style={{ marginLeft: 'auto', marginTop: '5px' }}
              />
            </div>
          </div>
        </div>
        <div className={s.shareContent}>
          <div className={s.shareTitle}>
            Share your profile to frens <br /> and promote yourself
          </div>
          <div className={s.shareDescription}>
            For every vote you receive, you earn <br /> 10 VIRALS
          </div>
          <div className={s.shareActions}>
            <Button className={s.shareBtn}>
              {' '}
              <span>Share</span>{' '}
              <span>
                <ShareArrowIcon />
              </span>
            </Button>
            <div className={s.copyLink}>
              <CopyIcon />{' '}
            </div>
          </div>
        </div>
      </Modal> */}

      {/* <Modal
        isOpen={modalPayWallOpen}
        closeModal={() => setOpenModalPayWall(false)}
      >
        <div className={s.shareContent}>
          <div className={s.shareTitle}>Don't want to wait 8 hours?</div>
          <div className={s.shareDescription}>
            You can buy votes for Telegram stars
          </div>
          <div className={s.payVariants}>
            <div className={cn(s.payVar)} onClick={() => setPayVariant(0)}>
              <div
                className={cn(s.variantBg, {
                  [s.variantBgActive]: payVariant === 0,
                })}
              ></div>
              <div className={s.payVarContent}>
                <div className={s.payVarContentIcon}>
                  <img src={Coin} style={{ marginTop: '5px' }} alt="" />
                </div>
                <div className={s.payVarContentTitle}>10 VOTES</div>
                <div className={s.payVarContentCount}>
                  <div className={s.star}>
                    <StarIcon />
                  </div>
                  <div className={s.count}>120,000</div>
                </div>
              </div>
            </div>
            <div className={cn(s.payVar)} onClick={() => setPayVariant(1)}>
              <div
                className={cn(s.variantBg, {
                  [s.variantBgActive]: payVariant === 1,
                })}
              ></div>
              <div className={s.payVarContent}>
                <div className={s.payVarContentIcon}>
                  <img src={Coin2} style={{ marginTop: '5px' }} alt="" />
                </div>
                <div className={s.payVarContentTitle}>20 VOTES</div>
                <div className={s.payVarContentCount}>
                  <div className={s.star}>
                    <StarIcon />
                  </div>
                  <div className={s.count}>220,000</div>
                </div>
              </div>
            </div>
            <div className={cn(s.payVar)} onClick={() => setPayVariant(2)}>
              <div
                className={cn(s.variantBg, {
                  [s.variantBgActive]: payVariant === 2,
                })}
              ></div>
              <div className={s.payVarContent}>
                <div className={s.payVarContentIcon}>
                  <img src={Coin3} alt="" />
                </div>
                <div className={s.payVarContentTitle}>50 VOTES</div>
                <div className={s.payVarContentCount}>
                  <div className={s.star}>
                    <StarIcon />
                  </div>
                  <div className={s.count}>340,000</div>
                </div>
              </div>
            </div>
          </div>
          <Button style={{ marginTop: '20px' }}>
            <span>Continue</span>
          </Button>
        </div>
      </Modal> */}
      <div style={{ height: '140px' }}> </div>
    </>
  );
};

export default TopPage;
