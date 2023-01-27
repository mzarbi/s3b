import type { Ref } from 'vue';
declare type UseLazyActivationFunc = (baseState: Ref<boolean>) => {
    /**
     * determine if `baseState' was `true` at least once
     */
    activatedOnce: Ref<boolean>;
    /**
     * proxy value of baseState.
     */
    active: Ref<boolean>;
};
/**
 * make first activation lazy: `activatedOnce` changes immediately,
 * `active` changes on `nextTick`
 */
export declare const useLazyActivation: UseLazyActivationFunc;
export {};
//# sourceMappingURL=lazyActivation.d.ts.map