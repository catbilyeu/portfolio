const statements = [
  {
    input: 'Cat.location',
    return: '"Chattanooga, TN"',
  },
  {
    input: 'Cat.contact',
    return:
      '["<a href="mailto:catherinebilyeu@gmail.com">catherinebilyeu@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/catherine-bilyeu">LinkedIn</a>", "<a rel="noopener" href="https://github.com/catbilyeu">github</a>"]',
  },
  {
    input: 'Cat.resume',
    return:
      '"<a rel="noopener" href="/CatBilyeu.pdf" target="_blank">CatBilyeu.pdf</a>"',
  },
  {
    input: 'Cat.interests',
    return: '["design", "gaming", "training", "traveling"]',
  },
  {
    input: 'Cat.background',
    return:
      '"SysAdmin → DevOps → Manager, Platform Support → Builder"',
  },
  {
    input: 'Cat.languages',
    return: '["Typescript*", "Python*", "Bash"]<br />// *currently leveling up',
  },
];

export default statements;
