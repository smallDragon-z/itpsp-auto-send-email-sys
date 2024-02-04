import React from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/store';

const Home = () => {
  const menuList = useSelector((state: RootState) => state.menuList.data);

  return (
    <div>
      {menuList.map((item, i) => (
        <div key={i}>{item.label}</div>
      ))}
    </div>
  );
};
export default Home;
