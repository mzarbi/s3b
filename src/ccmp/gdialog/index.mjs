import { ref, getCurrentInstance, watch, effectScope, onScopeDispose, computed, toRaw, nextTick, onMounted, onUnmounted, defineComponent, useCssVars, openBlock, createBlock, Transition, withCtx, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, renderSlot, resolveComponent, withDirectives, createElementVNode, createVNode, vShow, onBeforeUnmount, Fragment, normalizeProps, guardReactiveProps, Teleport, shallowReactive, reactive, inject, renderList, resolveDynamicComponent, mergeProps } from "vue";
var main = "";
const IN_BROWSER = typeof window !== "undefined";
function convertToUnit(str, unit = "px") {
  if (str == null || str === "")
    return void 0;
  else if (isNaN(+str))
    return String(str);
  else if (!isFinite(+str))
    return void 0;
  else
    return `${Number(str)}${unit}`;
}
const hasScrollbar = (el) => {
  if (!el || el.nodeType !== Node.ELEMENT_NODE)
    return false;
  const style = window.getComputedStyle(el);
  return ["auto", "scroll"].includes(style.overflowY) && el.scrollHeight > el.clientHeight;
};
const shouldScroll = (el, delta) => {
  if (el.scrollTop === 0 && delta < 0)
    return true;
  return el.scrollTop + el.clientHeight === el.scrollHeight && delta > 0;
};
const noScrollableParent = (event, content) => {
  const path = event.composedPath();
  const delta = event.deltaY;
  for (let index = 0; index < path.length; index++) {
    const el = path[index];
    if (el === document)
      return true;
    if (el === document.documentElement)
      return true;
    if (el === content)
      return true;
    if (hasScrollbar(el))
      return shouldScroll(el, delta);
  }
  return true;
};
const getScrollbarWidth = () => {
  const container = document.createElement("div");
  container.style.visibility = "hidden";
  container.style.overflow = "scroll";
  const inner = document.createElement("div");
  container.appendChild(inner);
  document.body.appendChild(container);
  const scrollbarWidth = container.offsetWidth - inner.offsetWidth;
  document.body.removeChild(container);
  return scrollbarWidth;
};
const stack = ref([]);
function useStack(isActive) {
  const vm = getCurrentInstance();
  let scope;
  watch(isActive, (val) => {
    if (val) {
      scope = effectScope();
      scope.run(() => {
        stack.value.push(vm);
        onScopeDispose(() => {
          const idx = stack.value.indexOf(vm);
          stack.value.splice(idx, 1);
        });
      });
    } else {
      scope == null ? void 0 : scope.stop();
    }
  }, { immediate: true });
  const isTop = computed(() => {
    return toRaw(stack.value[stack.value.length - 1]) === vm;
  });
  return {
    isTop
  };
}
const overlays = ref([]);
const MIN_Z_INDEX = 1e3;
function useOverlay(isActive) {
  const id = getCurrentInstance().uid;
  const zIndex = ref(0);
  watch(isActive, (value) => {
    if (value) {
      overlays.value.push(id);
      zIndex.value = MIN_Z_INDEX + (overlays.value.indexOf(id) + 1) * 2;
    } else {
      overlays.value = overlays.value.filter((x) => x !== id);
    }
  }, {
    immediate: true
  });
  return { zIndex };
}
const useLazyActivation = (baseState) => {
  const activatedOnce = ref(false);
  const active = ref(false);
  if (baseState.value) {
    activatedOnce.value = true;
    nextTick(() => {
      active.value = true;
    });
  }
  watch(baseState, (value) => {
    if (!activatedOnce.value) {
      activatedOnce.value = true;
      nextTick(() => {
        active.value = value;
      });
      return;
    }
    active.value = value;
  });
  return {
    activatedOnce,
    active
  };
};
const useScroll = ({
  overlay,
  content,
  contentActiveClass,
  fullscreen,
  contentFullscreenClass
}) => {
  if (!IN_BROWSER) {
    return {
      disableScroll: () => {
      },
      enableScroll: () => {
      }
    };
  }
  let disabled = false;
  let disableType;
  const eventListener = (event) => {
    if (event.target === overlay.value || event.target === document.body || noScrollableParent(event, content.value))
      event.preventDefault();
  };
  const scrollbarWidth = getScrollbarWidth();
  const zeroScrollBar = scrollbarWidth === 0;
  const disableScroll = () => {
    if (disabled)
      return;
    if (zeroScrollBar || fullscreen) {
      disableType = "byOverflow";
      document.documentElement.classList.add("overflow-y-hidden");
    } else {
      disableType = "byEvents";
      window.addEventListener("wheel", eventListener, {
        passive: false
      });
    }
    disabled = true;
  };
  const enableScroll = () => {
    if (!disabled)
      return;
    if (disableType === "byEvents") {
      window.removeEventListener("wheel", eventListener);
    } else if (disableType === "byOverflow") {
      const activeContentElements = document.getElementsByClassName(contentActiveClass);
      const activeFullscreenContentElements = document.getElementsByClassName(contentFullscreenClass);
      if (!zeroScrollBar && fullscreen && activeFullscreenContentElements.length === 1 || activeContentElements.length === 1)
        document.documentElement.classList.remove("overflow-y-hidden");
    }
    disabled = false;
  };
  return {
    disableScroll,
    enableScroll
  };
};
function useWindowEventListener(event, listener, options) {
  onMounted(() => {
    window.addEventListener(event, listener, options);
  });
  onUnmounted(() => {
    window.removeEventListener(event, listener);
  });
}
var GDialogOverlay_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$1 = defineComponent({
  name: "GDialogOverlay",
  props: {
    active: {
      type: Boolean,
      required: true
    },
    zIndex: {
      type: Number,
      required: true
    },
    background: {
      type: [Boolean, String],
      required: true
    },
    local: {
      type: Boolean,
      required: true
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const styles = computed(() => ({
      zIndex: props.zIndex - 1
    }));
    const activeProxy = ref(props.active);
    const deactivating = ref(false);
    watch(() => props.active, (value) => {
      deactivating.value = !value;
      if (value) {
        activeProxy.value = true;
        return;
      }
      nextTick(() => {
        activeProxy.value = false;
      });
    });
    const classes = computed(() => [
      "g-dialog-overlay",
      {
        "g-dialog-overlay--active": !deactivating.value,
        "g-dialog-overlay--local": props.local
      }
    ]);
    const computedBackground = computed(() => {
      if (typeof props.background === "string")
        return props.background;
      else if (props.background)
        return "var(--overlay-bg)";
      return "transparent";
    });
    const onClick = () => {
      emit("click");
    };
    return {
      activeProxy,
      styles,
      classes,
      computedBackground,
      onClick
    };
  }
});
const __injectCSSVars__$1 = () => {
  useCssVars((_ctx) => ({
    "6eaca59a": _ctx.computedBackground
  }));
};
const __setup__$1 = __default__$1.setup;
__default__$1.setup = __setup__$1 ? (props, ctx) => {
  __injectCSSVars__$1();
  return __setup__$1(props, ctx);
} : __injectCSSVars__$1;
const _sfc_main$4 = __default__$1;
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "fade" }, {
    default: withCtx(() => [
      _ctx.activeProxy ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.classes),
        style: normalizeStyle(_ctx.styles),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, null, 6)) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
var GDialogOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const useSizeStyle = (props) => {
  const sizeStyles = computed(() => ({
    maxWidth: props.maxWidth === "none" ? void 0 : convertToUnit(props.maxWidth),
    width: props.width === "auto" ? void 0 : convertToUnit(props.width),
    height: props.height === "auto" ? void 0 : convertToUnit(props.height)
  }));
  return {
    sizeStyles
  };
};
var GDialogContent_vue_vue_type_style_index_0_lang = "";
const __default__ = defineComponent({
  name: "GDialogContent",
  props: {
    background: {
      type: [Boolean, String],
      required: true
    },
    borderRadius: {
      type: [Boolean, Number, String],
      required: true
    },
    class: {
      type: String,
      required: true
    },
    depressed: {
      type: Boolean,
      required: true
    },
    fullscreen: Boolean,
    height: {
      type: [String, Number],
      required: true
    },
    maxWidth: {
      type: [String, Number],
      required: true
    },
    scrollable: {
      type: Boolean,
      required: true
    },
    width: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const { sizeStyles: styles } = useSizeStyle(props);
    const classes = computed(() => [
      "g-dialog-content",
      props.class,
      {
        "g-dialog-content--scrollable": props.scrollable,
        "g-dialog-content--depressed": props.depressed,
        "g-dialog-content--fullscreen": props.fullscreen
      }
    ]);
    const computedBackground = computed(() => {
      if (typeof props.background === "string")
        return props.background;
      else if (props.background)
        return "var(--content-bg)";
      return "transparent";
    });
    const computedBorderRadius = computed(() => {
      if (typeof props.borderRadius === "string")
        return convertToUnit(props.borderRadius);
      else if (props.borderRadius)
        return "var(--content-border-radius)";
      return "0";
    });
    return {
      styles,
      classes,
      computedBackground,
      computedBorderRadius
    };
  }
});
const __injectCSSVars__ = () => {
  useCssVars((_ctx) => ({
    "889a571a": _ctx.computedBackground,
    "023a843a": _ctx.computedBorderRadius
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _sfc_main$3 = __default__;
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var GDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var GDialogFrame_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = defineComponent({
  name: "GDialogFrame",
  components: {
    GDialogContent
  },
  inheritAttrs: false,
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
    zIndex: {
      type: Number,
      required: true
    },
    background: {
      type: [Boolean, String],
      required: true
    },
    borderRadius: {
      type: [Boolean, Number, String],
      required: true
    },
    contentClass: {
      type: String,
      required: true
    },
    depressed: {
      type: Boolean,
      required: true
    },
    fullscreen: {
      type: Boolean,
      required: true
    },
    height: {
      type: [String, Number],
      required: true
    },
    local: {
      type: Boolean,
      required: true
    },
    maxWidth: {
      type: [String, Number],
      required: true
    },
    scrollable: {
      type: Boolean,
      required: true
    },
    transition: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const frameElement = ref();
    const animateClick = () => {
      var _a, _b;
      (_b = (_a = frameElement.value) == null ? void 0 : _a.animate) == null ? void 0 : _b.call(_a, [
        { transformOrigin: "center" },
        { transform: "scale(1.03)" },
        { transformOrigin: "center" }
      ], {
        duration: 150,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
      });
    };
    const classes = computed(() => [
      "g-dialog-frame",
      {
        "g-dialog-frame--active": props.isActive,
        "g-dialog-frame--local": props.local
      }
    ]);
    const styles = computed(() => ({
      zIndex: props.zIndex
    }));
    return {
      frameElement,
      classes,
      styles,
      animateClick
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GDialogContent = resolveComponent("GDialogContent");
  return openBlock(), createBlock(Transition, { name: _ctx.transition }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        ref: "frameElement",
        class: normalizeClass(_ctx.classes),
        style: normalizeStyle(_ctx.styles)
      }, [
        createVNode(_component_GDialogContent, {
          class: normalizeClass(_ctx.contentClass),
          "max-width": _ctx.maxWidth,
          width: _ctx.width,
          height: _ctx.height,
          scrollable: _ctx.scrollable,
          depressed: _ctx.depressed,
          fullscreen: _ctx.fullscreen,
          background: _ctx.background,
          "border-radius": _ctx.borderRadius
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "max-width", "width", "height", "scrollable", "depressed", "fullscreen", "background", "border-radius"])
      ], 6), [
        [vShow, _ctx.isActive]
      ])
    ]),
    _: 3
  }, 8, ["name"]);
}
var GDialogFrame = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = defineComponent({
  name: "GDialog",
  components: {
    GDialogOverlay,
    GDialogFrame
  },
  inheritAttrs: false,
  props: {
    background: {
      type: [Boolean, String],
      default: true
    },
    borderRadius: {
      type: [Boolean, Number, String],
      default: true
    },
    contentClass: {
      type: String,
      default: ""
    },
    depressed: Boolean,
    fullscreen: Boolean,
    height: {
      type: [String, Number],
      default: "auto"
    },
    local: Boolean,
    maxWidth: {
      type: [String, Number],
      default: "none"
    },
    modelValue: Boolean,
    noClickAnimation: Boolean,
    overlayBackground: {
      type: [Boolean, String],
      default: true
    },
    persistent: Boolean,
    scrollable: Boolean,
    teleportTo: {
      type: String,
      default: "body"
    },
    disableTeleport: Boolean,
    transition: {
      type: String,
      default: "g-dialog-transition"
    },
    width: {
      type: [String, Number],
      default: "auto"
    },
    closeOnBack: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, { emit }) {
    const overlayComponent = ref(null);
    const frameComponent = ref(null);
    const overlayElement = computed(() => {
      var _a;
      return (_a = overlayComponent.value) == null ? void 0 : _a.$el;
    });
    const frameElement = computed(() => {
      var _a;
      return (_a = frameComponent.value) == null ? void 0 : _a.$el;
    });
    const scopedModelValue = ref(false);
    const { isTop } = useStack(scopedModelValue);
    if (IN_BROWSER && props.modelValue) {
      nextTick(() => {
        scopedModelValue.value = true;
      });
    }
    watch(() => props.modelValue, (val) => {
      scopedModelValue.value = val;
    });
    const onClose = () => {
      scopedModelValue.value = false;
      emit("update:modelValue", false);
    };
    const onOpen = () => {
      scopedModelValue.value = true;
      emit("update:modelValue", true);
    };
    const { activatedOnce, active: isActive } = useLazyActivation(scopedModelValue);
    const { zIndex } = useOverlay(isActive);
    const animateClick = () => {
      var _a;
      if (props.noClickAnimation)
        return;
      (_a = frameComponent.value) == null ? void 0 : _a.animateClick();
    };
    useWindowEventListener("keyup", (ev) => {
      if (ev.key === "Escape" && isTop.value) {
        if (!props.persistent)
          onClose();
        else
          animateClick();
      }
    }, { passive: true });
    const { enableScroll, disableScroll } = useScroll({
      overlay: overlayElement,
      content: frameElement,
      contentActiveClass: "g-dialog-frame--active",
      fullscreen: props.fullscreen,
      contentFullscreenClass: "g-dialog-frame--fullscreen"
    });
    watch(isActive, (active) => {
      if (props.local)
        return;
      if (active)
        disableScroll();
      else
        enableScroll();
    });
    onBeforeUnmount(() => {
      enableScroll();
    });
    const onClickOutside = () => {
      if (!props.persistent)
        onClose();
      else
        animateClick();
    };
    if (IN_BROWSER && props.closeOnBack) {
      const instace = getCurrentInstance();
      let currentDialogHash = `dialog-${instace.uid}`;
      if (window.location.hash)
        currentDialogHash = `${window.location.hash.slice(1)}-${currentDialogHash}`;
      const popstateListener = () => {
        if (window.location.hash.includes(currentDialogHash) || !scopedModelValue.value)
          return;
        onClose();
      };
      onMounted(() => {
        if (scopedModelValue.value)
          window.location.hash = currentDialogHash;
        window.addEventListener("popstate", popstateListener);
      });
      onUnmounted(() => {
        window.removeEventListener("popstate", popstateListener);
      });
      watch(scopedModelValue, (value) => {
        if (!value && window.location.hash.includes(currentDialogHash)) {
          window.history.back();
        } else if (value) {
          if (window.location.hash)
            currentDialogHash = `${window.location.hash.slice(1)}-${`dialog-${instace.uid}`}`;
          else
            currentDialogHash = `dialog-${instace.uid}`;
          window.location.hash = `#${currentDialogHash}`;
        }
      });
    }
    const activatorAttrs = {
      onClick() {
        onOpen();
      }
    };
    return {
      overlayComponent,
      frameComponent,
      activatedOnce,
      zIndex,
      isActive,
      activatorAttrs,
      onClickOutside,
      onClose
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GDialogOverlay = resolveComponent("GDialogOverlay");
  const _component_GDialogFrame = resolveComponent("GDialogFrame");
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "activator", normalizeProps(guardReactiveProps(_ctx.activatorAttrs))),
    _ctx.activatedOnce ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      (openBlock(), createBlock(Teleport, {
        to: _ctx.teleportTo,
        disabled: _ctx.local || _ctx.disableTeleport
      }, [
        !_ctx.fullscreen ? (openBlock(), createBlock(_component_GDialogOverlay, {
          key: 0,
          ref: "overlayComponent",
          active: _ctx.isActive,
          "z-index": _ctx.zIndex,
          background: _ctx.overlayBackground,
          local: _ctx.local,
          onClick: _ctx.onClickOutside
        }, null, 8, ["active", "z-index", "background", "local", "onClick"])) : createCommentVNode("", true)
      ], 8, ["to", "disabled"])),
      (openBlock(), createBlock(Teleport, {
        to: _ctx.teleportTo,
        disabled: _ctx.local || _ctx.disableTeleport
      }, [
        createVNode(_component_GDialogFrame, {
          ref: "frameComponent",
          "is-active": _ctx.isActive,
          "z-index": _ctx.zIndex,
          "max-width": _ctx.maxWidth,
          width: _ctx.width,
          height: _ctx.height,
          scrollable: _ctx.scrollable,
          transition: _ctx.transition,
          depressed: _ctx.depressed,
          fullscreen: _ctx.fullscreen,
          background: _ctx.background,
          "border-radius": _ctx.borderRadius,
          "content-class": _ctx.contentClass,
          local: _ctx.local,
          persistent: _ctx.persistent
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", { onClose: _ctx.onClose })
          ]),
          _: 3
        }, 8, ["is-active", "z-index", "max-width", "width", "height", "scrollable", "transition", "depressed", "fullscreen", "background", "border-radius", "content-class", "local", "persistent"])
      ], 8, ["to", "disabled"]))
    ], 64)) : createCommentVNode("", true)
  ], 64);
}
var GDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const dialogs = shallowReactive([]);
const errorLogger = {
  pluginIsNotInitialized() {
    console.error("The gitart-vue-dialog plugin is not initialized. Read how to solve: https://gitart-vue-dialog.gitart.org/guide/usage/plugin-usage.html#installation");
  }
};
const dialogInjectionKey = Symbol("GDialog");
const dialogInjectionFallback = {
  dialogs: [],
  addDialog: () => {
    errorLogger.pluginIsNotInitialized();
  },
  removeDialog: () => {
    errorLogger.pluginIsNotInitialized();
  }
};
const plugin = {
  install: (app, options) => {
    var _a, _b;
    const defaultCloseDelay = (_a = options == null ? void 0 : options.closeDelay) != null ? _a : 500;
    const defaultProps = (_b = options == null ? void 0 : options.props) != null ? _b : {};
    const $dialog = {
      dialogs,
      addDialog: ({ component, props }) => {
        dialogs.push({
          component,
          id: Date.now() + Math.random(),
          props: reactive({
            modelValue: true,
            ...defaultProps,
            ...props
          })
        });
      },
      removeDialog: (index, closeDelay) => {
        const dialog = dialogs[index];
        if (!dialog.props.modelValue)
          return;
        dialog.props.modelValue = false;
        setTimeout(() => {
          dialogs.splice(dialogs.indexOf(dialog), 1);
        }, closeDelay != null ? closeDelay : defaultCloseDelay);
      }
    };
    app.provide(dialogInjectionKey, $dialog);
    app.config.globalProperties.$dialog = $dialog;
  }
};
const _sfc_main = defineComponent({
  name: "GDialogRoot",
  setup() {
    const {
      dialogs: dialogs2,
      removeDialog
    } = inject(dialogInjectionKey, dialogInjectionFallback);
    if (dialogs2 === dialogInjectionFallback.dialogs)
      errorLogger.pluginIsNotInitialized();
    function onClose(index) {
      removeDialog(index);
    }
    return {
      dialogs: dialogs2,
      onClose
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dialogs, (dialog, index) => {
    return openBlock(), createBlock(resolveDynamicComponent(dialog.component), mergeProps({
      key: dialog.id
    }, dialog.props, {
      "onUpdate:modelValue": ($event) => _ctx.onClose(index)
    }), null, 16, ["onUpdate:modelValue"]);
  }), 128);
}
var GDialogRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { GDialog, GDialogRoot, dialogInjectionKey, plugin };
