import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './style';

type HeaderCategoryProps = {
  index: number;
  items: { title: string, link: string, onClick?: Function }[];
}

function Navigation(props: HeaderCategoryProps) {
  const { index, items } = props;
  const history = useHistory();
  const headers = document.querySelectorAll('.header_category');

  const renderNavItem = () => {
    return items.map(({ title, link, onClick }, i) => {
      return (
        <Styled.Li
          key={'navItem' + i}
          className='bold'
          left={(headers[index] as HTMLElement).offsetLeft}
          onClick={() => {
            history.push(link);
            onClick && onClick();
          }}
        >
          {title}
        </Styled.Li>
      );
    });
  };

  return (
    <Styled.Ul className={'navigation'}>
      {renderNavItem()}
    </Styled.Ul>
  );
}

export default Navigation;
