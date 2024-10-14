/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: export all kinds of components(common, composite, etc.) here
 */

declare global {
    interface Window {
        AppSDK: any;

    }
}
import './global.scss';
export * from './common';
export * from './composite';
export * from './complex';
