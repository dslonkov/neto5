import React, {useState} from 'react';

const CollapseComp = ({ collapsedLabel = 'Свернуть', expandedLabel='Развернуть' }) => {

  const [col, setCol] = useState(false);

  const colSwitcher = () => {
    setCol(!col)
  }


  return (
    <div className='row'>
      <div className='btn-wrap'>
        <button className="btn" onClick={() => colSwitcher()}>
          { col ? expandedLabel : collapsedLabel}
        </button>
      </div>

      <div className={col ? 'collapseText open' : 'collapseText hidden'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus asperiores distinctio dolore, eligendi eum fugit incidunt laboriosam,
        optio sapiente sint soluta, sunt vel. Alias facere maiores nemo recusandae, saepe voluptatum.
      </div>
    </div>
  );
};

export default CollapseComp;
