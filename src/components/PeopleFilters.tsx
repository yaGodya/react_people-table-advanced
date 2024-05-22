import { Link, useLocation } from 'react-router-dom';

import CenturyFilter from './FilterBy/FilterByCountry'
import NameFilter from './FilterBy/FilterByName'
import SexFilter from './FilterBy/FilterBySex';

const PeopleFilters = () => {
  const location = useLocation();

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <SexFilter />

      <NameFilter />

      <CenturyFilter />

      <div className="panel-block">
        <Link
          className="button is-link is-outlined is-fullwidth"
          to={location.pathname}
        >
          Reset all filters
        </Link>
      </div>
    </nav>
  );
};

export default PeopleFilters;
