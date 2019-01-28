import * as _ from 'lodash';
import * as React from 'react';

import * as MobileDetect from 'mobile-detect';

import RAppBar from './components/RAppBar';
import { IRMainProps, IRState, View } from './types';
import RExperience from './views/RExperience';
import RHome from './views/RHome';
import RNotSupported from './views/RNotSupported';

import withRoot from './utils/withRoot';
import withTransition from './utils/withTransition';

const setView = (view: View): JSX.Element => {
  if (new MobileDetect(window.navigator.userAgent).mobile()) {
    return <RNotSupported msg='Mobile' />;
  } else if (window.navigator.userAgent.includes('MSIE')) {
    return <RNotSupported msg='Internet Explorer' />;
  }
  switch (view) {
    case View.Home:
      return <RHome />;
    case View.Experience:
      return <RExperience />;
  }
  return <h1>You should never see this </h1>;
};

const Main: React.SFC<IRMainProps> = (props: IRMainProps): JSX.Element => {
  const [state, setState] = React.useState({view: View.Home});

  return (
    <React.Fragment>
      <div>
        <RAppBar setView={(view: View) => setState({view})}/>
      </div>
      {setView(state.view)}
    </React.Fragment>
  );
};

export default withRoot(withTransition(Main));
