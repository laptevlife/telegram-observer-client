import PageLayout from '../../components/Layout/PageLayout';
import s from './index.module.scss';
import V from '../../assets/img/V.svg';
import telegram from '../../assets/img/telegram.svg';
import tw from '../../assets/img/tw.svg';
import cn from 'classnames';
import Modal from '../../components/Modal';
import { useState } from 'react';
import Button from '../../components/Button';

const EarnPage = () => {
  const [modalOpen, setOpenModal] = useState(false);
  return (
    <PageLayout>
      <div className={s.userProfileImage}>
        <img src={V} alt="" />
      </div>
      <div className={s.userName}>Earn VIRALS</div>
      <div className={s.profileDescription}>
        Earn even more Virals for for completing tasks
      </div>

      <div className={s.headline}>ONBOARDING</div>
      <div className={s.linksBlock}>
        <div className={cn(s.box)}>
          <img src={telegram} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.thirdRow}>
              <div className={s.count}>+200</div>
              <img className={s.v} src={V} alt="" />
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Go
          </div>
        </div>
        <div className={cn(s.box)}>
          <img src={tw} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.firstRow}>description</div>
            <div className={s.thirdRow}>
              <div className={s.count}>+200</div>
              <img className={s.v} src={V} alt="" />
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Go
          </div>
        </div>
      </div>
      <div className={s.headline}>DAILY</div>
      <div className={s.linksBlock}>
        <div className={cn(s.box)}>
          <img src={telegram} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.thirdRow}>
              <div className={s.count}>+200</div>
              <img className={s.v} src={V} alt="" />
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Go
          </div>
        </div>
        <div className={cn(s.box)}>
          <img src={tw} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.firstRow}>description</div>
            <div className={s.thirdRow}>
              <div className={s.count}>+200</div>
              <img className={s.v} src={V} alt="" />
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Go
          </div>
        </div>
      </div>
      <div className={s.headline}>SPECIAL</div>
      <div className={s.linksBlock}>
        <div className={cn(s.box)}>
          <img src={telegram} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.thirdRow}>
              <div className={s.count}>+200</div>
              <img className={s.v} src={V} alt="" />
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Go
          </div>
        </div>
        <div className={cn(s.box)}>
          <img src={tw} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}>Add your Ton wallet</div>
            <div className={s.firstRow}>description</div>
            <div className={s.thirdRow}>
              <div className={s.count}>+200</div>
              <img className={s.v} src={V} alt="" />
            </div>
          </div>
          <div className={s.go} onClick={() => setOpenModal(true)}>
            Go
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} closeModal={() => setOpenModal(false)}>
        <div className={s.imgBlock}>
          <img src={telegram} className={s.statImg} alt="" />
          <div className={s.thirdRow}>
            <div className={s.count}>+200</div>
            <img className={s.v} src={V} alt="" />
          </div>
        </div>
        <div className={s.profileDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          consequatur
        </div>
        <Button className={s.goBtn}>
          <span>Go</span>
        </Button>
        <Button className={s.checkBtn}>
          <span>Check task</span>
        </Button>
      </Modal>
      <div style={{ height: '100px' }}> </div>
    </PageLayout>
  );
};

export default EarnPage;
