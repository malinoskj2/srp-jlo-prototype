<template>

    <div id="home">

        <div id="section-a" class="flex-row-center">
            <div class="top-section">
                <h1 class="black-karla">{{topSection.primaryText}}</h1>
                <h2>{{topSection.secondaryText}}</h2>
                <va-button string="primary" size="lg" id="signup">
                    <div>Get Started</div>
                </va-button>
            </div>
            <div class="top-section">
                <img src="@/assets/charts_a.svg" width="500" height="500">
            </div>
        </div>

        <div id="section-b">

            <div id="section-b-text" class="flex-column">
                    <div id="section-b-primary" class="flex-row-center black-karla">{{features.primaryText}} </div>
                    <div class="flex-row-center" >
                        <div id="section-b-secondary" >{{features.secondaryText}}</div>
                    </div>
            </div>

            <div id="features">

                <div/>
                <feature v-for="(item, index) in features.items" :key="index"
                         :title="item.title"
                         :description="item.description">
                    <img :src="item.src" :width="features.imageWidth" :height="features.imageHeight">
                </feature>
                <div/>

            </div>
        </div>

    </div>

</template>

<script>
    import Feature from '@/components/Feature.vue'

    export default {
        name: 'home',
        data() {
            return {
                topSection: {
                    primaryText: "Harness the data within.",
                    secondaryText: "Easily administer the JLO test and derive deep, statistical insights from the results",
                },
                features: {
                    primaryText: "Why?",
                    secondaryText: "JLO test provides all the functionality of the traditional JLO test" +
                        ", enhanced with multiple latent data points.",
                    imageWidth: 200,
                    imageHeight: 200,
                    items: [
                        {
                            title: "Audio Transcription",
                            description: "Cloud powered audio transcription, for convenient test administration",
                            src: require('@/assets/speech.svg')
                        },
                        {
                            title: "Data Export",
                            description: "Export data for analysis",
                            src: require('@/assets/data_export.svg')
                        },
                        {
                            title: "Enhanced Test Results",
                            description: "Enhanced insight through latent data points",
                            src: require('@/assets/enhanced.svg')
                        },
                    ]
                }
            }
        },
        components: {
            Feature
        }
    }
</script>
<style scoped>
    .flex-row-center {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .black-karla {
        color: black;
        font-family: 'Karla', sans-serif;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    .flex-column > * {
        padding: 0 0 2rem 0;

    }

    #section-a {
        padding: 8rem 0 6rem 0;
    }

    h1 {
        line-height: 4rem;
        font-size: 4rem;
        word-wrap: break-word;
        padding-bottom: 1rem;
    }

    h2 {
        color: rgba(0, 0, 0, .8);
        padding-bottom: 1rem;
        max-width: 80%;
    }

    #section-b-text {
        margin: 0rem 0rem 5rem 0rem;
    }

    #section-b-primary {
        font-size: 3rem;
    }

    #section-b-secondary {
        font-family: 'Arial', sans-serif;
        font-size: 1rem;
        text-align: center;
        max-width: 30%;
    }

    .top-section {
        max-width: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    #section-b {
        padding: 5rem 0 5rem 0;
        min-height: 200px;
        background-color: #F5F4F2;
    }

    #features {
        display: grid;
        grid-template-columns: .5fr 1fr 1fr 1fr .5fr;
    }

</style>
