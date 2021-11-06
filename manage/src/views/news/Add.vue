<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="新闻标题" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item label="添加时间" required>
            <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;">
                    </el-date-picker>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="新闻描述" prop="resource">
            <el-input type="textarea" v-model="ruleForm.resource"></el-input>
        </el-form-item>
        <el-form-item label="新闻内容" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    author: '',
                    date1: '',
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [{
                            required: true,
                            message: '请输入新闻标题',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 50,
                            message: '长度在 3 到 50 个字符',
                            trigger: 'blur'
                        }
                    ],
                    author: [{
                        required: true,
                        message: '请输入作者',
                        trigger: 'blur'
                    }],
                    date1: [{
                        type: 'date',
                        required: true,
                        message: '请选择发布日期',
                        trigger: 'change'
                    }],
                    resource: [{
                        required: true,
                        message: '请填写新闻描述',
                        trigger: 'blur'
                    }],
                    desc: [{
                        required: true,
                        message: '请填写新闻内容',
                        trigger: 'blur'
                    }]
                }
            };
        },

    }
</script>