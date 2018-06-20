import React from 'react';
import Link from '../components/Link';
import { visibilityFilters } from '../constants';

const Footer = () => (
  <p>
    Show: <Link filter={visibilityFilters.SHOW_ALL}>All</Link>
    {', '}
    <Link filter={visibilityFilters.SHOW_ACTIVE}>Active</Link>
    {', '}
    <Link filter={visibilityFilters.SHOW_COMPLETED}>Completed</Link>
  </p>
);

export default Footer;
