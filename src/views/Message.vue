<template>
  <div class="about">
    <el-row>
      <el-col :span="24">
        <div class="head">基本信息</div>
      </el-col>
      <el-col :span="12">
        <div class="IP">IP地址：</div>
      </el-col>
      <el-col :span="12">
        <div class="ianswer">127.0.0.1</div>
      </el-col>
      <el-col :span="12">
        <div class="system">系统版本：</div>
      </el-col>
      <el-col :span="12">
        <div class="sanswer">1.0</div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="smtp_head">SMTP协议</div>
      </el-col>
      <el-col :span="24">
        <div class="smtp_IP">协议介绍</div>
      </el-col>
      <el-col :span="12">
        <div class="smtp_thing">SMTP是一个相对简单的基于文本的协议。在其之上指定了一条消息的一个或多个接收者（在大多数情况下被确认是存在的），
          然后消息文本会被传输。可以很简单地通过telnet程序来测试一个SMTP服务器。  SMTP使用TCP端口25。要为一个给定的域名决定一个SMTP服务器，需要使用MX (Mail eXchange) DNS。</div>
      </el-col>
    </el-row>
  
    <el-row>
      <el-col :span="24">
        <div class="pop3_head">POP3协议</div>
      </el-col>
      <el-col :span="24">
        <div class="pop3_IP">协议介绍</div>
      </el-col>
      <el-col :span="12">
        <div class="pop3_thing">POP3，全名为“Post Office Protocol - Version 3”，即“邮局协议版本3”。是TCP/IP协议族中的一员，由RFC1939 定义。
          本协议主要用于支持使用客户端远程管理在服务器上的电子邮件。提供了SSL加密的POP3协议被称为POP3S。</div>
        <div class="pop3_thing">POP 协议支持“离线”邮件处理。其具体过程是：邮件发送到服务器上，电子邮件客户端调用邮件客户机程序以连接服务器，并下载所有未阅读的电子邮件。这种离线访问模式是一种存储转发服务，将邮件从邮件服务器端送到个人终端机器上，一般是PC机或 MAC。
          一旦邮件发送到 PC 机或MAC上，邮件服务器上的邮件将会被删除。但目前的POP3邮件服务器大都可以“只下载邮件，服务器端并不删除”，也就是改进的POP3协议。</div>
      </el-col>
    </el-row>

  </div>
</template>

<style>
.head {
  font-size: 40px;
  border-radius: 20px;
  min-height: 50px;
  margin-bottom: 20px;
  color: dimgray;
}
.IP {
  font-size: 20px;
  border-radius: 20px;
  min-height: 30px;
  margin-bottom: 10px;
}
.ianswer {
  font-size: 20px;
  border-radius: 20px;
  min-height: 30px;
  margin-bottom: 10px;
}
.system {
  font-size: 20px;
  border-radius: 20px;
  min-height: 30px;
  margin-bottom: 10px;
}
.sanswer {
  font-size: 20px;
  border-radius: 20px;
  min-height: 30px;
  margin-bottom: 60px;
}

.smtp_head {
  font-size: 40px;
  border-radius: 20px;
  min-height: 50px;
  margin-bottom: 20px;
  color: dimgray;
}
.smtp_IP {
  font-size: 20px;
  border-radius: 20px;
  min-height: 30px;
  margin-bottom: 10px;
}
.smtp_thing {
  font-size: 15px;
  border-radius: 20px;
  min-height: 30px;
  margin-bottom: 60px;
}

.pop3_head {
  font-size: 40px;
  border-radius: 20px;
  min-height: 50px;
  margin-bottom: 20px;
  color: dimgray;
}
.pop3_IP {
  font-size: 20px;
  border-radius: 20px;
  min-height: 30px;
  margin-bottom: 10px;
}
.pop3_thing {
  font-size: 15px;
  border-radius: 20px;
  min-height: 30px;
  margin-bottom: 10px;
}
</style>

<script>
export default {
    data() {
      return {
        value5: '100'
      }
    }
  };
</script>
