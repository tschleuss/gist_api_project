import { useMemo } from 'react';
import style from './styles';
import TypeBadge from '../TypeBadge';
import ForkedBy from '../ForkedBy';

const GistListItem = ({ gist }) => {

  const getTags = useMemo(() => {
    const files = Object.values(gist.files);
    return [...files.reduce((acc, file) => {
      acc.add(file.type);
      return acc;
    }, new Set())];
  }, [gist.files]);

  return <li>
    <div style={style.root}>
      <img style={style.userAvatar} src={gist.owner.avatar_url} width="30" height="30" alt={gist.owner.login}></img>
      <div style={style.gistDetails}>
        <div style={style.description}>
          {gist.description || Object.keys(gist.files)[0]}
        </div>
        <div style={style.tags}>
          {getTags.map((type, index) => <TypeBadge key={index} name={type} />)}
        </div>
        <div style={style.forks}>
          {gist.forks.slice(Math.max(gist.forks.length - 3, 0)).map(fork => <ForkedBy key={fork.id} fork={fork} />)}
        </div>
      </div>
    </div>
  </li>
};

export default GistListItem;