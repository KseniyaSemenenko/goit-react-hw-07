import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';

export default function ContactList() {
const selectContacts = useSelector((state) => state.contacts.items);
const selectNameFilter = useSelector(state => state.filters.name)

 const filteredContacts = selectContacts.filter(contact =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
    );
    
    
    return <ul className={css.contactsList}>
        {filteredContacts.map((contact) => (
            <li className={css.contactItem} key={contact.id}>
            <Contact name={contact.name} number={contact.number} id={contact.id} />
        </li>))}
        
        
    </ul>
}

