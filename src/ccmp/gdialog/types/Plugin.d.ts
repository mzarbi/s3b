// @ts-ignore
import type { Component, InjectionKey, ShallowUnwrapRef } from 'vue';
export interface IDialogItem {
    component: ShallowUnwrapRef<Component>;
    id: number;
    props: {
        modelValue: boolean;
    };
}
declare type DialogAddMethod = <T>(params: {
    component: Component;
    props?: Omit<T, 'modelValue'> | undefined;
}) => void;
declare type DialogRemoveMethod = (index: number, closeDelay?: number) => void;
interface IDialogMethods {
    addDialog: DialogAddMethod;
    removeDialog: DialogRemoveMethod;
}
export interface IDialog extends IDialogMethods {
    dialogs: IDialogItem[];
}
export declare type DialogInjectionKey = InjectionKey<IDialog>;
export {};
//# sourceMappingURL=Plugin.d.ts.map