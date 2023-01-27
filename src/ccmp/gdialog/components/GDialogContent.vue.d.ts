declare const _default: import("vue").DefineComponent<{
    background: {
        type: (StringConstructor | BooleanConstructor)[];
        required: true;
    };
    borderRadius: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        required: true;
    };
    class: {
        type: StringConstructor;
        required: true;
    };
    depressed: {
        type: BooleanConstructor;
        required: true;
    };
    fullscreen: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    scrollable: {
        type: BooleanConstructor;
        required: true;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}, {
    styles: import("vue").ComputedRef<{
        maxWidth: string | undefined;
        width: string | undefined;
        height: string | undefined;
    }>;
    classes: import("vue").ComputedRef<(string | {
        'g-dialog-content--scrollable': boolean;
        'g-dialog-content--depressed': boolean;
        'g-dialog-content--fullscreen': boolean;
    })[]>;
    computedBackground: import("vue").ComputedRef<string>;
    computedBorderRadius: import("vue").ComputedRef<string | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    background: {
        type: (StringConstructor | BooleanConstructor)[];
        required: true;
    };
    borderRadius: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        required: true;
    };
    class: {
        type: StringConstructor;
        required: true;
    };
    depressed: {
        type: BooleanConstructor;
        required: true;
    };
    fullscreen: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    scrollable: {
        type: BooleanConstructor;
        required: true;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}>>, {
    fullscreen: boolean;
}>;
export default _default;
//# sourceMappingURL=GDialogContent.vue.d.ts.map