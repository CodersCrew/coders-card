import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

export type DeveloperProfileGQL = {
  lastName: string;
  isFreelancer: boolean;
  firstName: string;
  email: string;
  phone?: string;
  country: string;
  city: string;
  avatar: {
    publicURL: string;
  };
  socialMedia: {
    facebook?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
  position: string;
  cv?: string;
};

type DeveloperProfile = DeveloperProfileGQL | null;

const Context = createContext<DeveloperProfile>(null);

const DeveloperProfileProvider = (props: PropsWithChildren<{ developerProfile: DeveloperProfileGQL }>) => {
  const [valueNavBar, setValueNavBar] = useState(0);

  return (
    <Context.Provider
      value={{
        developerProfile: props.developerProfile,
        valueNavBar,
        setValueNavBar: (currentProjectFilter) => setValueNavBar(currentProjectFilter),
      }}
      {...props}
    />
  );
};

export function useDeveloperProfile() {
  const { developerProfile, valueNavBar, setValueNavBar } = useContext<DeveloperProfile>(Context);
  // Non null assertion because the profile comes from markdown file
  // Also we will not have to check if profile is not null on every page
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  return { developerProfile, valueNavBar, setValueNavBar }!;
}

export default DeveloperProfileProvider;
