<template>
    <GDialog v-model="dialogState" :max-width="width" persistent scrollable>
        <div class="dialog">
            <div class="actions">
                <h2>{{title}}</h2>
            </div>
            <div class="content">
                <p>
                    {{message}}
                </p>
                <slot></slot>
            </div>

            <div class="actions">
                <div v-if="showSpinner" class="loader" style="display:inline-block;vertical-align: middle;margin-right: 10px;"></div>
                <button
                        class="btn btn--contained"
                        @click="okClicked()"
                        style="background-color: #98ec2d; margin-right: 10px;"
                >
                    {{okLabel}}
                </button>
                <button
                        class="btn btn--outline-gray"
                        @click="cancelClicked()"
                        style="background-color: #ecc52d"
                >
                    {{cancelLabel}}
                </button>
            </div>
        </div>
    </GDialog>
</template>

<script>
    import {computed} from 'vue'
    import * as utils from '@/utils/axios_utils';

    export default {
        name: "ConfirmDialog.vue",
        components: [
        ],
        data(){
          return {
              showSpinner: false
          }  ;
        },
        props: {
            modelValue: {
                type: Boolean,
                default: false,
            },
            okLabel: {
                type: String,
                default: "Ok",
            },
            cancelLabel: {
                type: String,
                default: "Cancel",
            },
            request:{
              type: String,
              default: "get"
            },
            route:{
                type: String,
                required: true,
            },
            payload:{
                type: Object,
                default: null
            },
            onOk: {
                type: Function,
                default: null,
            },
            onCancel: {
                type: Function,
                default: null,
            },
            title: {
                type: String,
                default: "",
                required: true,
            },
            message: {
                type: String,
                default: "",
                required: true,
            },
            width: {
                type: String,
                default: "800",
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
        methods:{
            okClicked() {
                this.showSpinner = true;
                if(this.request == "get"){
                    utils.get(this.route,(resp) =>{
                        this.onOk(resp)
                        this.closeDialog();
                    })
                }

                if(this.request == "post"){
                    utils.get(this.route,this.payload,(resp) =>{
                        this.onOk(resp)
                        this.closeDialog();
                    })
                }
            },

            cancelClicked(){
                this.onCancel()
                this.closeDialog();
            },
            closeDialog(){
                this.dialogState = false;
            },
        }
    }
</script>

<style scoped>
    .dialog {
        color: #000;
        display: flex;
        flex-direction: column;
    }

    .content {
        padding: 0px 20px;
        overflow: auto;
    }

    .actions {
        padding: 10px;
    }

    .btn{
        margin-bottom:0rem;
    }




    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid rgb(152, 236, 45);
        width: 50px;
        height: 50px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

</style>