<template>
    <div class="StuInformation">
        <el-card>
            <!-- 弹出框 -->
            <el-button class="StuAdd Float-left el-icon-circle-plus" size="small" type="primary" @click="addForm"></el-button>
            <div class="Search  Float-right">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="Name">
                        <el-input v-model="formInline.user" placeholder="Student Name"></el-input>
                    </el-form-item>
                    <el-form-item label="Class">
                        <el-select v-model="formInline.region" placeholder="Student Class">
                        <el-option label="WebClass01" value="1"></el-option>
                        <el-option label="WebClass02" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="el-icon-search" size="small" type="primary" @click="onSubmit"></el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 表格 -->
            <el-table show-header :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%; " height="calc(65vh - 100px)">
                <el-table-column align="center" fixed prop="name" label="Name" width="120"></el-table-column>
                <el-table-column align="center" prop="gender" label="Gender" width="120" ></el-table-column>
                <el-table-column align="center" prop="age" label="Age" width="120"></el-table-column>
                <el-table-column align="center" prop="student_id" label="Student ID" width="120"></el-table-column>
                <el-table-column align="center" prop="class" label="State" width="120"></el-table-column>
                <el-table-column align="center" prop="address" label="Address" width="180"></el-table-column>
                <el-table-column align="center" prop="concat" label="Concat" width="150"></el-table-column>
                <el-table-column align="center" fixed="right" label="Operation" width="200px">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" class="el-icon-edit" size="mini" >
                            Edit
                        </el-button>
                        <el-button @click="open" size="mini" class="el-icon-delete-solid">
                            delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

             <el-dialog :title="state ? 'Add Student Information' : 'Edit Student Information'" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="Name" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Gender" :label-width="formLabelWidth">
                        <el-radio v-model="form.gender" label="1">Male</el-radio>
                        <el-radio v-model="form.gender" label="2">Female</el-radio>
                    </el-form-item>
                    <el-form-item label="Age" :label-width="formLabelWidth">
                        <el-input v-model="form.age" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Student ID" :label-width="formLabelWidth">
                        <el-input v-model="form.student_id" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Class" :label-width="formLabelWidth">
                        <el-select v-model="form.class" placeholder="学生班级">
                            <el-option label="WebClass01" value="1"></el-option>
                            <el-option label="WebClass02" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="State" :label-width="formLabelWidth">
                        <el-select v-model="form.state" placeholder="学生在校状态">
                            <el-option label="在读" value="1"></el-option>
                            <el-option label="离校" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Address" :label-width="formLabelWidth">
                        <el-input v-model="form.address" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Concat" :label-width="formLabelWidth">
                        <el-input v-model="form.concat" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            
            <!-- 分页 -->
            <Paging :total="tableData.length" @currentPage="getCurrentPage" @pageSize="getPageSize"></Paging>
        </el-card>
    </div>
</template>

<style scoped>
.StuInformation{
    height: 70vh;
    padding: 10px;
    overflow: auto;
}
.StuInformation .el-card .el-table{
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
            tableData: [
                {
                    name: '王小虎',
                    age: '18',
                    gender: '2',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '1',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
                {
                    name: '王小虎',
                    age: '18',
                    gender: '2',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '1',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
                {
                    name: '王小虎',
                    age: '18',
                    gender: '1',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '1',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
                {
                    name: '王小虎',
                    age: '18',
                    gender: '2',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '1',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
                {
                    name: '王小虎',
                    age: '18',
                    gender: '1',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '2',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
                {
                    name: '王小虎',
                    age: '18',
                    gender: '1',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '2',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
                {
                    name: '王小虎',
                    age: '18',
                    gender: '1',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '2',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
                {
                    name: '王小虎',
                    age: '18',
                    gender: '2',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '2',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
                {
                    name: '王小虎',
                    age: '18',
                    gender: '1',
                    address: '上海市普陀区金沙江路 1518 弄',
                    student_id: '123486323',
                    class: '1',
                    state: '在读',
                    concat: '123-2132-3080'
                }, 
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
                user: '',
                region: ''
            },
            currentPage: 1,
            pageSize: 10,
        }
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
            this.state = true
            this.form = {...row}
            console.log(row);
        },
        addForm(){
            this.form = {
                gender: '1',
            }
            this.dialogFormVisible = true
        },
        open() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
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
        getCurrentPage(currentPage){
            this.currentPage = currentPage
        },
        getPageSize(pageSize){
            this.pageSize = pageSize
        }
    }

}
</script>