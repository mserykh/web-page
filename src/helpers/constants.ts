import { FactorInfo, NavigationLinkData } from './types';

export const navigationLinks: NavigationLinkData[] = [
  {
    href: 'hero',
    title: 'Home',
    offset: -150,
  },
  {
    href: 'about',
    title: 'About',
    offset: -150,
  },
  {
    href: 'factors',
    title: '12 Factors',
    offset: -150,
  },
  {
    href: 'quote',
    title: 'Random Quote',
    offset: -150,
  },
  {
    href: 'bonus',
    title: 'Bonus',
    offset: -150,
  },
];

export const factorsData: FactorInfo[] = [
  {
    id: 1,
    title: 'Codebase',
    description: 'One codebase tracked in revision control, many deploys',
  },
  {
    id: 2,
    title: 'Dependencies',
    description: 'Explicitly declare and isolate dependencies',
  },
  {
    id: 3,
    title: 'Config',
    description: 'Store config in the environment',
  },
  {
    id: 4,
    title: 'Backing services',
    description: 'Treat backing services as attached resources',
  },
  {
    id: 5,
    title: 'Build, release, run',
    description: 'Strictly separate build and run stages',
  },
  {
    id: 6,
    title: 'Processes',
    description: 'Execute the app as one or more stateless processes',
  },
  {
    id: 7,
    title: 'Port binding',
    description: 'Export services via port binding',
  },
  {
    id: 8,
    title: 'Concurrency',
    description: 'Scale out via the process model',
  },
  {
    id: 9,
    title: 'Disposability',
    description: 'Maximize robustness with fast startup and graceful shutdown',
  },
  {
    id: 10,
    title: 'Dev/prod parity',
    description:
      'Keep development, staging, and production as similar as possible',
  },
  {
    id: 11,
    title: 'Logs',
    description: 'Treat logs as event streams',
  },
  {
    id: 12,
    title: 'Admin processes',
    description: 'Run admin/management tasks as one-off processes',
  },
];

export const ENDPOINT =
  'https://programming-quotes-api.herokuapp.com/quotes/random';
