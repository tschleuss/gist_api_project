import style from './styles';

const ForkedBy = ({ fork }) => {

  return <li>
    <div style={style.root}>
      <span style={style.label}>forked by</span>
      <a style={style.link} href={fork.html_url} target="_blank" rel="noreferrer">
        <img style={style.userAvatar} src={fork.owner.avatar_url} width="30" height="30" alt={fork.owner.login}></img>
        <div style={style.username}>
          {fork.owner.login}
        </div>
      </a>
    </div>
  </li>
}

export default ForkedBy;