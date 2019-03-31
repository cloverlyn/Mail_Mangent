<template>
  <el-container>
    <el-header>邮件系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <router-link to="/user">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/mail">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">邮件管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/log">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">日志管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/message">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">基本信息</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </el-container>
</template>

<script>
export default {};
</script>

<style>
#app {
  margin: 0;
}
.el-header{
  font-size: 30px;
  font-style: inherit;
  color: rgb(174, 203, 226)
}
</style>

