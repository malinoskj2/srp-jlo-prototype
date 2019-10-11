<template>

    <div id="home">

        <div id="section-a">
            <div class="top-section">
                <h1>{{topSection.primaryText}}</h1>
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
    #section-a {
        padding: 8rem 0 6rem 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    h1 {
        color: black;
        line-height: 4rem;
        font-size: 4rem;
        word-wrap: break-word;
        font-family: 'Karla', sans-serif;
        padding-bottom: 1rem;
    }

    h2 {
        color: rgba(0, 0, 0, .8);
        padding-bottom: 1rem;
        max-width: 80%;
    }

    .top-section {
        max-width: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    #section-b {
        min-height: 200px;
        background-color: #F5F4F2;
    }

    #features {
        display: grid;
        grid-template-columns: .5fr 1fr 1fr 1fr .5fr;
    }

</style>
