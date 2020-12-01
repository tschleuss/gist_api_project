import style from './styles';

const TypeBadge = ({ name, color }) => {
  return <span style={style.root}>{name}</span>
};

export default TypeBadge;