import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useIsMobile } from 'context/sidebar';
import { itemsMenuSidebar } from 'utils/generalConst';
import Imagen from '@components/atoms/Imagen';
import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

function Sidebar() {
  const { isMobile, expandSidebar, setExpandSidebar } = useIsMobile();
  const router = useRouter();
  const isTheRouter = router.asPath;

  const handleMouseOver = () => {
    setExpandSidebar(true);
  };

  const handleMouseOut = () => {
    setExpandSidebar(false);
  };

  const handleFocus = () => {
    setExpandSidebar(true);
  };

  const handleBlur = () => {
    setExpandSidebar(false);
  };

  return (
    <div
      className={`siderbar ${!isMobile ? 'block' : 'hidden'} ${
        expandSidebar ? 'px-5' : 'px-2'
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        className={`flex h-full flex-col justify-between ${
          expandSidebar ? 'items-start' : 'items-center'
        }`}
      >
        <div
          className={`relative h-14  ${
            expandSidebar ? ' w-full animate-slide-right' : 'w-14'
          }`}
        >
          <Imagen
            src={
              expandSidebar
                ? '/img/logos/logoPrevalentWhite.png'
                : '/img/logos/favicon.ico'
            }
            alt='Imagen Logotipo'
          />
        </div>
        <div>
          <ul>
            {itemsMenuSidebar?.map(item => (
              <Link href={item?.path} key={item?.id}>
                <li className='my-4 flex h-10 items-center gap-x-3'>
                  <span
                    className={`flex items-center justify-center rounded-md p-2 ${
                      isTheRouter === item?.path && expandSidebar === false
                        ? 'bg-colorCyan'
                        : 'bg-transparent'
                    }`}
                  >
                    <Icon
                      iconCategory={item?.iconCategory}
                      iconName={item?.iconName}
                    />
                  </span>
                  <span
                    className={
                      expandSidebar
                        ? 'block w-60 animate-slide-right'
                        : 'hidden'
                    }
                  >
                    <Text text={item?.title} />
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <Link href='/account'>
              <li className='my-4 flex h-10 items-center gap-x-3'>
                <span
                  className={`flex items-center justify-center rounded-md p-2 ${
                    isTheRouter === 'Help' && expandSidebar === false
                      ? 'colorCyan'
                      : 'bg-transparent'
                  }`}
                >
                  <Icon iconCategory='ph' iconName='gear' />
                </span>
                <span
                  className={
                    expandSidebar ? 'block w-40 animate-slide-right' : 'hidden'
                  }
                >
                  <Text text='Configuración' />
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
