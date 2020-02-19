import React, { useState } from "react";
import PropTypes from "prop-types";
import ResposList from "../ResposList/index";
import { useRouteMatch } from "react-router-dom";

const UserResponse = props => {
  const { userData, userName, changeUserName } = props;
  const match = useRouteMatch();

  const [userDataRepos, setUserDataRepos] = useState(null);

  function handleSubmitRepos(event) {
    event.preventDefault();
    const url = `https://api.github.com/users/${match.params.id}/repos`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUserDataRepos(data);
      });
  }

  return (
    <>
      <section>
        <img src={userData.avatar_url} alt="git-logo" />
        <form>
          <label htmlFor="username">Não encontrado</label>
          <input
            type="text"
            value={userName}
            onChange={event => changeUserName(event.target.value)}
            id="username"
            placeholder="Ex.:pedroguilhermesilva"
          />
          <button type="submit" onClick={handleSubmitRepos}>
            Listar Repositórios
          </button>
        </form>
      </section>
      <ResposList userDataRepos={userDataRepos}></ResposList>
    </>
  );
};

UserResponse.propTypes = {
  userData: PropTypes.shape({
    avatar_url: PropTypes.string
  }),
  userName: PropTypes.string,
  changeUserName: PropTypes.func
};

export default UserResponse;
