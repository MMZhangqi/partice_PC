<template>
    <div class="Menu">
        <el-aside width="210px">
            <el-menu
                router
                :default-active="activePath"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="rgb(19 155 0)"
                text-color="#fff"
                active-text-color="#ffd04b">
                <template v-for="(item, index) in menus">
                    <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
                        <template slot="title">
                            <i :class="item.iconClass"></i>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item-group v-for="(child, index) in item.children" :key="index">
                            <el-menu-item :index="child.path" >
                                <i :class="child.iconClass"></i>
                                {{ child.name }}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [],
            activePath: ''
        }
    },
    created() {
        // console.log(this.$route.matched)
        this.menus = [...this.$router.options.routes]
        this.activePath = this.$router.currentRoute.path
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.Menu .el-aside {
    position: absolute;
    height: calc(100vh - 60px);
    background-color:rgb(136, 236, 136);
}
.Menu .el-aside .el-menu{
    height: 100%;
    text-align: left;
}
.Menu .el-aside .el-menu.is-active i{
    color: rgb(255, 208, 75);
}
</style>