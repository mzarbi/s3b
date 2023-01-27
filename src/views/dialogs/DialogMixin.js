import {computed} from 'vue'

export default {
    setup(props, {emit}) {
        const dialogState = computed({
            get() {
                return props.modelValue
            },

            set(value) {
                emit('update:modelValue', value)
            },
        })

        return {
            dialogState,
        }
    },
    okClicked() {
        this.accessProp('onOk')();
        this.closeDialog();
    },
    cancelClicked() {
        this.accessProp('onCancel')()
        this.closeDialog();
    },
    closeDialog() {
        this.dialogState = false;
    }
    , accessProp(propName) {
        return {
            computed: {
                mixinComputed() {
                    return this[propName];
                }
            }
        };
    }
}