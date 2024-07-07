<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
      if (username.value === 'admin' && password.value === 'password') {
        router.push({ path: '/admin-home' });
      } else {
        alert('Invalid credentials');
      }
    };

    return {
      username,
      password,
      login
    };
  }
};
</script>

<style>
</style>
