<template>
    <div>
        <el-button @click="delArray()" type="danger" style="margin-bottom:10px;margin-left:10px;float: right;">批量删除
        </el-button>
        <el-button type="success" style="margin-bottom:10px;float: right;" @click="addNews">添加新闻</el-button>
        <el-table :data="newslist" border style="width: 100%;" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column fixed prop="title" label="新闻标题" width="220">
            </el-table-column>
            <el-table-column prop="date" label="发布日期" width="140">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="150">
            </el-table-column>
            <el-table-column prop="short" label="新闻描述" width="280">
            </el-table-column>
            <el-table-column prop="content" label="具体内容" width="300" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="delItem(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>
<script>
    export default {
        name: 'newsList',
        data() {
            return {
                checkable: false,
                checkIndex: '',
                newslist: [],
                tableDataAmount: []
            }
        },
        methods: {
            addNews() {
                this.$router.push('/manage/news/add')
            },
            async delItem(id) {
                let newslist = this.newslist.filter(item => {
                    return item._id != id
                })
                const {
                    data
                } = await this.$requestNew.post('/news/delete', {
                    id: id
                })
                this.newslist = newslist
            },
            handleSelectionChange(data) {
                this.tableDataAmount = data
            },
            delArray() {
                var that = this
                var val = this.tableDataAmount
                if (val) {
                    val.forEach((item, index) => {
                        that.newslist.forEach((itemI, indexI, arr) => {
                            if (item._id === itemI._id) {
                                const {
                                    data
                                } = this.$requestNew.post('/news/delete', {
                                    id: item._id
                                })
                            }
                        })
                        that.newslist = that.newslist.filter(itemx => {
                            return itemx._id != item._id
                        })
                    });
                }
                this.$refs.multipleTable.clearSelection()
            }
        },
        created() {
            this.$requestNew.get('/news/list').then(({
                data
            }) => {
                this.newslist = data.data
                console.log(this.newslist);
            })
        },

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