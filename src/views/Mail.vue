 <template>
  <div class="home">
    <el-table :data="mail" style="width: 100%">
      <el-table-column prop="Mail_id" label="编号" width="200"></el-table-column>
      <el-table-column prop="From_Account" label="发送方" width="200"></el-table-column>
      <el-table-column prop="To_Account" label="接收方" width="200"></el-table-column>
      <el-table-column prop="SendTime" label="发送时间" width="200"></el-table-column>
      <el-table-column prop="Subject" label="主题" width="200"></el-table-column>
      <el-table-column label="状态" width="200">
        <template slot-scope="scope">
          <el-select placeholder="请选择" v-model="mail[scope.$index].value">
            <el-option
              v-for="item in options"
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

export default {
  name: "Mail",
  /*components: {
    HelloWorld
  },*/
  data: function() {
    return {
      mail: [],
      options: [
        {
          value: 1,
          label: "可用"
        },
        {
          value: 0,
          label: "停用"
        }
      ]
    };
  },
  mounted() {
    axios
      .get(
        "http://172.20.10.3:8080/SMTPMAIL/MailServlet"
      )
      .then(res => {
        this.mail = res.data.mail.map(item => {
          return {
            ...item
           // value: "选项1"
          };
        });
      });

  }
};
</script>
 