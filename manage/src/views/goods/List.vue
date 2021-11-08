<template>
    <div>
        <el-button @click="delArray()" type="danger" style="margin-bottom:10px;margin-left:10px;float: right;">批量删除
        </el-button>
        <el-button type="success" style="margin-bottom:10px;float: right;" @click="addGame">添加游戏</el-button>
        <el-table :data="gamelist" ref="multipleTable" border style="width: 100%;"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column fixed prop="title" label="游戏名称" width="220">
            </el-table-column>
            <el-table-column prop="customAttributes.Issuedate" label="发布日期" width="220">
            </el-table-column>
            <el-table-column prop="price.originalPrice" label="原价" width="180">
            </el-table-column>
            <el-table-column prop="price.discountPrice" label="现价" width="180">
            </el-table-column>
            <el-table-column prop="price.sales" label="销量" width="180">
            </el-table-column>
            <el-table-column prop="tagss.tags[0].name" label="类型" width="150">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="checkItem(scope.$index)">查看</el-button>
                    <el-button type="text" size="small" @click="delItem(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-descriptions class="gamedetail" direction="vertical" :column="4" border v-if="checkable">
            <template slot="extra">
                <el-button type="danger" size="small" @click="cancelcheck" style="margin-bottom:-20px">关闭</el-button>
            </template>
            <el-descriptions-item label="游戏名称">{{gamelist[checkIndex].title}}</el-descriptions-item>
            <el-descriptions-item label="发布日期">{{gamelist[checkIndex].customAttributes.Issuedate}}
            </el-descriptions-item>
            <el-descriptions-item label="开发人员" :span="2">{{gamelist[checkIndex].customAttributes.Developers}}
            </el-descriptions-item>
            <el-descriptions-item label="游戏平台">{{gamelist[checkIndex].customAttributes.platform}}
            </el-descriptions-item>
            <el-descriptions-item label="出版商">
                {{gamelist[checkIndex].customAttributes.publisher}}
            </el-descriptions-item>
            <el-descriptions-item label="原价">
                {{gamelist[checkIndex].price.originalPrice}}
            </el-descriptions-item>
            <el-descriptions-item label="现价">
                {{gamelist[checkIndex].price.discountPrice}}
            </el-descriptions-item>
            <el-descriptions-item label="销量">
                {{gamelist[checkIndex].price.sales}}
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>
<script>
    export default {
        name: 'GoodsList',
        data() {
            return {
                checkable: false,
                checkIndex: '',
                gamelist: [],
                tableDataAmount: []
            }
        },
        created() {
            this.$requestNew.get('/goods/list').then(({
                data
            }) => {
                this.gamelist = data.data
                console.log(this.gamelist);
            })
        },
        methods: {
            async delItem(id) {
                let gamelist = this.gamelist.filter(item => {
                    return item._id != id
                })
                const {
                    data
                } = await this.$requestNew.post('/goods/delete', {
                    id: id
                })
                this.gamelist = gamelist
                console.log(id);
            },
            handleSelectionChange(data) {
                this.tableDataAmount = data
            },
            delArray() {
                var that = this
                var val = this.tableDataAmount
                if (val) {
                    val.forEach((item, index) => {
                        that.gamelist.forEach((itemI, indexI, arr) => {
                            if (item._id === itemI._id) {
                                const {
                                    data
                                } = this.$requestNew.post('/goods/delete', {
                                    id: item._id
                                })
                            }
                        })
                        that.gamelist = that.gamelist.filter(itemx => {
                            return itemx._id != item._id
                        })
                    });
                }
                this.$refs.multipleTable.clearSelection()
            },
            checkItem(index) {
                this.checkable = true
                this.checkIndex = index
            },
            cancelcheck() {
                this.checkable = false
            },
            addGame() {
                this.$router.push('/manage/goods/add')
            },
            selectItem(id) {
                console.log(1);
                const idx = this.selectIds.indexOf(id);
                if (idx >= 0) {
                    this.selectIds.splice(idx, 1);
                } else {
                    this.selectIds.push(id);
                }
                console.log(this.selectIds);
            },
        }

    }
</script>
<style>
    .gamedetail {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 800px;
        z-index: 10;
    }
</style>