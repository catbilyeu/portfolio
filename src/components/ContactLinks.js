import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:catherinebilyeu@gmail.com"
        >
          catherinebilyeu@gmail.com
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/catherine-bilyeu"
        >
          LinkedIn
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/catbilyeu"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://catherinebilyeu.hashnode.dev/"
        >
          Hashnode
        </a>
      </span>
    </div>
  );
};

export default ContactLinks;
