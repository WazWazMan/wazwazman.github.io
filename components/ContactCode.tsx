import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'bogachevsky.com',
    href: 'https://bogachevsky.com',
  },
  {
    social: 'email',
    link: 'daniel.bogachevsky@gmail.com',
    href: 'mailto:daniel.bogachevsky@gmail.com',
  },
  {
    social: 'github',
    link: 'WazWazMan',
    href: 'https://github.com/WazWazMan',
  },
  {
    social: 'linkedin',
    link: 'Daniel Bogachevsky',
    href: 'https://www.linkedin.com/in/daniel-bogachevsky/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
