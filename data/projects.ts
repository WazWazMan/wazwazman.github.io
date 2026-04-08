export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

// TODO: add logos
export const projects: Project[] = [
  {
    title: 'CPP-Codelens',
    description:
      'A VSCode extension that adds CodeLens to C++ files.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/WazWazMan/CPP-Codelens',
    slug: 'cpp-codelens',
  },
  {
    title: 'SmartRoomProject',
    description:
      'A full-stack, open-source DIY smart home hub with custom-built endpoint devices.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/WazWazMan/SmartRoomProject',
    slug: 'smartroomproject',
  },
  {
    title: 'HellTML',
    description:
      'A chaotic frontend framework built in Python that forces you to write HTML and CSS entirely in YAML.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/WazWazMan/HellTML',
    slug: 'helltmp',
  }
];
