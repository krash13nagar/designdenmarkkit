/**
 * @author:  sandeep.gupta1@timesinternet.in
 * @desc: entry  point  to  render Denmark UI components  based on environment
 */
import './muiclasssetup';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { Input, User } from './components/common';

interface AppComponentProps {
  element: HTMLElement;
  callbackNgFn?: () => void | null;
  reqObj?: object;
}

let renderApplication = null;

/**
 * Below code need to run only for react Local project in watch mode
 */
console.log('=============>>>> React MODE:   ', process.env.REACT_APP_MODE);
if (
  process.env.REACT_APP_MODE !== 'production' &&
  window.location.host !== 'denmark.local' &&
  window.location.host.match(/localhost/)
) {
  renderApplication = (props: AppComponentProps) => {
    const { element, reqObj = {}, callbackNgFn = null } = props;
    console.log('== Inside React Project: renderApplication ===', element);
    const root = createRoot(element);

    root.render(<App reqObj={reqObj} callbackNgFn={callbackNgFn} />);
  };
  console.log('Looks like we are in development mode!');
  let element = document.getElementById('root');
  renderApplication({ element });
}

var g = window || global;

(g as any)['_DEN_UI'] = {
  renderComponent: renderApplication,
  commonComponents: { Input, User },
};

export default g;
export * from './components';
