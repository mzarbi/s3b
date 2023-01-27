import { nextTick } from 'vue';
declare const _default: import("vue").DefineComponent<{
    background: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    borderRadius: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    contentClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * removes box-shadow for content
     */
    depressed: BooleanConstructor;
    fullscreen: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * enables local mode for the dialog.
     * dialog is fixed to first "position: relative;" parent
     */
    local: BooleanConstructor;
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    modelValue: BooleanConstructor;
    noClickAnimation: BooleanConstructor;
    overlayBackground: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    /**
     * clicking outside content will not close modal
     */
    persistent: BooleanConstructor;
    scrollable: BooleanConstructor;
    /**
     * CSS selector string or an actual DOM node where
     * where to teleport dialog when it is opened.
     */
    teleportTo: {
        type: StringConstructor;
        default: string;
    };
    /**
     * disables teleport.
     */
    disableTeleport: BooleanConstructor;
    transition: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * it true, the dialog will add hash to the url.
     * and will be closed on browser back button.
     */
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    overlayComponent: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{
            active: {
                type: BooleanConstructor;
                required: true;
            };
            zIndex: {
                type: NumberConstructor;
                required: true;
            };
            background: {
                type: (StringConstructor | BooleanConstructor)[];
                required: true;
            };
            local: {
                type: BooleanConstructor;
                required: true;
            };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            active: {
                type: BooleanConstructor;
                required: true;
            };
            zIndex: {
                type: NumberConstructor;
                required: true;
            };
            background: {
                type: (StringConstructor | BooleanConstructor)[];
                required: true;
            };
            local: {
                type: BooleanConstructor;
                required: true;
            };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
        }, {
            activeProxy: import("vue").Ref<boolean>;
            styles: import("vue").ComputedRef<{
                zIndex: number;
            }>;
            classes: import("vue").ComputedRef<(string | {
                'g-dialog-overlay--active': boolean;
                'g-dialog-overlay--local': boolean;
            })[]>;
            computedBackground: import("vue").ComputedRef<string>;
            onClick: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        active: {
            type: BooleanConstructor;
            required: true;
        };
        zIndex: {
            type: NumberConstructor;
            required: true;
        };
        background: {
            type: (StringConstructor | BooleanConstructor)[];
            required: true;
        };
        local: {
            type: BooleanConstructor;
            required: true;
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        activeProxy: import("vue").Ref<boolean>;
        styles: import("vue").ComputedRef<{
            zIndex: number;
        }>;
        classes: import("vue").ComputedRef<(string | {
            'g-dialog-overlay--active': boolean;
            'g-dialog-overlay--local': boolean;
        })[]>;
        computedBackground: import("vue").ComputedRef<string>;
        onClick: () => void;
    }> & {} & import("vue").ComponentCustomProperties) | null>;
    frameComponent: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{
            isActive: {
                type: BooleanConstructor;
                required: true;
            };
            zIndex: {
                type: NumberConstructor;
                required: true;
            };
            background: {
                type: (StringConstructor | BooleanConstructor)[];
                required: true;
            };
            borderRadius: {
                type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
                required: true;
            };
            contentClass: {
                type: StringConstructor;
                required: true;
            };
            depressed: {
                type: BooleanConstructor;
                required: true;
            };
            fullscreen: {
                type: BooleanConstructor;
                required: true;
            };
            height: {
                type: (StringConstructor | NumberConstructor)[];
                required: true;
            };
            local: {
                type: BooleanConstructor;
                required: true;
            };
            maxWidth: {
                type: (StringConstructor | NumberConstructor)[]; /**
                 * removes box-shadow for content
                 */
                required: true;
            };
            scrollable: {
                type: BooleanConstructor;
                required: true;
            };
            transition: {
                type: StringConstructor;
                required: true;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
                required: true;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            isActive: {
                type: BooleanConstructor;
                required: true;
            };
            zIndex: {
                type: NumberConstructor;
                required: true;
            };
            background: {
                type: (StringConstructor | BooleanConstructor)[];
                required: true;
            };
            borderRadius: {
                type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
                required: true;
            };
            contentClass: {
                type: StringConstructor;
                required: true;
            };
            depressed: {
                type: BooleanConstructor;
                required: true;
            };
            fullscreen: {
                type: BooleanConstructor;
                required: true;
            };
            height: {
                type: (StringConstructor | NumberConstructor)[];
                required: true;
            };
            local: {
                type: BooleanConstructor;
                required: true;
            };
            maxWidth: {
                type: (StringConstructor | NumberConstructor)[]; /**
                 * removes box-shadow for content
                 */
                required: true;
            };
            scrollable: {
                type: BooleanConstructor;
                required: true;
            };
            transition: {
                type: StringConstructor;
                required: true;
            };
            width: {
                type: (StringConstructor | NumberConstructor)[];
                required: true;
            };
        }>>, {
            frameElement: import("vue").Ref<Element | undefined>;
            classes: import("vue").ComputedRef<(string | {
                'g-dialog-frame--active': boolean;
                'g-dialog-frame--local': boolean;
            })[]>;
            styles: import("vue").ComputedRef<{
                zIndex: number;
            }>;
            animateClick: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        isActive: {
            type: BooleanConstructor;
            required: true;
        };
        zIndex: {
            type: NumberConstructor;
            required: true;
        };
        background: {
            type: (StringConstructor | BooleanConstructor)[];
            required: true;
        };
        borderRadius: {
            type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
            required: true;
        };
        contentClass: {
            type: StringConstructor;
            required: true;
        };
        depressed: {
            type: BooleanConstructor;
            required: true;
        };
        fullscreen: {
            type: BooleanConstructor;
            required: true;
        };
        height: {
            type: (StringConstructor | NumberConstructor)[];
            required: true;
        };
        local: {
            type: BooleanConstructor;
            required: true;
        };
        maxWidth: {
            type: (StringConstructor | NumberConstructor)[]; /**
             * removes box-shadow for content
             */
            required: true;
        };
        scrollable: {
            type: BooleanConstructor;
            required: true;
        };
        transition: {
            type: StringConstructor;
            required: true;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            required: true;
        };
    }>> & import("vue").ShallowUnwrapRef<{
        frameElement: import("vue").Ref<Element | undefined>;
        classes: import("vue").ComputedRef<(string | {
            'g-dialog-frame--active': boolean;
            'g-dialog-frame--local': boolean;
        })[]>;
        styles: import("vue").ComputedRef<{
            zIndex: number;
        }>;
        animateClick: () => void;
    }> & {} & import("vue").ComponentCustomProperties) | null>;
    activatedOnce: import("vue").Ref<boolean>;
    zIndex: import("vue").Ref<number>;
    isActive: import("vue").Ref<boolean>;
    activatorAttrs: {
        onClick(): void;
    };
    onClickOutside: () => void;
    onClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (val: boolean) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    background: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    borderRadius: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: boolean;
    };
    contentClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * removes box-shadow for content
     */
    depressed: BooleanConstructor;
    fullscreen: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * enables local mode for the dialog.
     * dialog is fixed to first "position: relative;" parent
     */
    local: BooleanConstructor;
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    modelValue: BooleanConstructor;
    noClickAnimation: BooleanConstructor;
    overlayBackground: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    /**
     * clicking outside content will not close modal
     */
    persistent: BooleanConstructor;
    scrollable: BooleanConstructor;
    /**
     * CSS selector string or an actual DOM node where
     * where to teleport dialog when it is opened.
     */
    teleportTo: {
        type: StringConstructor;
        default: string;
    };
    /**
     * disables teleport.
     */
    disableTeleport: BooleanConstructor;
    transition: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * it true, the dialog will add hash to the url.
     * and will be closed on browser back button.
     */
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
}, {
    fullscreen: boolean;
    background: string | boolean;
    local: boolean;
    borderRadius: string | number | boolean;
    depressed: boolean;
    height: string | number;
    maxWidth: string | number;
    scrollable: boolean;
    width: string | number;
    contentClass: string;
    transition: string;
    modelValue: boolean;
    noClickAnimation: boolean;
    overlayBackground: string | boolean;
    persistent: boolean;
    teleportTo: string;
    disableTeleport: boolean;
    closeOnBack: boolean;
}>;
export default _default;
//# sourceMappingURL=GDialog.vue.d.ts.map