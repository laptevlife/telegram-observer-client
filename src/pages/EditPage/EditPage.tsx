import PageLayout from '../../components/Layout/PageLayout';
import s from './index.module.scss';
import V from '../../assets/img/V.svg';
import iconTest from '../../assets/img/image 513.svg';
import cn from 'classnames';
import Modal from '../../components/Modal';
import { useState } from 'react';
import { StarIcon } from '../../components/svg/svgComponents';
import { Formik, Form } from 'formik';
// import { Form } from 'react-router-dom';
import InputMui from '../../components/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Button, Typography } from '@mui/material';
import { mainApi } from '../../api';
import { useAppSelector } from '../../hooks/redux';
import useNavigateUtils from '../../hooks/useNavigateUtils';
import ContentRow from '../../components/UserProfileRow';
import { IChat, IChatKeyword } from '../../models';

const EditPage = () => {
  // const [modalOpen, setOpenModal] = useState(false);

  // getChatKeywords

  const [createChatKeyWord] = mainApi.useCreateChatKeywordMutation();

  const { user } = useAppSelector((state) => state.userReducer);
  const { paramsId } = useNavigateUtils();
  const { data: chat } = mainApi.useGetChatKeywordsQuery(
    { userId: user?.id, chatId: paramsId },
    { skip: !user }
  );
  // console.log('keywords', keywords);

  const submit = async (values: any) => {
    console.log('values', values);
    createChatKeyWord({
      userId: user.id,
      chatId: paramsId,
      keyword: values.name,
    });

    // const res = await findChats(values).unwrap();

    // setFoundedChats(res?.chats);
    // console.log('RES', res);
  };
  return (
    <PageLayout>
      <Typography className={s.headline} variant="h5">
        {chat?.title}
      </Typography>
      <div className={s.greyPaper}>
        {chat?.keywords.map((i: IChatKeyword) => {
          return <ContentRow i={i} isEditAction keyword={i} />;
        })}
      </div>
      <Formik
        initialValues={{ name: '' }}
        // validationSchema={validationSchema}
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
      {/* <div className={s.userProfileImage}>
        <img src={V} alt="" />
      </div>
      <div className={s.userName}>BOOST your votes</div>
      <div className={s.profileDescription}>
        Get more votes to earn even more Virals
      </div>

      <div className={s.linksBlock}>
        <div className={cn(s.box)}>
          <div className={s.statImgPaper}>
            <img src={iconTest} className={s.statImg} alt="" />
          </div>
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.firstRow}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={s.thirdRow}>
              <div className={s.count}>200,000</div>
              <div className={s.v}>
                <StarIcon />
              </div>
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Buy
          </div>
        </div>
        <div className={cn(s.box)}>
          <div className={s.statImgPaper}>
            <img src={iconTest} className={s.statImg} alt="" />
          </div>
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.firstRow}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={s.thirdRow}>
              <div className={s.count}>200,000</div>
              <div className={s.v}>
                <StarIcon />
              </div>
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Buy
          </div>
        </div>
        <div className={cn(s.box)}>
          <div className={s.statImgPaper}>
            <img src={iconTest} className={s.statImg} alt="" />
          </div>
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.firstRow}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={s.thirdRow}>
              <div className={s.count}>200,000</div>
              <div className={s.v}>
                <StarIcon />
              </div>
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Buy
          </div>
        </div>
        <div className={cn(s.box)}>
          <div className={s.statImgPaper}>
            <img src={iconTest} className={s.statImg} alt="" />
          </div>
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.firstRow}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={s.thirdRow}>
              <div className={s.count}>200,000</div>
              <div className={s.v}>
                <StarIcon />
              </div>
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Buy
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} closeModal={() => setOpenModal(false)}>
        <div className={s.userName}>Confirmation</div>
        <div className={s.profileDescription}>
          Do you want to make a purchase?
        </div>
        <Button className={s.goBtn}>
          <span>Confirm And Pay</span>
          <div className={s.thirdRow}>
            <div className={s.count}>200,000</div>
            <div className={s.v}>
              <StarIcon />
            </div>
          </div>
        </Button>
      </Modal> */}
      <div style={{ height: '100px' }}> </div>
    </PageLayout>
  );
};

export default EditPage;
