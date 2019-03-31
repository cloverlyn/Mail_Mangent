<template>
  <div class="Log">
    <el-table :data="log" style="width: 100%">
       <el-table-column prop="Opt_id" label="操作编号" width="250"></el-table-column>
      <el-table-column prop="Opt_Account" label="操作者" width="250"></el-table-column>
      <el-table-column prop="OptTime" label="操作时间" width="250"></el-table-column>
      <el-table-column prop="OptContent" label="操作内容" width="250"></el-table-column>
      <el-table-column prop="OptState" label="操作状态" width="250"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import { setTimeout } from "timers";
import axios from "axios";

export default {
  name: "Log",
 /* components: {
    HelloWorld
 },*/
  data: function() {
    return {
      log: [6666, 8]
    };
  },
  mounted() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5ca03011e09f0c258d208596/HNU_SE1601/4/Mail/Log"
      )
      .then(res => {
        this.log = res.data.log;
      })
    /*  .catch(error => {
        console.log(error);
      });*/
  }
};
</script>
 