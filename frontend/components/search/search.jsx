import React from 'react';
import HostMapContainer from '../hosts_map/hosts_map_container';
import HostIndexContainer from '../hosts/host_index_container';

class Search extends React.Component {
  constructor(props) {

    super(props);
    // this.hosts = hosts
  }

  render() {
    return (
      <div className='search-page-module'>
        <div className='search-page-hosts'>
          <HostIndexContainer />
        </div>
      </div>
    );
  }
}

export default Search;
