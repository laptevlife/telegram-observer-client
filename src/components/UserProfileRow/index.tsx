import React, { useEffect } from 'react';
import s from './index.module.scss';
import cn from 'classnames';
import { ArrowTopBold, ViralBlueIcon } from '../svg/svgComponents';
import img from '../../assets/img/testImg.jpg';
import AddIcon from '@mui/icons-material/Add';
import { mainApi } from '../../api';
import { useAppSelector } from '../../hooks/redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { IChat } from '../../models';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '../../Router/router.constant';
import useNavigateUtils from '../../hooks/useNavigateUtils';

const ContentRow = ({ i, isEditAction, userChats, keyword, onClick }: any) => {
  const chat = i;
  console.log('chat', chat.id);

  const [addChat] = mainApi.useAddUserChatMutation();
  const [deleteChat] = mainApi.useDeleteUserChatMutation();
  const [deleteKeyWord] = mainApi.useDeleteKeyWordMutation();

  const { goTo, paramsId } = useNavigateUtils();

  const { user } = useAppSelector((state) => state.userReducer);
  console.log('user', user);

  // const picture = () => {
  //   try {
  //     const chat = i;
  //     if (chat.photo && chat.photo.strippedThumb) {
  //       const photoBuffer = Buffer.from(chat.photo.strippedThumb.data);
  //       const base64Image = photoBuffer.toString('base64');
  //       const imageUrl = `data:image/jpeg;base64,${base64Image}`;

  //       // Теперь вы можете использовать imageUrl для отображения изображения
  //       console.log(imageUrl);
  //     } else {
  //       console.log('У этого чата нет фотографии.');
  //     }
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // };
  // useEffect(() => {
  //   picture();
  // }, [i]);

  const include = userChats?.find((i: IChat) => i.chatId == chat.id);
  console.log('userChats', userChats);
  console.log('include', include);
  console.log('user', user);

  const addUserChat = async () => {
    await addChat({ userId: user?.userId, body: chat });
  };
  const deleteUserChat = async () => {
    await deleteChat({ userId: user?.userId, chatId: +chat?.id });
  };
  const deleteChatKeyWord = async () => {
    await deleteKeyWord({
      userId: user?.userId,
      chatId: paramsId,
      keywordId: keyword?.id,
    });
  };

  return (
    <div
      onClick={onClick}
      className={cn(s.profileStatItem, {
        [s.isEditAction]: true,
      })}
    >
      <div className={s.userStatWrapper}>
        {/* <div className={s.userImg}>
          {!keyword && <img src={i?.photo} alt="Chat Photo" />}
        </div> */}
        <div className={s.profileStatItemLeft}>
          <div className={s.userInfo}>
            {!keyword && (
              <div className={s.userName}>
                {i?.title}
                <span className={s.you}> {i.participantsCount}</span>
              </div>
            )}

            <div className={s.userStat}>
              {/* <ViralBlueIcon /> */}
              <span>{keyword ? i?.keyword : i?.username}</span>
            </div>
          </div>
        </div>
        <div className={s.profileStatRight}>
          <>
            {/* <div className={cn(s.number, s.numberisEditAction)}>
                {i.participantsCount}
              </div> */}

            {!keyword && isEditAction && (
              <div
                className={s.click}
                onClick={() => goTo(ERoutes.EDIT + chat.id)}
              >
                <EditIcon />
              </div>
            )}
            {/* <div className={s.number}>{'qq'}</div> */}
            <div
              className={s.click}
              onClick={(e) => {
                e.stopPropagation();
                isEditAction
                  ? keyword
                    ? deleteChatKeyWord()
                    : deleteUserChat()
                  : !include && addUserChat();
              }}
            >
              {/* <ArrowTopBold /> */}

              {isEditAction ? (
                <DeleteForeverIcon />
              ) : include ? (
                <DoneIcon />
              ) : (
                <AddIcon />
              )}
            </div>
          </>

          {/* <div className={s.number}>4</div> */}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
