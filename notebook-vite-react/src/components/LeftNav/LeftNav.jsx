import React from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.scss';

function LeftNav() {
  return (
    <div className='left-nav'>
      <div className='left-nav__avatar'>
        <img src='https://htwm623.github.io/head.png' alt='' />
      </div>

      <Link to='note'>
        <div className='left-nav__item'>
          <div className='left-nav__icon'>
            <img src='https://cn.vitejs.dev/logo.svg' alt='' />
          </div>
          <div>笔记</div>
        </div>
      </Link>

      <Link to='/photo'>
        <div className='left-nav__item'>
          <div className='left-nav__icon'>
            <img src='https://cn.vitejs.dev/logo.svg' alt='' />
          </div>
          <div>图片</div>
        </div>
      </Link>

      <Link to='/audio'>
      <div className='left-nav__item'>
        <div className='left-nav__icon'>
          <img src='https://cn.vitejs.dev/logo.svg' alt='' />
        </div>
        <div>音频</div>
      </div>
      </Link>

      <Link to='/star'>
        <div className='left-nav__item'>
          <div className='left-nav__icon'>
            <img src='https://cn.vitejs.dev/logo.svg' alt='' />
          </div>
          <div>星标</div>
        </div>
      </Link>
    </div>
  );
}

export default LeftNav;
