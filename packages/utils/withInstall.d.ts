import type { Plugin } from 'vue';
export declare type withInstallSFC<T> = T & Plugin;
declare const _default: <T>(comp: T) => withInstallSFC<T>;
export default _default;
