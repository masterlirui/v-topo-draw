<template>
    <div id="app">
        <VTopoDraw :graphData="[]"></VTopoDraw>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            shapeList: [
                {
                    shape: 'Rect',
                    options: {
                        width: 50,
                        height: 10,
                        attrs: {
                            label: {
                                text: '母线',
                                fill: '#888',
                                fontSize: 12,
                                fontWeight: 600,
                                refY: '150%',
                                textVerticalAnchor: 'top',
                            },
                            body: {
                                stroke: '#ff0000',
                                strokeWidth: 1,
                                fill: '#ff0000',
                            },
                        },
                        data: {},
                    },
                    type: 'comm',
                },
            ],
        }
    },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
}
</style>
