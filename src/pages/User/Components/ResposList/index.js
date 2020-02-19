import React from 'react';
import PropTypes from 'prop-types';

const ResposList = props => {

  const { userDataRepos } = props;

  return (
    <>
    {userDataRepos ? (
      <ul>
      {userDataRepos.map(respos => (
          <li key={respos.id}>
            <a href={respos.url}>{respos.name}</a>
            <p>{respos.language}</p>
            <p>{respos.open_issues}</p>
          </li>
      )
      )}
      </ul>
    ) : null}
    </>     
  );
}

ResposList.propTypes = {
  userDataRepos: PropTypes.arrayOf(PropTypes.object)
};

export default ResposList;
