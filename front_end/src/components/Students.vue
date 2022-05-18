<template>
    <div class="student">
        <!-- header -->
        <Header></Header>
        <el-container>
            <!-- 侧边栏 -->
            <Menu></Menu>
            <el-container class="content">
                <main>
                    <!-- 导航 -->
                    <Breadcrumb></Breadcrumb>
                    <router-view></router-view>
                </main>
                <!-- footer -->
                <Footer></Footer>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.student{
    width: 100%;
    height: 100%;
}
.student .content{
    text-align: center;
    position: absolute;
    left: 210px;
    width: calc(100vw - 210px);
    display: flex;
    flex-direction: column;
}
.student .content main{
    width: 100%;
    height: calc(100vh - 120px);
    margin-bottom: 20px;
}
</style>

<script>
import Header from '@/components/common/Header.vue'
import Menu from '@/components/common/Menu.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Footer from '@/components/common/Footer.vue'
export default {
    components: {
        Header, Menu, Breadcrumb, Footer
    },
    // data() {
    //     return {
    //         menus: [],
    //         activePath: ''
    //     }
    // },
    // created() {
    //     // console.log(this.$route.matched)
    //     this.menus = [...this.$router.options.routes]
    //     this.activePath = this.$router.currentRoute.path
    // },
    // methods: {
    //   handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    // }
}
</script>
