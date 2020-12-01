import { useState } from 'react';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import GistList from '../../components/GistList';
import api from '../../app/api/apiCore';

const UserGists = () => {

  const [userGists, setUserGists] = useState([]);

  const onSubmitSearch = async (term) => {
    try {
      setUserGists(await api.getGistsByUsername(term));
    } catch (error) {
      console.log(error);
      setUserGists([]);
    }
  };

  return (
    <div style={styles.root}>
      <header stule={styles.header}>
        <SearchBar placeholder="Search by git user" onSubmit={onSubmitSearch} />
      </header>
      <section>
        <GistList data={userGists} />
      </section>
    </div>
  )
}

export default UserGists;