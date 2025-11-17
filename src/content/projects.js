import valkyrie from 'images/valkyrie.jpg';
import librarytracker from 'images/library-tracker.png';
import librarybuddy from 'images/library-buddy.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

const projects = [
  {
    title: 'Valkyrie Training - Workout App',
    description:
      'A mystical workout tracking application with Firebase authentication and cloud sync. Log workout plans with set/rep and weight tracking, view progress graphs for progressive overload, and export data to PDF. Features include Google OAuth authentication, user-specific data isolation, rest timers, and a beautiful Valkyrie-inspired UI with purple-gold gradients. Built with Claude.',
    skills: ['HTML5', 'CSS3', 'TypeScript', 'Firebase', 'Chart.js'],
    image: valkyrie,
    links: {
      github: 'https://github.com/catbilyeu/workout-buddy',
      preview: 'https://valkyrietraining.app/',
    },
  },
  {
    title: 'Library Tracker',
    description:
      'This is a browser-first app for tracking your personal library, built with Firebase cloud sync and Google login. You can add books by typing an ISBN or scanning a barcode, and it automatically pulls metadata from Open Library. It includes a shelves view with fast search (Fuse.js), import/export tools, hands-free motion control using MediaPipe Hands, and voice commands powered by the Web Speech API. I built it with Goose for a no keyboards, no mice hackathon. It is completely functional without traditional input. The webcam acts as a motion-based cursor, and you can navigate and manage your library entirely by voice.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'MediaPipe'],
    image: librarytracker,
    links: {
      github: 'https://github.com/catbilyeu/library-tracker',
      preview: 'https://catbilyeu.github.io/library-tracker/',
    },
  },
  {
    title: 'Library Buddy',
    description:
      'A magical hands-free library catalog with Firebase authentication, webcam barcode scanning, and hand gesture controls. Track your personal book collection with multi-user support, organize by series/author/genre, and manage lending with library cards. Features include MediaPipe Hands for cursor control, voice commands, OCR support with Tesseract.js, and multiple themes (Witchy, Colorful, Minimal, Bookshelf). Built with Claude.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Vite', 'MediaPipe', 'Tesseract.js'],
    image: librarybuddy,
    links: {
      github: 'https://github.com/catbilyeu/library-buddy',
      preview: 'https://catbilyeu.github.io/library-buddy/',
    },
  },
];

export default projects;
