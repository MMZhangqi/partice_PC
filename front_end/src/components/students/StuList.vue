<template>
    <div class="StuList">
        <el-card>
            <!-- 弹出框 -->
            <el-button class="StuAdd Float-left el-icon-circle-plus" size="small" type="primary" @click="addForm"></el-button>
            <div class="Search  Float-right">
                <el-form :inline="true" ref="formInline" :model="formInline" class="demo-form-inline">
                    <el-form-item label="Name">
                        <el-input v-model="formInline.name" placeholder="Student Name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="el-icon-search" size="small" type="primary" @click="search"></el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 表格 -->
            <el-table show-header :data="dataDeal()" style="width: 100%; " height="calc(65vh - 150px)">
                <el-table-column align="center" fixed prop="name" label="Name" width="120"></el-table-column>
                <el-table-column align="center" prop="gender_text" label="Gender" width="120" ></el-table-column>
                <el-table-column align="center" prop="age" label="Age" width="120"></el-table-column>
                <el-table-column align="center" prop="student_id" label="Student ID" width="120"></el-table-column>
                <el-table-column align="center" prop="class_text" label="Class" width="120"></el-table-column>
                <el-table-column align="center" prop="state_text" label="State" width="120"></el-table-column>
                <el-table-column align="center" prop="address" label="Address" width="180"></el-table-column>
                <el-table-column align="center" prop="concat" label="Concat" width="150"></el-table-column>
                <el-table-column align="center" fixed="right" label="Operation" width="200px">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" class="el-icon-edit" size="mini" >
                            Edit
                        </el-button>
                        <el-button @click="Delete(scope.row)" size="mini" class="el-icon-delete-solid">
                            delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

             <el-dialog :title="state ? 'Add Student Information' : 'Edit Student Information'" :visible.sync="dialogFormVisible">
                <el-form :model="form" ref="form" :rules="rules">
                    <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Gender" :label-width="formLabelWidth" prop="gender">
                        <el-radio v-model="form.gender" label="1">Male</el-radio>
                        <el-radio v-model="form.gender" label="2">Female</el-radio>
                    </el-form-item>
                    <el-form-item label="Age" :label-width="formLabelWidth" prop="age">
                        <el-input v-model="form.age" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Student ID" :label-width="formLabelWidth" prop="student_id">
                        <el-input v-model="form.student_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Class" :label-width="formLabelWidth" prop="class">
                        <el-select v-model="form.class" placeholder="学生班级">
                            <el-option label="WebClass01" value="1"></el-option>
                            <el-option label="WebClass02" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="State" :label-width="formLabelWidth" prop="state">
                        <el-select v-model="form.state" placeholder="学生在校状态">
                            <el-option label="在读" value="1"></el-option>
                            <el-option label="离校" value="2"></el-option>
                            <el-option label="结业" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Address" :label-width="formLabelWidth" prop="address">
                        <el-input v-model="form.address" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Concat" :label-width="formLabelWidth" prop="concat">
                        <el-input v-model="form.concat" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogClose">取 消</el-button>
                    <el-button type="primary" @click="insert('form')">确 定</el-button>
                </div>
            </el-dialog>
            
            <!-- 分页 -->
            <Paging :total="total" @currentPage="getCurrentPage" @pageSize="getPageSize"></Paging>
        </el-card>
    </div>
</template>

<style scoped>
.StuList{
    height: 70vh;
    padding: 10px;
    overflow: auto;
}
.StuList .el-card .el-table{
    overflow: auto;
}
</style>

<script>
import Paging from '@/components/common/Paging.vue'
export default {
    components:{
        Paging
    },
    data() {
        return {
            rules: {
                name: [
                    { required: true, message: 'please wirte your name', trigger: 'blur' },
                    { min: 2, max: 12, message: 'username required length 2 ~12', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: 'please choose your gender', trigger: 'change' }
                ],
                age: [
                    { required: true, message: 'please wirte your age', trigger: 'blur' },
                    { min: 1, max: 3, message: 'password required length 1 ~ 3', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: 'please wirte your address', trigger: 'blur' },
                    { min: 2, max: 20, message: 'password required length 5 ~20', trigger: 'blur' }
                ],
                student_id: [
                    { required: true, message: 'please wirte your student_id', trigger: 'blur' },
                    { min: 5, max: 12, message: 'username required length 5 ~12', trigger: 'blur' }
                ],
                class: [
                    { required: true, message: 'please choose your class', trigger: 'change' }
                ],
                state: [
                    { required: true, message: 'please choose your state', trigger: 'change' }
                ],
                concat: [
                    { required: true, message: 'please wirte your concat', trigger: 'blur' },
                    { min: 11, max: 11, message: 'you phonenumber is not format', trigger: 'blur' }
                ],
            },
            tableData: [
            ],
            dialogFormVisible: false,
            form: {
                name: '',
                age: '',
                gender: '1',
                address: '',
                student_id: '',
                class: '',
                state: '',
                concat: ''
            },
            formLabelWidth: '120px',
            state: false,
            formInline: {
                name: '',
            },
            currentPage: 1,
            pageSize: 10,
            total: 0
        }
    },
    created() {
        this.getData()
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        handleClick(row) {
            this.dialogFormVisible = true
            this.state = false
            this.form = {...row}
            console.log(this.form);
            console.log(row);
        },
        dialogClose(){
            this.dialogFormVisible = false;
            this.form = {
                gender: '1',
                state: '1',
                class: '1'
            }
        },
        addForm(){
            this.form = {
                gender: '1',
                state: '1',
                class: '1'
            }
            this.state = true
            this.dialogFormVisible = true
        },
        Delete(row) {
            console.log(row);
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                this.sevice.delete('/stuList/delete', row)
                .then(res => {
                    console.log(row._id);
                    if(res.data.status ===200){
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getData()
                    }else{
                        this.$message.error(res.data.msg)
                    }
                })
                
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        onSubmit() {
            console.log('submit!');
        },
        // 获取当前页数
        getCurrentPage(currentPage){
            this.currentPage = currentPage
            this.getData()
        },
        getPageSize(pageSize){
            this.pageSize = pageSize
            
        },
        dataDeal(){
            this.tableData.forEach(item => {
                item.gender === '1' ? item.gender_text = '男' : item.gender_text = '女'
                item.class === '1' ? item.class_text = "WebClass01" : item.class_text = "WebClass02"
                if(item.state === '1'){
                    item.state_text = '在读'
                }else if(item.state === '2'){
                    item.state_text = '离校'
                }else{
                    item.state_text = '结业'
                }
            });
            return this.tableData
        },
        // 查询数据
        search(){
            this.getData()
        },
        insert(form){
            this.$refs[form].validate((valid)=> {
                if(valid){
                    // 判断提交接口 state = true ? insert ：update
                    if(this.state){
                        this.sevice.post('/stuList/insert', this.form)
                        .then(res => {
                            if(res.data.status === 200){
                                this.tableData.push(res.data.data)
                                this.$message({
                                    type: 'success',
                                    message: res.data.msg
                                })
                            }else{
                                this.$message.error(res.data.msg)
                            }
                        })
                    }
                    else{
                        this.sevice.put('/stuList/update', this.form)
                        .then(res => {
                            if(res.data.status === 200){
                                this.tableData.push(res.data.data)
                                this.$message({
                                    type: 'success',
                                    message: res.data.msg
                                })
                            }else{
                                this.$message.error(res.data.msg)
                            }
                        })
                    }
                }else{
                    console.error(this.form)
                }
            })
            this.getData()
            this.dialogFormVisible = false
       },
        // 数据请求
        getData(){
            this.sevice.get('/stuList/search?name='+this.formInline.name+'&currentPage='+this.currentPage+'&pageSize='+this.pageSize)
            .then(res => {
                if(res.data.status === 200){
                    this.tableData = res.data.data
                    this.total = res.data.total
                }else{
                    this.$message.error(res.data.msg)
                }
            })
        }
    }
}
</script>