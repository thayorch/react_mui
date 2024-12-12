import Link from '@mui/material/Link';

function Contact({ contacts }) {
  return (
      <div className="contacts">
        {contacts.map((contactData) => (
          <Link target="_blank" key={contactData.id} href={contactData.url}>
            {contactData.icon}
          </Link>
        ))}
    
      </div>
  );
}

export default Contact;
