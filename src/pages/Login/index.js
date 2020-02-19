import React, { useState } from "react";
import UserResponse from "../User/Components/UserResponse/index";
import { useHistory } from "react-router-dom";

import logo from "../../assets/git-logo.png";

export default function Login() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const url = `https://api.github.com/users/${userName}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUserData(data);
      });
    // history.push(`/user/${userName}`);
  }

  const changeUserName = () => setUserName(userName);

  return (
    <>
      {!userData ? (
        <section
          style={{
            margin: 300,
            height: 300,
            backgroundColor: "#fff",
            borderRadius: 10
          }}
        >
          <div
            style={{
              padding: 50,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img
              style={{ width: 100, height: 100 }}
              src={logo}
              alt="git-logo"
            />
            <form style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ marginTop: 10 }} htmlFor="username">
                  Pesquisar usuário no GitHub
                </label>
                <input
                  type="text"
                  value={userName}
                  style={{ marginTop: 10 }}
                  onChange={event => setUserName(event.target.value)}
                  id="username"
                  placeholder="Ex.:pedroguilhermesilva"
                />
                <button
                  style={{ marginTop: 10 }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  PESQUISAR
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <UserResponse
          userName={userName}
          changeUserName={changeUserName}
          userData={userData}
        ></UserResponse>
      )}
    </>
  );
}
