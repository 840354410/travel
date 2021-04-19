<template>
    <div class="tree" ref="main">
        <el-row class="tac">
            <el-col>
                <!-- <h5>默认颜色</h5> -->
                <el-menu
                default-active="/testFirst/2"
                class="el-menu-vertical-demo"
                :router="true"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect">
                <el-submenu index="/testFirst">
                    <template #title>
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                    </template>

                    <el-menu-item index="/testFirst/1">选项1</el-menu-item>
                    <el-menu-item index="/testFirst/2">选项2</el-menu-item>

                    
                    <el-menu-item index="/card">选项3</el-menu-item>


                    <el-submenu index="/testFirst/4">
                    <template #title>选项4</template>
                    <el-menu-item index="/testFirst/4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="/testSecond">
                    <i class="el-icon-menu"></i>
                    <template #title>导航二</template>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <template #title>导航三</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <template #title>导航四</template>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'HomeTree',
    data(){
        return{
            option:1
        }
        
    },
    props:{
        
    },
    computed:{
        
    },
    methods:{
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(e){
            console.log(e);
        }
    }
}
</script>
<style lang="stylus" scoped>
// .tree
//     position relative
//     top 61px
//     left 0
//     background-color #FFF
//     // overflow scroll
.el-menu
    height calc(100vh - 61px)
</style>