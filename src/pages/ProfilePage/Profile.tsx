import React, { useState } from 'react';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';
import V from '../../assets/img/V.svg';
import number from '../../assets/img/number.svg';
import telegram from '../../assets/img/telegram.svg';
import inst from '../../assets/img/inst.svg';
import X from '../../assets/img/x.svg';
import cn from 'classnames';
import {
  AddPersonIcon,
  ArrowRightIcon,
  ArrowTopBlack,
  LockIcon,
  ShareWhiteArrowIcon,
} from '../../components/svg/svgComponents';
import Button from '../../components/Button';
import { useAppSelector } from '../../hooks/redux';

const Profile = ({ currentUser = true, action }: any) => {
  const { user, tgUser } = useAppSelector((state) => state.userReducer);

  // const [lockedCollab, setLocked] = useState(true);
  return (
    <div className={s.profile}>
      <div className={s.userProfileImage}>
        <img src={img} alt="" />
      </div>
      <div className={s.userName}>{user?.userName}</div>
      <div className={s.profileDescription}>{JSON.stringify(tgUser)}</div>
      {/* <div className={s.collabRow}>
        <div
          className={cn(s.collabBtn, {
            [s.lockedCollab]: lockedCollab,
          })}
          onClick={() => setLocked((locked) => !locked)}
        >
          INVITE TO COLLAB
          {lockedCollab ? (
            <>
              <LockIcon style={{ marginLeft: '10px' }} />
              <div className={s.coming}>Coming soon</div>
            </>
          ) : (
            <AddPersonIcon style={{ marginLeft: '10px' }} />
          )}
        </div>
        <div className={s.icon}>
          <ShareWhiteArrowIcon />
        </div>
      </div> */}

      {/* <div className={s.boxRow}>
        <div className={cn(s.box, s.boxStat)}>
          <img src={V} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.firstRow}>VIRALS</div>
            <div className={s.secondRow}>123,456.789</div>
          </div>
        </div>
        <div className={cn(s.box, s.boxStat)}>
          <img src={number} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.firstRow}>Rank</div>
            <div className={s.secondRow}>#204,301</div>
          </div>
        </div>
      </div> */}

      <div className={s.linksBlock}>
        <div className={cn(s.box, s.boxStat)}>
          <img src={telegram} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}> Telegram</div>
            <div className={s.firstRow}>@link</div>
          </div>
          <ArrowRightIcon style={{ marginLeft: 'auto' }} />
        </div>
        <div className={cn(s.box, s.boxStat)}>
          <img src={inst} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}> Instagram</div>
            <div className={s.firstRow}>@link</div>
          </div>
          <ArrowRightIcon style={{ marginLeft: 'auto' }} />
        </div>
        <div className={cn(s.box, s.boxStat)}>
          <img src={X} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}>X(ex. Twitter)</div>
            <div className={s.firstRow}>@link</div>
          </div>
          <ArrowRightIcon style={{ marginLeft: 'auto' }} />
        </div>
      </div>
      {!currentUser && (
        <Button className={s.voteBtn} onClick={action}>
          {' '}
          <span>Vote</span>{' '}
          <span>
            <ArrowTopBlack />
          </span>
        </Button>
      )}
    </div>
  );
};

export default Profile;
