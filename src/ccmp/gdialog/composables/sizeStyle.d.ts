import type { ComputedRef } from 'vue';
export interface UseSizeStyleProps {
    maxWidth?: number | string;
    width?: number | string;
    height?: number | string;
}
declare type UseSizeStyleReturnType = {
    sizeStyles: ComputedRef<{
        maxWidth: string | undefined;
        width: string | undefined;
        height: string | undefined;
    }>;
};
export declare const useSizeStyle: (props: UseSizeStyleProps) => UseSizeStyleReturnType;
export {};
//# sourceMappingURL=sizeStyle.d.ts.map