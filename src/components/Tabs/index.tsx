import React, { useState } from 'react';
import s from './index.module.scss';
import cn from 'classnames';
import PageLayout from '../Layout/PageLayout';

import UserProfileRow from '../UserProfileRow';

const Tabs = ({ data }: any) => {
  console.log('data', data);

  const tabsArray = [
    {
      title: 'TODAY',
      key: 0,
    },
    {
      title: 'MONTHLY',
      key: 0,
    },
    {
      title: 'ALL TIME',
      key: 0,
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className={s.tabsWrapper}>
      <PageLayout>
        <div className={s.tabsHead}>
          {tabsArray.map((i, index) => {
            return (
              <div
                className={cn(s.tabItem, {
                  [s.tabItemActive]: index === active,
                })}
                onClick={() => setActive(index)}
              >
                {i.title}
              </div>
            );
          })}
        </div>
      </PageLayout>
      <div className={s.hr} />
      <div className={s.tabsContentWrapper}>
        {data?.length > 0 &&
          data?.map((i: any) => {
            return <UserProfileRow i={i} />;
          })}
      </div>
    </div>
  );
};

export default Tabs;
