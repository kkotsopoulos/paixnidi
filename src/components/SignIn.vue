<template>
    <div>
      <img src="../assets/download.png" />
      <h1 class="text-2xl font-bold">Sign In</h1>
      <div class="register">
        <input type="email" v-model="signInEmail" placeholder="Enter email" required class="w-full h-12 p-2 mb-4 border border-gray-300" />
        <input type="password" v-model="signInPassword" placeholder="Enter password" required class="w-full h-12 p-2 mb-4 border border-gray-300" />
        <button @click="signIn" class="w-full h-12 bg-blue-500 text-white font-bold hover:bg-blue-700">
          Sign In
        </button>
        <button v-on:click="NewRegister" class="w-full h-12 bg-gray-300 text-gray-700 font-bold hover:bg-gray-400">
          Register Now
        </button>
      </div>
    </div>
  </template>
  
 <script>
 import axios from 'axios'
export default{
    name:'SignIn',
    data() {
  return {
    signInEmail: '',
    signInPassword: '',
  };
},
methods: {
    async NewRegister(){
        this.$router.push({name:'Register'})
    },
    
    async signIn() {
        if (!this.signInEmail || !this.signInPassword) {
        alert('Please fill in all required fields.');
        return;
      }
        
        let  response = await axios.get(`http://localhost:3000/users?email=${this.signInEmail}&password=${this.signInPassword}`);
        if (response.status==200 && response.data.length>0){
        localStorage.setItem("user-info",JSON.stringify(response.data[0]))
        this.$router.push({name:'HomePage'})
    } else{
        alert('Invalid Username or Password!')
    }
        console.warn(response)
    },
},
}



</script>
