<template>
    <div id="stencil" />
</template>

<script>
import { Graph, Addon } from '@antv/x6'
import { shapeList } from './shape'
import { Shape } from '@antv/x6'
export default {
    components: {},
    props: {
        graph: {
            type: Graph,
            required: true,
        },
    },
    data() {
        return {
            stencil: null,
            shapes380V: [],
            shapes10kV: [],
            shapes35kV: [],
            shapesComm: [],
            shapes: [],
            shapeMap: {
                Rect: Shape.Rect,
                Circle: Shape.Circle,
                Path: Shape.Path,
                Image: Shape.Image,
                TextBlock: Shape.TextBlock,
            },
        }
    },
    mounted() {
        this.initStencil()
        this.hidePorts()
    },
    computed: {
        stencilGraphHeight() {
            return document.getElementById('stencil').clientHeight - 113
        },
    },
    methods: {
        /* 初始化 Stencil */
        initStencil() {
            this.stencil = new Addon.Stencil({
                title: '图元选择',
                target: this.graph,
                search: (cell, keyword) => {
                    if (keyword) {
                        return cell.attr('label/text').includes(keyword)
                    }
                    return true
                },
                placeholder: '输入图元形状',
                notFoundText: '找不到该图元',
                collapsable: true,
                stencilGraphWidth: 220,
                // stencilGraphHeight: this.stencilGraphHeight,
                // stencilGraphHeight: 800,
                groups: [
                    {
                        name: 'comm',
                        title: '图元库',
                        graphHeight: shapeList.length * 60,
                        collapsed: false,
                    },
                    // {
                    //     name: '380V',
                    //     title: '380V图元',
                    //     graphHeight: 240,
                    //     collapsed: false,
                    // },
                    // {
                    //     name: '10kV',
                    //     title: '10kV图元',
                    //     graphHeight: 240,
                    //     collapsed: false,
                    // },
                    // {
                    //     name: '35kV',
                    //     title: '35kV图元',
                    //     graphHeight: 550,
                    //     collapsed: false,
                    // },
                ],
                layoutOptions: {
                    resizeToFit: false,
                    marginY: 0,
                    rowHeight: 100,
                },
            })
            this.renderNodeForStencil()

            document
                .getElementById('stencil')
                .appendChild(this.stencil.container)
        },
        /* 自定义Node节点放入 Stencil */
        renderNodeForStencil() {
            let shapeArray = []
            if (this.$attrs.shapeList) {
                shapeArray = this.$attrs.shapeList
            } else {
                shapeArray = shapeList
            }

            const shapeListLength = shapeArray.length
            for (let index = 0; index < shapeListLength; index++) {
                const currentShape = shapeArray[index]
                /* 判断是外界传入的图元 */
                let Shape = null
                if (this.$attrs.shapeList) {
                    Shape = this.shapeMap[currentShape.shape]
                } else {
                    Shape = currentShape.shape
                }
                const options = currentShape.options
                const shape = new Shape(options)
                this.shapes.push(shape)
            }

            this.stencil.load(this.shapes, 'comm')
        },
        hidePorts() {
            const stencil = document.getElementById('stencil')
            const ports = stencil && stencil.querySelectorAll('.x6-port-body')
            for (let i = 0, len = ports.length; i < len; i = i + 1) {
                ports[i].style.visibility = 'hidden'
            }
        },
    },
}
</script>
<style lang="scss">
</style>
