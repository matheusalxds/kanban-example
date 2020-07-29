import React from 'react';

type CardStatusType = {
  status: boolean
}

const renderStatus = ({ status }: CardStatusType) => <p>{status}</p>;

const CardStatus = ({ status }: CardStatusType) => status ? <div>{renderStatus}</div> : <div />;

CardStatus.displayName = 'CardStatus';

export default CardStatus;
