import type { Ref } from 'vue';
declare type UseScrollParams = {
    overlay: Ref<Element | undefined>;
    content: Ref<Element | undefined>;
    contentActiveClass: string;
    fullscreen: boolean;
    contentFullscreenClass: string;
};
interface UseScrollReturnType {
    disableScroll: () => void;
    enableScroll: () => void;
}
declare type UseScroll = (params: UseScrollParams) => UseScrollReturnType;
export declare const useScroll: UseScroll;
export {};
//# sourceMappingURL=scroll.d.ts.map