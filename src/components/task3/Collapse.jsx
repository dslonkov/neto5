import React from 'react';
import CollapseComp from "./CollapseComp";

const Collapse = () => {

  const collapse = 'Правильно?'
  const expand = 'Или нет?'

  return (
    <div className='container'>
      <CollapseComp collapsedLabel={collapse} expandedLabel={expand} />
    </div>
  );
};

export default Collapse;
