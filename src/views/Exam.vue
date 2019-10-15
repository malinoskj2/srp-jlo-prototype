<template>
<div id="exam">
    <va-button @click="startRecord" string="primary" size="md" >
        <div>Start Recording</div>
    </va-button>
    <va-button @click="stopRecord" string="primary" size="md" >
        <div>Stop Recording</div>
    </va-button>
</div>
</template>

<script>
    export default {
        name: "Exam",
        data () {
            return {
                recorder: null,
                audio: []
            }
        },
        mounted() {
            this.initRecorder();
        },
        methods: {
            initRecorder() {

                const mediaAvailable = stream => {
                    console.log('Obtained audio stream')
                    this.recorder = new MediaRecorder(stream, { mimeType: 'audio/ogg'})
                    this.recorder.ondataavailable = ((e) => this.audio.push(e.data))
                };

                const mediaUnavailable = error => {
                  console.log(`Failed to obtain audio stream: ${error}`)
                };

                navigator.mediaDevices.getUserMedia({audio:true})
                    .then(mediaAvailable, mediaUnavailable);

            },
            startRecord () {
                console.log('Recording Audio.');
                this.recorder.start()
            },
            stopRecord () {
                console.log('Stopped Recording.');
                this.recorder.stop();
                console.log(this.audio);
            }
        }
    }
</script>

<style scoped>
    #exam {
        margin-top: 240px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    h1 {
        font-size: 128px;
    }
</style>
