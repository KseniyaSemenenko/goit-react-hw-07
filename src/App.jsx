import ContactForm from '../src/components/ContactForm/ContactForm';
import SearchBox from '../src/components/SearchBox/SearchBox';
import ContactList from '../src/components/ContactList/ContactList';


const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList  />
    </div>
  );
};

export default App;
