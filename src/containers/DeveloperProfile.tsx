import React, { createContext, PropsWithChildren, useContext } from 'react';

import { DeveloperProfileGQL } from '../components/DetailsCard/types';

type DeveloperProfile = DeveloperProfileGQL | null;

const Context = createContext<DeveloperProfile>(null);

const DeveloperProfileProvider = (props: PropsWithChildren<{ developerProfile: DeveloperProfileGQL }>) => {
  return <Context.Provider value={props.developerProfile} {...props} />;
};

export function useDeveloperProfile() {
  const developerProfile = useContext<DeveloperProfile>(Context);

  // Non null assertion because the profile comes from markdown file
  // Also we will not have to check if profile is not null on every page
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  return developerProfile!;
}

export default DeveloperProfileProvider;
