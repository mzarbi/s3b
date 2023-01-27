declare const _default: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}>;
export default _default;
//# sourceMappingURL=GDialogOverlay.vue.d.ts.map