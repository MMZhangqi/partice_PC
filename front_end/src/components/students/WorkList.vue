<template>
    <div class="WorkList">
        <el-card>
            <div class="Search  Float-right">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="Name">
                        <el-input v-model="formInline.name" placeholder="Student Name"></el-input>
                    </el-form-item>
                    <el-form-item label="Class">
                        <el-select v-model="formInline.class" placeholder="Student Class">
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
                <el-table-column align="center" fixed prop="workName" label="Work Name" width="120px"></el-table-column>
                <el-table-column align="center" prop="compeleteNum" label="Compelete Number"  width="150px"></el-table-column>
                <el-table-column align="center" prop="uncompeleteNum" label="Uncompelete Number" width="160"></el-table-column>
                <el-table-column align="center" prop="completionRate" label="Completion Rate" width="150"></el-table-column>
                <el-table-column align="center" prop="uncheck" label="Uncheck" width="120"></el-table-column>
                <el-table-column align="center" prop="checkRate" label="Check Rate" width="120"></el-table-column>
                <el-table-column align="center" prop="passNum" label="Pass NUmber" width="120"></el-table-column>
                <el-table-column align="center" prop="excellentNum" label="Excellent Number" width="150"></el-table-column>
            </el-table>

            <!-- 分页 -->
            <Paging :total="tableData.length" @currentPage="getCurrentPage" @pageSize="getPageSize"></Paging>
        </el-card>
    </div>
</template>

<style scoped>
.WorkList{
    height: 70vh;
    padding: 10px;
    overflow: auto;
}
.WorkList .el-card .el-table{
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
                    workName: '王小虎',
                    compeleteNum: '18',
                    uncompeleteNum: '2',
                    completionRate: '上海市普陀区金沙江路 1518 弄',
                    uncheck: '123486323',
                    checkRate: '1',
                    passNum: '在读',
                    excellentNum: '123-2132-3080'
                }, 
                {
                    workName: '王小虎',
                    compeleteNum: '18',
                    uncompeleteNum: '2',
                    completionRate: '上海市普陀区金沙江路 1518 弄',
                    uncheck: '123486323',
                    checkRate: '1',
                    passNum: '在读',
                    excellentNum: '123-2132-3080'
                },
                {
                    workName: '王小虎',
                    compeleteNum: '18',
                    uncompeleteNum: '2',
                    completionRate: '上海市普陀区金沙江路 1518 弄',
                    uncheck: '123486323',
                    checkRate: '1',
                    passNum: '在读',
                    excellentNum: '123-2132-3080'
                },
                {
                    workName: '王小虎',
                    compeleteNum: '18',
                    uncompeleteNum: '2',
                    completionRate: '上海市普陀区金沙江路 1518 弄',
                    uncheck: '123486323',
                    checkRate: '1',
                    passNum: '在读',
                    excellentNum: '123-2132-3080'
                },
                {
                    workName: '王小虎',
                    compeleteNum: '18',
                    uncompeleteNum: '2',
                    completionRate: '上海市普陀区金沙江路 1518 弄',
                    uncheck: '123486323',
                    checkRate: '1',
                    passNum: '在读',
                    excellentNum: '123-2132-3080'
                },
                {
                    workName: '王小虎',
                    compeleteNum: '18',
                    uncompeleteNum: '2',
                    completionRate: '上海市普陀区金沙江路 1518 弄',
                    uncheck: '123486323',
                    checkRate: '1',
                    passNum: '在读',
                    excellentNum: '123-2132-3080'
                },
                {
                    workName: '王小虎',
                    compeleteNum: '18',
                    uncompeleteNum: '2',
                    completionRate: '上海市普陀区金沙江路 1518 弄',
                    uncheck: '123486323',
                    checkRate: '1',
                    passNum: '在读',
                    excellentNum: '123-2132-3080'
                },
                {
                    workName: '王小虎',
                    compeleteNum: '18',
                    uncompeleteNum: '2',
                    completionRate: '上海市普陀区金沙江路 1518 弄',
                    uncheck: '123486323',
                    checkRate: '1',
                    passNum: '在读',
                    excellentNum: '123-2132-3080'
                },
            ],
            formInline: {
                name: '',
                class: ''
            },
            currentPage: 1,
            pageSize: 10,
        }
    },
    methods: {
        // handleClose(done) {
        // this.$confirm('确认关闭？')
        //     .then(_ => {
        //     done();
        //     })
        //     .catch(_ => {});
        // },
        // handleClick(row) {
        //     this.dialogFormVisible = true
        //     this.state = true
        //     this.form = {...row}
        //     console.log(row);
        // },
        // addForm(){
        //     this.form = {
        //         gender: '1',
        //     }
        //     this.dialogFormVisible = true
        // },
        // open() {
        //     this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        //     })
        //     .then(() => {
        //         this.$message({
        //             type: 'success',
        //             message: '删除成功!'
        //         });
        //     }).catch(() => {
        //     this.$message({
        //         type: 'info',
        //         message: '已取消删除'
        //     });          
        //     });
        // },
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