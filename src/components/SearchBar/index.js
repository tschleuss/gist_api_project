import { useState } from 'react';
import style from './styles';

const SearchBar = ({
  placeholder,
  onSubmit = () => { }
}) => {

  const [text, setText] = useState('cl4u2');
  // cl4u2
  // quanghuyhh

  const onInputChange = (event) => {
    setText(event.target.value);
  }

  const onButtonClick = () => {
    onSubmit(text);
  };

  return (
    <div style={style.root}>
      <input type="text" style={style.searchInput} placeholder={placeholder} value={text} onChange={onInputChange} />
      <button type="submit" style={style.searchButton} onClick={onButtonClick}>
        Search
      </button>
    </div>
  )
};

export default SearchBar;