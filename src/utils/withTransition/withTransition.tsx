import * as React from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './withTransition.css';

import { IRMainProps } from '../../types';

// TODO: The composition works correctly but the transition isn't.
export default function withTransition(Component: React.ComponentType<IRMainProps>) {
  function WithTransition(props: IRMainProps) {
    return (
      <TransitionGroup>
        <CSSTransition key={props.key} timeout={{enter: 300, exit: 300}} classNames='fade'>
          <Component {...props} />
        </CSSTransition>
      </TransitionGroup>
    );
  }
  return WithTransition;
}
