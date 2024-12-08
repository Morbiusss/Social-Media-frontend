import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [name, setName] = useState("Sakshi Agarwaal");
  const [bio, setBio] = useState("Just someone who loves designing, sketching, and finding beauty in the little things 💕");

  return (
    <ProfileContext.Provider value={{ name, bio, setName, setBio }}>
      {children}
    </ProfileContext.Provider>
  );
};
