<template>
  <div class="User">
    <el-table :data="user" style="width: 100%">
      <el-table-column prop="Account" label="账户" width="400"></el-table-column>
      <el-table-column prop="nickName" label="昵称" width="400"></el-table-column>
      <el-table-column label="类型" width="400">
        <template slot-scope="scope">
          <el-select placeholder="请选择" v-model="user[scope.$index].value">
            <el-option
              v-for="item in states"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import { setTimeout } from "timers";
import axios from "axios";

export default{
  name: "user",
  data() {
    return {
      user: [],
      value : '' ,
      states: [
        {
          value: 1,
          label: "用户"
        },
        {
          value: 2,
          label: "管理员"
        },
        {
          value: 0,
          label: "黑名单"
        }
      ]
    };
  },

  mounted() {
    axios
        .get(
          "http://172.20.10.3:8080/SMTPMAIL/UserServlet"
        )
        .then(res => {
          this.user = res.data.user.map(item => {
            return {
              ...item
        //      value: "选项1"
            };
          });
        })
  },

  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    states(val,oldval){
      console.log(this.options[val].value);
      this.afterSwitchValue = this.options[val].value;


    },
    states() {
      alert(this.user.value);
      let params = new URLSearchParams();
      for (var key in this.user) {
        params.append(this.user.Account[key], this.user.value[key]);
      }
      axios
        .post(
          "http://10.69.229.141:8081/mailtest/TestServlet",
          params
        )
        .then(res => {
    //      console("success");
          this.user = res.data.user.map(item => {
            return {
              ...item
              //      value: "选项1"
            };
            //  this.states.value=res.data.value;
          });
          alert(this.user.Account);
        });
    }
  },
};

/*export default {
  name: 'user',
  data() {
    return {
      user: [],
      states: [
        {
          value: 1,
          label: "用户"
        },
        {
          value: 2,
          label: "管理员"
        },
        {
          value: 0,
          label: "黑名单"
        }
      ]
    }
  }, 
  mounted() {
    this.getuser();
  },
  
  methods: {
    getuser(){//循环添加参数
      let params = new URLSearchParams();
      for(var key in this.user){
        params.append(this.user.Account[key],this.user.value[key])
      }
      axios
        .post('https://www.easy-mock.com/mock/5ca03011e09f0c258d208596/HNU_SE1601/4/Mail/User',params)
        .then((res) => {
          console("success")
          this.user = res.data.user.map(item => {
            return {
              ...item
        //      value: "选项1"
            };
        //  this.states.value=res.data.value;
        //  alert(this.states.value);
        })
    })
  }
}
}
/*
export default {
  name: "User",
  /*components: {
    HelloWorld
  },*/
/*
  data: function() {
    return {
      user: [],
      states: [
        {
          value: 1,
          label: "用户"
        },
        {
          value: 2,
          label: "管理员"
        },
        {
          value: 0,
          label: "黑名单"
        }
      ]
    };
  },

  methods: {
    loadAll() {
      return {
        user: []
      };
    },

    querySearchAsync(queryString, cb) {
      var results = this.user.Account;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },

    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },



  },

  mounted() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5ca03011e09f0c258d208596/HNU_SE1601/4/Mail/User"
        )
        .then(res => {
          this.user = res.data.user.map(item => {
            return {
              ...item
        //      value: "选项1"
            };
          });
        })
      
    }
};*/
</script>
 