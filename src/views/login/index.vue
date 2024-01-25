<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <h1>Hello</h1>
          <h2>Welcome to GuiGuZhenXuan</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              show-password
              type="password"
              v-model="loginForm.password"
              @keydown.enter="login"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
              :loading="isLoading"
              :disabled="isLoading || !isValidated"
            >
              Login
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import { User, Lock } from '@element-plus/icons-vue';
import { ElNotification } from 'element-plus';
import { getTimeMessage } from '@/utils/time';

let userStore = useUserStore();
let $router = useRouter();
let $route = useRoute();

let isLoading = ref(false);
let loginForm = reactive({
  username: 'admin',
  password: 'atguigu123',
});

let loginFormRef = ref();

const login = async () => {
  await loginFormRef.value.validate();
  isLoading.value = true;
  try {
    /* if (!loginForm.username || !loginForm.password) {
      throw new Error('Username or password is empty');
    } */
    await userStore.userLogin(loginForm);
    let redirect: any = $route.query.redirect;
    $router.push({ path: redirect || '/' });
    ElNotification({
      type: 'success',
      title: getTimeMessage(),
      message: 'Login success',
    });
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    });
  } finally {
    isLoading.value = false;
  }
};

let isValidated = ref(false);

const ValidateUsername = (rule: any, value: any, callback: any) => {
  if (/^[a-zA-Z0-9]{5,10}$/.test(value)) {
    isValidated.value = true;
    callback();
  } else {
    isValidated.value = false;
    callback(
      new Error(
        'Username length should be between 5 to 10 ( numbers or letters )',
      ),
    );
  }
};
const ValidatePassword = (rule: any, value: any, callback: any) => {
  if (/^[a-zA-Z0-9]{6,10}$/.test(value)) {
    isValidated.value = true;
    callback();
  } else {
    isValidated.value = false;
    callback(
      new Error(
        'Password length should be between 6 to 10 ( numbers or letters )',
      ),
    );
  }
};

const rules = {
  username: [
    {
      validator: ValidateUsername,
      trigger: 'blur',
    },
    {
      validator: ValidateUsername,
      trigger: 'change',
    },
  ],
  password: [
    {
      validator: ValidatePassword,
      trigger: 'blur',
    },
    {
      validator: ValidatePassword,
      trigger: 'change',
    },
  ],
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
