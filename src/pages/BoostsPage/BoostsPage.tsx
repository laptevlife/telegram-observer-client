import PageLayout from '../../components/Layout/PageLayout';
import s from './index.module.scss';
import V from '../../assets/img/V.svg';
import iconTest from '../../assets/img/image 513.svg';
import cn from 'classnames';
import Modal from '../../components/Modal';
import { useState } from 'react';
import Button from '../../components/Button';
import { StarIcon } from '../../components/svg/svgComponents';

const BoostsPage = () => {
  const [modalOpen, setOpenModal] = useState(false);
  return (
    <PageLayout>
      <div className={s.userProfileImage}>
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
      </Modal>
      <div style={{ height: '100px' }}> </div>
    </PageLayout>
  );
};

export default BoostsPage;
