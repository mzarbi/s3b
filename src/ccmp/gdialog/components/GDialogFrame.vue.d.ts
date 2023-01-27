declare const _default: import("vue").DefineComponent<{
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
        type: (StringConstructor | NumberConstructor)[];
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
}, {
    frameElement: import("vue").Ref<Element | undefined>;
    classes: import("vue").ComputedRef<(string | {
        'g-dialog-frame--active': boolean;
        'g-dialog-frame--local': boolean;
    })[]>;
    styles: import("vue").ComputedRef<{
        zIndex: number;
    }>;
    animateClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: (StringConstructor | NumberConstructor)[];
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
}>>, {}>;
export default _default;
//# sourceMappingURL=GDialogFrame.vue.d.ts.map