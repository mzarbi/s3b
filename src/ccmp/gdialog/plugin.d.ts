import type { Plugin } from 'vue';
import type { DialogInjectionKey, IDialog } from './types/Plugin';
export declare const errorLogger: {
    pluginIsNotInitialized(): void;
};
/**
 * Injection key
 *
 * Provides access to plugin methods and properties using the vue inject method
 *
 * https://gitart-vue-dialog.gitart.org/guide/usage/plugin-usage.html#usage
 *
 * @example Usage
 * const {
 *   dialogs,
 *   removeDialog,
 * } = inject(dialogInjectionKey)!
 */
export declare const dialogInjectionKey: DialogInjectionKey;
export declare const dialogInjectionFallback: IDialog;
/**
 * Plugin to install
 *
 * https://gitart-vue-dialog.gitart.org/guide/usage/plugin-usage.html - Documentation
 *
 * @example installation
 * import { plugin as dialogPlugin } from 'gitart-vue-dialog'
 * createApp(App)
 *  .use(dialogPlugin)
 *  .mount('#app')
 */
export declare const plugin: Plugin;
//# sourceMappingURL=plugin.d.ts.map