<template>
    <div class="oDiv">
        <div style="margin-top: 20px">
            <el-button @click="delArray()" type="danger">批量删除</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        <el-table :data="tableData" ref="multipleTable" style="width: 100%" max-height="250"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableDataAmount: [],
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎1',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎2',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎3',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }]
            }
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1)
            },
            // 选择事件 得到选中的数据
            handleSelectionChange(data) {
                this.tableDataAmount = data
            },
            // 批量清除
            delArray() {
                var that = this
                // 拿到选中的数据；
                var val = this.tableDataAmount
                // 如果选中数据存在
                if (val) {
                    // 将选中数据遍历
                    val.forEach(function (item, index) {
                        // 遍历源数据
                        that.tableData.forEach(function (itemI, indexI) {
                            // 如果选中数据跟元数据某一条标识相等，删除对应的源数据
                            if (item.name === itemI.name) {
                                that.tableData.splice(indexI, 1)
                            }
                        })
                    })
                }
                // 清除选中状态
                this.$refs.multipleTable.clearSelection()
            }
        }
    }
</script>