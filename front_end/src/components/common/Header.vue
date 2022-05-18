<template>
    <div class="header">
        <el-header>
            <router-link to="/home">
                <i class="fas fa-otter"></i>
                StudentMannge
            </router-link>
            <div class="username">{{ username }}</div>
        </el-header>
    </div>
</template>

<style scoped>
.header .el-header {
    display: flex;
    justify-content: space-between;
    color: #333;
    text-align: center;
    line-height: 60px;
    background-color: rgb(19 155 0);
    color: rgb(245, 189, 120);
}
.header .el-header a{
    text-decoration: none;
    color: rgb(245, 189, 120);
}
</style>

<script>
export default {
    data() {
        return {
            username: localStorage.getItem('username')
        }
    },
}
</script>