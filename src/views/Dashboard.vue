<template>
    <div class="py-4 container-fluid">
        <h1>Dashboard</h1>

        <input v-model="f1" placeholder="f1" />
        <input v-model="f2" placeholder="f2" />
        <p>{{name}}</p>
        <sample-form v-model="name" />
        <p
                v-for="(message, idx) in messages"
                :key="idx"
        >{{ message }}</p>
        <div class="col-6 text-end">
            <soft-button color="success" size="sm" variant="outline" @click="onOpen">
                View All
            </soft-button>


            <info-dialog v-model="dialogState">
                <p v-for="i in 10" :key="i">
                    Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Voluptatum voluptas laboriosam
                    voluptate ex consequuntur corporis, commodi animi
                    architecto quidem fugiat.
                </p>
            </info-dialog>
            <soft-button color="success" size="sm" variant="outline" @click="dialogState = true">
                View All
            </soft-button>
        </div>
    </div>
</template>
<script>
    import SoftButton from "@/components/SoftButton.vue";
    import {inject, ref} from 'vue'
    import {dialogInjectionKey} from '../ccmp/gdialog/index';
    import ConfirmDialog from "./dialogs/ConfirmDialog";
    import InfoDialog from "./dialogs/InfoDialog";
    import SampleForm from "./SampleForm";

    let sseClient;
    export default {
        name: "dashboard-default",
        data() {
            return {
                messages: [],
                f1: "F1",
                f2: "F2",
                f3: "F3",
                f4: "F4",
                name: "Jithil"
            };
        },
        components: {
            SoftButton,InfoDialog,SampleForm
        },
        setup() {
            const $dialog = inject(dialogInjectionKey);
            const dialogState = ref(false);

            const onOpen = () => {
                $dialog.addDialog({
                    component: ConfirmDialog,
                    props: {
                        title: 'Hello Zied',
                        message: 'Are you sure you want to .. ?',
                        route: "sample",
                        // eslint-disable-next-line no-unused-vars
                        onOk: (resp) =>{
                            alert(JSON.stringify(resp));
                        },
                        onCancel: () =>{

                        }
                    },
                });
            };
            return {
                onOpen, dialogState
            };
        },

        mounted() {
            sseClient = this.$sse.create({
                url: 'http://127.0.0.1:5000/listen',
                format: 'plain',
                withCredentials: true,
                polyfill: true,
            });

            // Catch any errors (ie. lost connections, etc.)
            sseClient.on('error', (e) => {
                console.error('lost connection or failed to parse!', e);

                // If this error is due to an unexpected disconnection, EventSource will
                // automatically attempt to reconnect indefinitely. You will _not_ need to
                // re-add your handlers.
            });

            // Handle messages without a specific event
            sseClient.on('message', this.handleMessage);

            // Handle messages without a specific event
            sseClient.on('notification', this.handleNotification);

            sseClient.connect()
                // eslint-disable-next-line no-unused-vars
                .then(sse => {
                    console.log('We\'re connected!');

                    // Unsubscribes from event-less messages after 7 seconds
                    setTimeout(() => {
                        sseClient.off('message', this.handleMessage);
                        console.log('Stopped listening to event-less messages!');
                    }, 70000);
                })
                .catch((err) => {
                    // When this error is caught, it means the initial connection to the
                    // events server failed.  No automatic attempts to reconnect will be made.
                    console.error('Failed to connect to server', err);
                });
        },
        methods: {

            // eslint-disable-next-line no-unused-vars
            handleMessage(message, lastEventId) {
                this.$notify({
                    title: "Important message",
                    text: "Hello user!",
                });
                this.messages.push(message)
                //alert('Received a message w/o an event!' + message + lastEventId);
            },
            // eslint-disable-next-line no-unused-vars
            handleNotification(message, lastEventId) {

                this.messages.push('Notification' + message)
                //alert('Received a message w/o an event!' + message + lastEventId);
            },
        },
        beforeUnmount() {
            // Make sure to close the connection with the events server
            // when the component is destroyed, or we'll have ghost connections!
            sseClient.disconnect();

            // Alternatively, we could have added the `sse: { cleanup: true }` option to our component,
            // and the SSEManager would have automatically disconnected during beforeDestroy.
        },
    };
</script>
