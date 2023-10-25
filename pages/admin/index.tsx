import React from 'react';
import Link from 'next/link';

// Importacion de utilidades
import { dataCardMaster } from 'utils/generalConst';

// Importacion de componentes customizados
import Card from '@components/atoms/Card';
import Title from '@components/atoms/Title';
import Text from '@components/atoms/Text';

function MasterData() {
  return (
    <div className='page p-10'>
      <div className='page__card_master'>
        {dataCardMaster?.map(item => (
          <div key={item?.id}>
            <Link href={item?.path}>
              <Card extraClassNames='card__master card_type'>
                <Title text={item?.title} extraClassNames='card__title' />
                <Text
                  text={item?.description}
                  extraClassNames='card__master_text'
                />
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MasterData;
