import styles from './styles';
import SearchBar from '../../components/SearchBar';
import GistList from '../../components/GistList';

const UserGists = () => {

  const onSubmitSearch = (term) => {
    console.log(term);
  };

  return (
    <div style={styles.root}>
      <header stule={styles.header}>
        <SearchBar placeholder="Search by git user" onSubmit={onSubmitSearch} />
      </header>
      <section>
        <GistList />
      </section>
    </div>
  )
}

export default UserGists;