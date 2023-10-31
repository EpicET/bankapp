import React, { createContext, useState, useEffect } from "react";
import api from "../../api/axiosConfig";

export const UserContext = createContext();

export const UserContextProvider = ({ userData, children }) => {
  const [user, setUser] = useState({
    userID: userData.userID,
    password: userData.password,
    accList: [],
  });

  useEffect(() => {
    const getUser = () => {
      api
        .get(`/api/v1/user/${user.userID}`)
        .then((response) => {
          setUser(response.data);
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getUser();
  }, [userData.userID]);

  const contextValue = {
    user,
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
