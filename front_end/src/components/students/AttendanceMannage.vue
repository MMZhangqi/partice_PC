<template>
    <div class="AttendanceMannage">
        <el-card>
            <!-- 弹出框 -->
            <div class="Search  Float-right">
                <el-form :inline="true" ref="formInline" :model="formInline" class="demo-form-inline">
                    <el-form-item label="Name">
                        <el-input v-model="formInline.name" placeholder="Student Name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="el-icon-search" size="small" type="primary" @click="search('formInline')"></el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 表格 -->
            <el-table show-header :data="getdata().slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%; " height="calc(65vh - 150px)">
                <el-table-column align="center" fixed prop="name" label="Name" width="120"></el-table-column>
                <el-table-column align="center" prop="class" label="Class" width="120" ></el-table-column>
                <el-table-column align="center" prop="toBeDue" label="ToBeOne" width="120"></el-table-column>
                <el-table-column align="center" prop="actual" label="Actual" width="120"></el-table-column>
                <el-table-column align="center" prop="attendance" label="Attendance" width="120"></el-table-column>
                <el-table-column align="center" prop="attendanceRanking" label="Attendance Ranking" width="180"></el-table-column>
                <el-table-column align="center" prop="attendanceRate" label="Attendance Rate" width="150"></el-table-column>
            </el-table>

            
            <!-- 分页 -->
            <Paging :total="tableData.length" @currentPage="getCurrentPage" @pageSize="getPageSize"></Paging>
        </el-card>
    </div>
</template>

<style scoped>
.AttendanceMannage{
    height: 70vh;
    padding: 10px;
    overflow: auto;
}
.AttendanceMannage .el-card .el-table{
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
            ],
            formInline: {
                name: '',
            },
            currentPage: 1,
            pageSize: 10,
        }
    },
    created() {
        this.sevice.get('/attendanceList/find')
        .then(res => {
            if(res.status ===200){
                this.tableData = res.data.data
            }
        })
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
        onSubmit() {
            console.log('submit!');
        },
        getCurrentPage(currentPage){
            this.currentPage = currentPage
        },
        getPageSize(pageSize){
            this.pageSize = pageSize
        },
        getdata(){
            this.tableData.forEach(item => {
                if(item.gender === '1')
                    item.gender_text = '男'
                else
                    item.gender_text = '女'
            });
            return this.tableData
        },
        search(formInline){
            this.$refs[formInline].validate((valid)=> {
               if(valid){
                    this.sevice.post('/attendanceList/search',this.formInline)
                    .then(res => {
                        if(res.data.status === 200){
                           this.tableData = res.data.data
                        }else{
                            this.$message.error(res.data.msg)
                        }
                    })
                    console.log(this.formInline)
                }else{
                    console.error(this.formInline)
                }
            })
        },
    }
}
</script>