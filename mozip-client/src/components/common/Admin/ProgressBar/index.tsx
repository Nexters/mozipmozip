import React, {useCallback, Fragment} from 'react';
import './index.scss';


const getProgressNumber = (subPath: string) => {
  switch (subPath) {
    case 'intro':
      return 0;
    case 'common':
      return 1;
    case 'group':
      return 2;
    case 'result':
      return 3;
    default:
      throw new Error('Unhandled SubPath');
  }
};

const getProgressTitle = (param: string | number) => {
  if (param === 0 || param === 'intro') return '리쿠르트 소개';
  else if (param === 1 || param === 'common') return '공통 질문';
  else if (param === 2 || param === 'group') return '직군 별 질문';
  else return '최종 확인';
};
const divStyle = {background: 'black'};
const textStyle = {color: 'black'};

function ProgressBar(props: { subPath: string }) {
  const {subPath} = props;

  const drawProgressShape = useCallback((subPath: string) => {
    const arr = ['', '', '', ''];
    return arr.map((v, i) => {
      const targetIndex = getProgressNumber(subPath);
      if (i === 3) return <div className="pr_circle" key={i} style={targetIndex === 3 ? divStyle : undefined}/>;
      return (
        <Fragment key={i}>
          <div className="pr_circle" style={targetIndex === i ? divStyle : undefined}/>
          <div className="pr_line"/>
        </Fragment>
      );
    });
  }, [subPath]);

  const drawProgressText = useCallback((subPath: string) => {
    const arr = ['', '', '', ''];
    return arr.map((v, i) => {
      const targetIndex = getProgressNumber(subPath);
      const text = getProgressTitle(i);
      if (i === 3) return <div className="pr_text" key={i}
                               style={targetIndex === 3 ? textStyle : undefined}>{text}<br/>&nbsp;</div>;
      return (
        <div key={i}
             className="pr_text"
             style={targetIndex === i ? textStyle : undefined}>
          {text}<br/>작성</div>
      );
    });
  }, [subPath]);

  return (
    <div className="pr_layout">
      <div className="pr_left">{getProgressTitle(subPath)}</div>
      <div className="pr_right">
        <div className="pr_half">
          {drawProgressShape(subPath)}
        </div>
        <div className="pr_half">
          {drawProgressText(subPath)}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
