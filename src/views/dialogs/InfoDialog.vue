<template>
    <GDialog v-model="dialogState" max-width="800" persistent scrollable>
        <div class="dialog">
            <div class="actions">
                <h2>{{title}}</h2>
            </div>
            <div class="content">
                <slot></slot>
            </div>

            <div class="actions">
                <button
                        class="btn btn--outline-gray"
                        @click="dialogState = false"
                >
                    Close
                </button>
            </div>
        </div>
    </GDialog>
</template>

<script>
    import {computed} from 'vue'

    export default {
        name: "InfoDialog.vue",
        components: [
        ],

        props: {
            modelValue: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                default: "Title",
                required: false,
            },
            info: {
                type: String,
                required: true,
            },
        },

        emits: ['update:modelValue'],

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
    }
</script>

<style scoped>
    .dialog {
        color: #000;
        display: flex;
        flex-direction: column;
    }

    .content {
        padding: 30px 20px;
        overflow: auto;
    }

    .actions {
        padding: 10px;
        border-top: 1px solid rgb(179, 179, 179);
    }

    .btn{
        margin-bottom:0rem;
    }
</style>