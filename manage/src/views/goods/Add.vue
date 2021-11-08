<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="游戏名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="制作人" prop="author">
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
        <el-form-item label="游戏类型" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="动作" name="type"></el-checkbox>
                <el-checkbox label="角色扮演" name="type"></el-checkbox>
                <el-checkbox label="冒险" name="type"></el-checkbox>
                <el-checkbox label="单人游戏" name="type"></el-checkbox>
                <el-checkbox label="射击" name="type"></el-checkbox>
                <el-checkbox label="运动" name="type"></el-checkbox>
                <el-checkbox label="战略" name="type"></el-checkbox>
                <el-checkbox label="生存" name="type"></el-checkbox>
                <el-checkbox label="开放世界" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="游戏平台" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
                <el-radio label="windows"></el-radio>
                <el-radio label="mac"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="出版商" prop="publisher">
            <el-input v-model="ruleForm.publisher"></el-input>
        </el-form-item>
        <el-form-item label="原价" prop="originalPrice">
            <el-input v-model="ruleForm.originalPrice" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="现价" prop="discountPrice">
            <el-input v-model="ruleForm.discountPrice" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="游戏描述" prop="desc">
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
                    type: [],
                    resource: '',
                    desc: '',
                    originalPrice: '',
                    discountPrice: '',
                    publisher: ''
                },
                rules: {
                    name: [{
                            required: true,
                            message: '请输入游戏名称',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 10,
                            message: '长度在 3 到 10 个字符',
                            trigger: 'blur'
                        }
                    ],
                    author: [{
                        required: true,
                        message: '请输入制作人',
                        trigger: 'blur'
                    }],
                    date1: [{
                        type: 'date',
                        required: true,
                        message: '请选择发布日期',
                        trigger: 'change'
                    }],
                    type: [{
                        type: 'array',
                        required: true,
                        message: '请至少选择一个游戏类型',
                        trigger: 'change'
                    }],
                    resource: [{
                        required: true,
                        message: '请选择游戏平台',
                        trigger: 'change'
                    }],
                    publisher: [{
                        required: true,
                        message: '请填写出版商',
                        trigger: 'blur'
                    }],
                    originalPrice: [{
                        required: true,
                        message: '请填写原价',
                        trigger: 'blur'
                    }],
                    discountPrice: [{
                        required: true,
                        message: '请输入现价',
                        trigger: 'blur'
                    }],
                    desc: [{
                        required: true,
                        message: '请填写游戏描述',
                        trigger: 'blur'
                    }, {
                        min: 10,
                        max: 500,
                        message: '长度在 10 到 500 个字符',
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const {
                            data
                        } = await this.$requestNew.post('/goods/add', {
                            title: this.ruleForm.name,
                            Issuedate: this.ruleForm.date1,
                            originalPrice: this.ruleForm.originalPrice,
                            discountPrice: this.ruleForm.discountPrice,
                            tagss: this.ruleForm.type,
                            Developers: this.ruleForm.author,
                            platform: this.ruleForm.resource,
                            publisher: this.ruleForm.publisher,
                            describe: this.ruleForm.desc

                        })

                        if (data.code === 200) {
                            alert('添加游戏成功')
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>