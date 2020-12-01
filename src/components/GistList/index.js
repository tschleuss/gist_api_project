import GistListItem from '../GistListItem';
import style from './styles';

const GistList = ({ data = [] }) => {

  if(data.length === 0) {
    return <div>No gists to display</div>
  }
  
  return <ol style={style.root}>
    {data.map(gist => <GistListItem key={gist.id} gist={gist}/>)}
  </ol>;
}

export default GistList;