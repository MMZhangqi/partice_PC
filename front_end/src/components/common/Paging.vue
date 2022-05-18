<template>
    <div class="Paging">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            ref="paging">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: [
        'total',
    ],
    data() {
        return {
            currentPage: 1,
            pageSize: 10
        }
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val
            console.log(`每页 ${val} 条`);
            this.$emit('pageSize', parseInt(this.pageSize))
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val},${parseInt(this.$refs.paging.currentPage)}`);
            this.$emit('currentPage', parseInt(this.currentPage))
        }
    },
}
</script>