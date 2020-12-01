import { useMemo, memo } from 'react';
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

  const description = gist.description || Object.keys(gist.files)[0];
  const lastThreeForks = gist.forks.slice(Math.max(gist.forks.length - 3, 0));

  return <li>
    <div style={style.root}>
      <img style={style.userAvatar} src={gist.owner.avatar_url} width="30" height="30" alt={gist.owner.login}></img>
      <div style={style.gistDetails}>
        <a style={style.description} href={gist.html_url} target="_blank" rel="noreferrer">
          {description}
        </a>
        <div style={style.tags}>
          {getTags.map((type, index) => <TypeBadge key={index} name={type} />)}
        </div>
        <ol style={style.forks}>
          {lastThreeForks.map(fork => <ForkedBy key={fork.id} fork={fork} />)}
        </ol>
      </div>
    </div>
  </li>
};

export default memo(GistListItem);