import React from 'react';
import s from './index.module.scss';
import useNavigateUtils from '../../hooks/useNavigateUtils';
import { ERoutes } from '../../Router/router.constant';
import cn from 'classnames';
import {
  Lightning,
  RocketLaunch,
  Trophy,
  UsersThree,
  Vector,
} from '../svg/svgComponents';

const BottomMenu = () => {
  const { goTo, location } = useNavigateUtils();
  console.log('location', location);

  const menuItems = [
    {
      ref: ERoutes.EARN,
      icon: <Lightning />,
      name: 'Earn',
    },
    {
      ref: ERoutes.BOOSTS,
      icon: <RocketLaunch />,
      name: 'Boost',
    },
    {
      ref: ERoutes.MAIN,
      icon: <Trophy />,
      name: 'Main',
    },
    {
      ref: ERoutes.REF,
      icon: <UsersThree />,
      name: 'Frens',
    },
    {
      ref: ERoutes.PROFILE,
      icon: <Vector />,
      name: 'Profile',
    },
  ];

  return (
    <div className={s.bottomMenu}>
      {menuItems.map((i) => {
        const isActive = location.pathname === i.ref;
        return (
          <div
            className={cn(s.bottomMenuItem, {
              [s.activeItemFill]:
                isActive &&
                (i.ref === ERoutes.EARN || i.ref === ERoutes.PROFILE),
              [s.activeItemStroke]:
                isActive && i.ref !== ERoutes.EARN && i.ref !== ERoutes.PROFILE,
            })}
            onClick={() => goTo(i.ref)}
          >
            <div className={s.bottomMenuItemIcon}>{i.icon}</div>
            <div className={s.bottomMenuItemTitle}>{i.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomMenu;
