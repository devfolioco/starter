import React from 'react';
import Link from '../components/Link';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <p>
    Show: <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
    {', '}
    <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
    {', '}
    <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
  </p>
);

export default Footer;
