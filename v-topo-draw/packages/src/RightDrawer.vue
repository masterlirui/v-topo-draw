<template>
    <div class="drawer_container">
        <div v-if="drawerType === 'node'">
            <div class="drawer_title">节点设置</div>
            <div class="drawer_wrap">
                <el-form label-width="110px" label-suffix="：">
                    <el-form-item label="节点背景" v-show="nodeType !== 'image' && nodeType !== 'path' && nodeType !== 'text-block'">
                        <el-color-picker v-model="drawerNode.fill" @change="changeFill" show-alpha></el-color-picker>
                    </el-form-item>
                    <el-form-item label="节点文本">
                        <el-input v-model="drawerNode.nodeText" @change="changeNodeText"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="节点X轴">
                        <el-input v-model="drawerNode.nodePositionX" @change="val => changeNodePosition(val, 'x')"></el-input>
                    </el-form-item>
                    <el-form-item label="节点Y轴">
                        <el-input v-model="drawerNode.nodePositionY" @change="val => changeNodePosition(val, 'y')"></el-input>
                    </el-form-item>-->
                    <el-form-item label="文本X轴" v-show="nodeType !== 'text-block'">
                        <el-input v-model="drawerNode.labelRefX" placeholder="文本X轴位置" @change="val => changeLabelPosition(val, 'X')"></el-input>
                    </el-form-item>
                    <el-form-item label="文本Y轴" v-show="nodeType !== 'text-block'">
                        <el-input v-model="drawerNode.labelRefY" placeholder="文本y轴位置" @change="val => changeLabelPosition(val, 'Y')"></el-input>
                    </el-form-item>
                    <el-form-item label="文本整体旋转" v-show="nodeType !== 'text-block'">
                        <el-input v-model="drawerNode.labelTransform" placeholder="文本整体旋转角度" @change="changeLabelTransform"></el-input>
                    </el-form-item>
                    <el-form-item label="文本独立旋转" v-show="nodeType !== 'text-block'">
                        <el-input v-model="drawerNode.labelRotate" placeholder="文本独立旋转角度" @change="changeLabelRotate"></el-input>
                    </el-form-item>
                    <el-form-item label="字体大小">
                        <el-slider v-model="drawerNode.fontSize" :min="0" :max="60" @change="changefontSize"></el-slider>
                    </el-form-item>
                    <el-form-item label="字体加粗">
                        <el-switch v-model="drawerNode.fontWeight" @change="changeFontWeight"></el-switch>
                    </el-form-item>
                    <el-form-item label="字体颜色">
                        <el-color-picker v-model="drawerNode.fontFill" @change="changeFontFill" show-alpha></el-color-picker>
                    </el-form-item>
                    <el-form-item label="边框宽度" v-show="nodeType !== 'text-block' && nodeType !== 'image' && nodeType !== 'path'">
                        <el-slider v-model="drawerNode.strokeWidth" :min="1" :max="10" @change="changeStrokeWidth"></el-slider>
                    </el-form-item>
                    <el-form-item label="边框颜色" v-show="nodeType !== 'text-block' && nodeType !== 'image'">
                        <el-color-picker v-model="drawerNode.stroke" @change="changeStroke" show-alpha></el-color-picker>
                    </el-form-item>
                    <el-form-item label="设备绑定">
                        <el-select v-model="drawerNode.bindDevice" placeholder="请选择绑定设备" @change="bindDevice">
                            <el-option label="设备1" value="1" />
                            <el-option label="设备2" value="2" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="采集项">
                        <el-select v-model="drawerNode.collectItem" placeholder="请选择绑定设备" @change="bindCollectItem">
                            <el-option label="A相电压" value="1" />
                            <el-option label="B相电压" value="2" />
                            <el-option label="C相电压" value="3" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="功能">
                        <el-button type="primary" icon="md-trending-up" @click="toTopZIndex" size="small">置顶</el-button>
                        <el-button type="primary" icon="md-trending-up" @click="toBackZIndex" size="small">置底</el-button>
                        <el-button type="error" class="margin-left-10" icon="md-trash" @click="deleteNode" size="small">删除</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div v-if="drawerType === 'edge'">
            <div class="drawer_title">线条设置</div>
            <div class="drawer_wrap">
                <el-form label-width="100px" label-suffix="：">
                    <el-form-item label="线条文本">
                        <el-input v-model="drawerEdge.edgeText" @change="changeEdgeText"></el-input>
                    </el-form-item>
                    <el-form-item label="线条宽度">
                        <el-slider v-model="drawerEdge.edgeWidth" :min="1" :max="10" @change="changeEdgeWidth"></el-slider>
                    </el-form-item>
                    <el-form-item label="线条样式">
                        <el-select v-model="drawerEdge.edgeStyle" @change="changeEdgeStyle">
                            <el-option :value="1" label="实线"></el-option>
                            <el-option :value="2" label="虚线"></el-option>
                        </el-select>
                        <!-- <el-color-picker v-model="drawerEdge.edgeStyle" @change="changeEdgeStyle" show-alpha></el-color-picker> -->
                    </el-form-item>
                    <el-form-item label="线条颜色">
                        <el-color-picker v-model="drawerEdge.edgeColor" @change="changeEdgeColor" show-alpha></el-color-picker>
                    </el-form-item>

                    <el-form-item label="文本大小">
                        <el-slider v-model="drawerEdge.edgeTextSize" :min="12" :max="60" @change="changeEdgeTextSize"></el-slider>
                    </el-form-item>
                    <el-form-item label="文本颜色">
                        <el-color-picker v-model="drawerEdge.edgeTextColor" @change="changeEdgeTextColor" show-alpha></el-color-picker>
                    </el-form-item>
                    <el-form-item label="文本角度">
                        <el-slider v-model="drawerEdge.edgeTextAngle" :min="0" :max="360" @change="changeEdgeTextAngle"></el-slider>
                    </el-form-item>
                    <el-form-item label="功能">
                        <el-button type="primary" icon="md-trending-up" @click="toTopZIndex" size="small">置顶</el-button>
                        <el-button type="primary" icon="md-trending-up" @click="toBackZIndex" size="small">置底</el-button>
                        <el-button type="error" class="margin-left-10" icon="md-trash" @click="deleteNode" size="small">删除</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        drawerType: {
            type: String,
        },
        selectCell: {},
        graph: {},
        nodeType: {
            type: String,
            default: () => '',
        },
    },
    data() {
        return {
            drawerNode: {
                fill: '',
                nodeText: '',
                fontSize: null,
                fontFill: '',
                strokeWidth: null,
                stroke: '',
                labelRefX: 0,
                labelRefY: 0,
                fontWeight: 0,
                bindDevice: null,
                collectItem: null,
                // nodePositionX: '',
                // nodePositionY: '',
                labelRotate: '',
                labelTransform: '',
            },
            drawerEdge: {
                edgeText: '',
                edgeWidth: null,
                edgeStyle: 1,
                edgeColor: '',
                edgeTextSize: 0,
                edgeTextColor: '',
                edgeTextAngle: 0,
            },
        }
    },
    created() {},
    mounted() {},
    watch: {
        selectCell: {
            handler(cell) {
                if (cell) {
                    if (cell.isNode()) {
                        /* 如果是节点 可能是内置节点 也可能是image和text-block 可能属性值设置不一样，这里需要兼容处理 */
                        this.handleNodeTypeAttrs(cell)
                    } else {
                        /* 如果是边 进行赋值处理 */
                        this.handleEdgeAttrs(cell)
                    }
                }
            },
            immediate: true,
            deep: false,
        },
    },
    methods: {
        // 节点设置
        changeStrokeWidth(val) {
            this.selectCell.attr('body/strokeWidth', val)
        },
        changefontSize(val) {
            this.selectCell.attr('label/fontSize', val)
            this.selectCell.attr('label/style/fontSize', val)
        },
        changeNodeText() {
            this.selectCell.attr('label/text', this.drawerNode.nodeText)
        },
        // changeNodePosition(val, type) {
        //     const offset = parseFloat(val)
        //     const { x, y } = this.selectCell.position()
        //     if (type === 'x') {
        //         this.selectCell.position(offset, y, { deep: true })
        //     } else if (type === 'y') {
        //         this.selectCell.position(x, offset, { deep: true })
        //     }
        // },
        changeStroke(val) {
            this.drawerNode.stroke = val
            if (this.selectCell.shape === 'path') {
                this.selectCell.attr('body/fill', this.drawerNode.stroke)
            } else {
                this.selectCell.attr('body/stroke', this.drawerNode.stroke)
            }
        },
        changeFontFill(val) {
            this.drawerNode.fontFill = val
            this.selectCell.attr('label/fill', this.drawerNode.fontFill)
            this.selectCell.attr('label/style/color', this.drawerNode.fontFill)
        },
        changeFill(val) {
            this.drawerNode.fill = val
            this.selectCell.attr('body/fill', val)
        },
        changeFontWeight(val) {
            this.drawerNode.fontWeight = val
            this.selectCell.attr('label/fontWeight', val ? 'bold' : 'normal')
            this.selectCell.attr(
                'label/style/fontWeight',
                val ? 'bold' : 'normal'
            )
        },
        changeLabelPosition(val, type) {
            this.selectCell.attr(`label/ref${type}`, val)
        },
        /* 文本整体旋转 */
        changeLabelTransform(val) {
            this.selectCell.attr(`label/transform`, `rotate(${val})`)
        },
        /* 文本单个字体独立旋转 */
        changeLabelRotate(val) {
            this.selectCell.attr(`label/rotate`, val)
        },
        // 边设置
        changeEdgeWidth(val) {
            this.drawerEdge.edgeWidth = val
            this.selectCell.attr('line/strokeWidth', this.drawerEdge.edgeWidth)
        },
        changeEdgeStyle(val) {
            this.drawerEdge.edgeStyle = val
            this.selectCell.attr(
                'line/strokeDasharray',
                this.drawerEdge.edgeStyle === 1 ? 0 : 8
            )
        },
        changeEdgeColor(val) {
            this.drawerEdge.stroke = val
            this.selectCell.attr('line/stroke', this.drawerEdge.stroke)
        },

        changeEdgeText(val) {
            this.drawerEdge.edgeText = val
            this.selectCell.setLabels([
                {
                    attrs: {
                        label: {
                            fontSize: this.drawerEdge.edgeTextSize,
                            fill: this.drawerEdge.edgeTextColor,
                            text: val,
                        },
                        body: {
                            fill: this.graph.background.options.background
                                .color,
                        },
                    },
                    position: {
                        angle: this.drawerEdge.edgeTextAngle,
                    },
                },
            ])
        },
        changeEdgeTextSize(val) {
            this.drawerEdge.edgeTextSize = val
            this.selectCell.setLabels([
                {
                    attrs: {
                        label: {
                            fontSize: val,
                            fill: this.drawerEdge.edgeTextColor,
                            text: this.drawerEdge.edgeText,
                        },
                        body: {
                            fill: this.graph.background.options.background
                                .color,
                        },
                    },
                    position: {
                        angle: this.drawerEdge.edgeTextAngle,
                    },
                },
            ])
        },
        changeEdgeTextColor(val) {
            this.drawerEdge.edgeTextColor = val
            this.selectCell.setLabels([
                {
                    attrs: {
                        label: {
                            fontSize: this.drawerEdge.edgeTextSize,
                            fill: val,
                            text: this.drawerEdge.edgeText,
                        },
                        body: {
                            fill: this.graph.background.options.background
                                .color,
                        },
                    },
                    position: {
                        angle: this.drawerEdge.edgeTextAngle,
                    },
                },
            ])
        },
        changeEdgeTextAngle(val) {
            this.selectCell.setLabels([
                {
                    attrs: {
                        label: {
                            fontSize: this.drawerEdge.edgeTextSize,
                            fill: this.drawerEdge.edgeTextColor,
                            text: this.drawerEdge.edgeText,
                        },
                        body: {
                            fill: this.graph.background.options.background
                                .color,
                        },
                    },
                    position: {
                        angle: val,
                    },
                },
            ])
        },
        /* 绑定设备 */
        bindDevice(val) {
            this.selectCell.setData({ id: val })
        },
        /* 绑定采集项 */
        bindCollectItem(val) {
            this.selectCell.setData({ collectItem: val })
        },
        // 置顶
        toTopZIndex() {
            this.selectCell.toFront()
        },
        toBackZIndex() {
            this.selectCell.toBack()
        },
        /* 设置节点层级 */
        setZIndex(index) {
            this.selectCell.setZIndex(index)
        },
        // 删除
        deleteNode() {
            const cell = this.graph.getSelectedCells()
            this.graph.removeCells(cell)
        },
        handleNodeTypeAttrs(cell) {
            /* 节点颜色 */
            if (cell.attrs.body) {
                this.drawerNode.fill =
                    cell.attrs.body.fill === 'transparent'
                        ? null
                        : cell.attrs.body.fill
            } else if (cell.attrs.label) {
                this.drawerNode.fill = cell.attrs.label.fill
            }

            if (this.nodeType !== 'text-block') {
                this.drawerNode.labelRefY =
                    cell.attrs.label && cell.attrs.label.refY
                this.drawerNode.labelRefX =
                    cell.attrs.label && cell.attrs.label.refX
                this.drawerNode.labelRotate =
                    cell.attrs.label && cell.attrs.label.rotate

                if (cell.attrs.label && cell.attrs.label.transform) {
                    const transform = cell.attrs.label.transform
                    const deg = transform.substring(
                        7,
                        transform.lastIndexOf(')')
                    )

                    this.drawerNode.labelTransform = deg
                }
            }
            if (this.nodeType === 'text-block') {
                this.drawerNode.fontFill =
                    cell.attrs.label.style && cell.attrs.label.style.color
            } else {
                this.drawerNode.fontFill =
                    cell.attrs.label && cell.attrs.label.fill
            }

            this.drawerNode.fontWeight =
                cell.attrs.label && cell.attrs.label.fontWeight

            this.drawerNode.nodeText = cell.attrs.label && cell.attrs.label.text

            this.drawerNode.fontSize = Number(
                cell.attrs.label && cell.attrs.label.fontSize
            )
            this.drawerNode.strokeWidth = Number(
                cell.attrs.body && cell.attrs.body.strokeWidth
            )

            if (cell.shape === 'path') {
                this.drawerNode.stroke = cell.attrs.body && cell.attrs.body.fill
            } else {
                this.drawerNode.stroke =
                    cell.attrs.body && cell.attrs.body.stroke
            }

            /* 节点位置回显 */
            // const { x, y } = cell.position()
            // this.drawerNode.nodePositionX = x
            // this.drawerNode.nodePositionY = y

            /* data业务数据 回显 */
            let { id, collectItem } = cell.data
            this.drawerNode.bindDevice = id
            this.drawerNode.collectItem = collectItem
        },
        handleEdgeAttrs(cell) {
            this.drawerEdge.edgeText =
                cell.labels[0] &&
                cell.labels[0].attrs &&
                cell.labels[0].attrs.label.text

            this.drawerEdge.edgeWidth =
                cell.attrs.line && Number(cell.attrs.line.strokeWidth)

            this.drawerEdge.edgeStyle =
                cell.attrs.line && Number(cell.attrs.line.strokeDasharray)
                    ? 2
                    : 1

            this.drawerEdge.edgeColor =
                cell.attrs.line && cell.attrs.line.stroke

            this.drawerEdge.edgeTextSize =
                cell.labels[0] &&
                cell.labels[0].attrs &&
                cell.labels[0].attrs.label.fontSize

            this.drawerEdge.edgeTextColor =
                cell.labels[0] &&
                cell.labels[0].attrs &&
                cell.labels[0].attrs.label.fill

            this.drawerEdge.edgeTextAngle =
                cell.labels[0] &&
                cell.labels[0].position &&
                cell.labels[0].position.angle
        },
    },
}
</script>

<style lang="scss" scoped>
.drawer_container {
    width: 100%;
    height: 100%;
    padding: 10px;
    .drawer_title {
        border-bottom: 1px solid #e8eaec;
        box-sizing: border-box;
        // padding: 14px 16px;
        padding-bottom: 12px;
        color: #333;
        font-weight: 600;
        font-size: 16px;
    }
    .drawer_wrap {
        box-sizing: border-box;
        padding: 20px 10px 20px 20px;
    }
}
</style>
