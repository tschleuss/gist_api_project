import { memo } from 'react';
import style from './styles';

const TypeBadge = ({ name }) => {
  return <span style={style.root}>{name}</span>
};

export default memo(TypeBadge);