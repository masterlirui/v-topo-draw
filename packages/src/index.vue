<template>
    <div class="topo-draw-wrap">
        <div class="tools">
            <el-radio-group v-model="lineType" size="mini" @change="changeEdgeType">
                <el-radio-button :label="1">直线</el-radio-button>
                <el-radio-button :label="2">曲线</el-radio-button>
                <el-radio-button :label="3">直角</el-radio-button>
            </el-radio-group>

            <div>
                <el-button type="default" @click="centerGraph" size="mini">居中显示</el-button>
                <el-button type="default" @click="clearGraph" size="mini">清除所有图元</el-button>
                <el-button type="primary" @click="saveGraphData" size="mini">保存数据</el-button>
            </div>
        </div>

        <div id="topo-container"></div>

        <ShapeType v-if="graph" :graph="graph" v-bind="$attrs"></ShapeType>

        <el-drawer :visible.sync="drawer" direction="rtl" :modal="false">
            <RightDrawer v-if="drawer" class="right_drawer" :drawerType="type" :nodeType="nodeType" :selectCell="selectCell" :graph="graph" @changeGridType="changeGridType"></RightDrawer>
        </el-drawer>
    </div>
</template>

<script>
import { Graph, Shape, FunctionExt } from '@antv/x6'
import RightDrawer from './RightDrawer.vue'
import ShapeType from './ShapeType.vue'
export default {
    name: 'VTopoDraw',
    components: { RightDrawer, ShapeType },
    props: {
        graphData: { type: Array, default: () => [] },
    },
    data() {
        return {
            graph: null,
            drawer: false,
            type: 'grid',
            selectCell: '',
            connectEdgeType: {
                // 连线方式
                connector: 'normal',
                router: {
                    name: '',
                },
            },
            nodeType: '',
            lineType: 1,
            timer: null,
            powerStationList: [],
            currentStation: {},
            /* 需要外部传入的自定义图元 */
            shapeList: [],
        }
    },
    watch: {
        graphData: {
            handler: function () {
                this.initGraphData()
            },
            deep: true,
        },
    },
    mounted() {
        /* 初始化画布环境 */
        this.initGrap()

        /* 绑定画布事件 */
        this.bindGrapEvent()

        /* 初始化画布数据 */
        this.initGraphData()

        /* 每间隔一段时间 就自动对图元数据进行保存 */
        this.timer = setInterval(() => {
            /* 保存缓存的数据 */
            this.saveCacheGraphData()
        }, 10000)

        this.$once('hook:beforeDestory', () => {
            this.timer && clearInterval(this.timer)
            this.graph.dispose()
        })
    },
    methods: {
        initGrap() {
            const _that = this
            this.graph = new Graph({
                container: document.getElementById('topo-container'),
                width: '100%',
                height: '100%',
                background: {
                    color: '#000000', // 设置画布背景颜色
                },
                /* 开启对齐线 */
                snapline: {
                    enabled: true,
                    // sharp: true,
                    tolerance: 1,
                },
                /* 网格设置 */
                grid: {
                    size: 8, // 网格大小 10px
                    visible: true, // 渲染网格背景
                },
                /* 控制拖拽 */
                panning: {
                    enabled: true,
                },
                /* 控制滚轮 */
                mousewheel: {
                    enabled: true,
                },
                /* 缩放节点 */
                resizing: {
                    // 调整节点宽高
                    enabled: true,
                    /* 等比例调整 */
                    // preserveAspectRatio: true,
                },
                /* 设置节点的角度调整 */
                rotating: {
                    enabled: true,
                },
                /* 开启撤销 */
                history: true,
                /* 开启点选和框选 */
                selecting: {
                    enabled: true,
                    rubberband: true, // 启用框选
                    modifiers: ['ctrl'],
                    strict: true,
                },
                /* 定制节点和边的交互行为 */
                interacting: {
                    edgeLabelMovable: true,
                },
                /* 开启剪贴板 */
                clipboard: true,
                /* 开启键盘快捷键监听 */
                keyboard: true,
                /* 配置全局的连线规则 */
                connecting: {
                    /* 连线时距离节点或者连接桩 50px 时会触发自动吸附 */
                    snap: true,
                    /* 是否允许连接到画布空白位置的点 */
                    allowBlank: true,
                    /* 链接在不同的链接桩上可以创建多条边 */
                    allowMulti: true,
                    allowLoop: false,
                    /* 拖动边时，是否高亮显示所有可用的连接桩或节点 */
                    highlight: true,
                    /* 链接到锚点，而不是节点外框 */
                    connectionPoint: {
                        name: 'anchor',
                    },
                    createEdge() {
                        return new Shape.Edge({
                            attrs: {
                                line: {
                                    stroke: '#ff0000',
                                    strokeWidth: 1,
                                    sourceMarker: null,
                                    targetMarker: null,
                                    strokeDasharray: 0,
                                    // style: {
                                    //   animation: 'ant-line 30s infinite linear'
                                    // }
                                },
                            },
                            labels: [
                                {
                                    attrs: {
                                        label: {
                                            text: '',
                                            fill: '#ff0000',
                                        },
                                        body: { fill: '#000000' },
                                    },
                                    // position: {
                                    //   distance: 0.5,
                                    //   offset: 0,
                                    //   angle: 0
                                    // }
                                },
                            ],
                            connector: _that.connectEdgeType.connector,
                            router: {
                                name: _that.connectEdgeType.router.name || '',
                            },
                            // zIndex: 0
                        })
                    },
                },
                highlighting: {
                    magnetAvailable: {
                        name: 'stroke',
                        args: {
                            padding: 4,
                            attrs: {
                                strokeWidth: 4,
                                stroke: '#6a6c8a',
                            },
                        },
                    },
                },
            })
            this.graph.zoom(0.75)
        },
        bindGrapEvent() {
            this.graph.on(
                'node:mouseenter',
                FunctionExt.debounce(() => {
                    this.showPorts(true)
                }),
                500
            )
            this.graph.on(
                'node:mouseleave',
                FunctionExt.debounce(() => {
                    this.showPorts(false)
                }),
                500
            )
            this.graph.on('node:mouseleave', () => {
                const container = document.getElementById('topo-container')
                const ports = container.querySelectorAll('.x6-port-body')
                this.showPorts(ports, false)
            })
            this.graph.on('blank:click', () => {
                this.type = 'grid'
            })
            this.graph.on('cell:dblclick', ({ cell }) => {
                this.type = cell.isNode() ? 'node' : 'edge'
                this.nodeType = cell.shape
                if (cell) this.selectCell = cell
                this.drawer = true
            })
            this.graph.on('selection:changed', (args) => {
                // const strokeColor = ''
                args.added.forEach((cell) => {
                    this.selectCell = cell
                    if (cell.isEdge()) {
                        this.type = 'edge'
                        this.drawer = true
                        // strokeColor = cell.attrs.line.stroke
                        // cell.isEdge() && cell.attr('line/stroke', '#fff') // 虚线蚂蚁线
                        // cell.isEdge() && cell.attr('line/strokeDasharray', 5) // 虚线蚂蚁线
                        cell.addTools([
                            {
                                name: 'vertices',
                                args: {
                                    padding: 4,
                                    attrs: {
                                        strokeWidth: 0.1,
                                        stroke: '#2d8cf0',
                                        fill: '#ffffff',
                                    },
                                },
                            },
                        ])
                    }
                })
                args.removed.forEach((cell) => {
                    // cell.isEdge() && cell.attr('line/strokeDasharray', 0) // 正常线
                    // cell.isEdge() && cell.attr('line/stroke', strokeColor) // 正常线
                    cell.removeTools()
                })
            })

            this.graph.bindKey('ctrl+c', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    this.graph.copy(cells)
                }
                return false
            })

            this.graph.bindKey('ctrl+v', () => {
                if (!this.graph.isClipboardEmpty()) {
                    const cells = this.graph.paste({ offset: 100 })
                    this.graph.cleanSelection()
                    this.graph.select(cells)
                }
                return false
            })

            this.graph.bindKey('up', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    cells.map((cell) => {
                        const { x, y } = cell.position()
                        cell.position(x, y - 1, { deep: true })
                    })
                }
                return false
            })

            this.graph.bindKey('down', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    cells.map((cell) => {
                        const { x, y } = cell.position()
                        cell.position(x, y + 1, { deep: true })
                    })
                }
                return false
            })

            this.graph.bindKey('left', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    cells.map((cell) => {
                        const { x, y } = cell.position()
                        cell.position(x - 1, y, { deep: true })
                    })
                }
                return false
            })

            this.graph.bindKey('right', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    cells.map((cell) => {
                        const { x, y } = cell.position()
                        cell.position(x + 1, y, { deep: true })
                    })
                }
                return false
            })

            this.graph.bindKey('delete', () => {
                const cells = this.graph.getSelectedCells()
                if (cells.length) {
                    this.graph.removeCells(cells)
                }
                return false
            })

            this.graph.bindKey('ctrl+z', () => {
                if (this.graph.canUndo()) {
                    this.graph.history.undo()
                }
                return false
            })
        },
        initGraphData() {
            this.graph.fromJSON(this.graphData)
            this.showPorts(false)
            this.graph.scaleContentToFit()
        },
        showPorts(show) {
            const container = document.getElementById('topo-container')
            const ports = container.querySelectorAll('.x6-port-body')
            for (let i = 0, len = ports.length; i < len; i = i + 1) {
                ports[i].style.visibility = show ? 'visible' : 'hidden'
            }
        },
        // 删除节点
        deleteNode() {
            const cell = this.graph.getSelectedCells()
            this.graph.removeCells(cell)
            this.type = 'grid'
        },
        // 改变边形状
        changeEdgeType(e) {
            this.lineType = e
            if (e === 1) {
                this.connectEdgeType = {
                    connector: 'normal',
                    router: { name: '' },
                }
            } else if (e === 2) {
                this.connectEdgeType = {
                    connector: 'smooth',
                    router: { name: '' },
                }
            } else {
                this.connectEdgeType = {
                    connector: 'normal',
                    router: { name: 'manhattan' },
                }
            }
        },
        changeGridType(type) {
            this.$set(this.grid, 'type', type)
            // this.grid.type = type
        },
        /* 图元居中展示 */
        centerGraph() {
            this.graph.scaleContentToFit()
        },
        /* 清楚画布所有图元 */
        clearGraph() {
            this.$confirm('您确认销毁所有图元?', '销毁提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'success',
            })
                .then(() => {
                    this.graph.clearCells()
                    this.$message.success('已清除画布!')
                })
                .catch(() => {})
        },
        saveGraphData() {
            const jsonData = this.graph.toJSON()
            this.$emit('saveGraphData', jsonData)
        },
        saveCacheGraphData() {
            const jsonData = this.graph.toJSON()
            this.$emit('saveCacheGraphData', jsonData)
        },
    },
}
</script>

<style lang="scss">
.topo-draw-wrap,
#topo-container {
    width: 100%;
    height: 100%;
    position: relative;
}
#topo-container {
    width: auto;
    margin-left: 220px;
}
#stencil {
    width: 220px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
}
.tools {
    position: absolute;
    top: 0;
    left: 220px;
    background: #fff;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > div {
        margin: 0 10px;
    }
}
.topo-draw-wrap .el-drawer__header {
    margin-bottom: 0;
}
</style>
