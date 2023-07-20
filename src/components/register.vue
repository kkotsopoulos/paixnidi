<template>
    <div>
    <img src="../assets/download.png" />
    <h1 class="text-4xl font-bold mb-4">Register</h1>
      <div class="register">
        <input type="text" v-model="email" placeholder="Enter email" required class="w-full h-12 p-2 mb-4 border border-gray-300" />
        <input type="password" v-model="password" placeholder="Enter password" required class="w-full h-12 p-2 mb-4 border border-gray-300" />
        <button @click="NewRegister" class="w-full h-12 bg-blue-500 text-white font-bold hover:bg-blue-700">
          Register
        </button>
      </div>
    </div>
  </template>
 <script>
 import axios from 'axios'
export default{
    name:'NewRegister',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async NewRegister(){
            if (!this.email || !this.password) {
        alert('Please fill in all required fields.');
        return;
      }
           
    let result = await axios.post("http://localhost:3000/users",
    {
        email: this.email,
        password: this.password
    });
   
    if (result.status==201){
        alert("Register Succesful");
        localStorage.setItem("user-info",JSON.stringify(result.data))
    }
    if (result.status!=201){
        alert("Register unsuccesful");
    }
}
    }
}

  


</script>
<style>
.register input{
    display: block;
    width: 450px;
    height: 45px;
    margin-left: auto;
    margin-right: auto;
}
.register button {
    width: 150px;
    height: 45px;
    background-color: skyblue;
    cursor: pointer;
}
.register button:hover {
  background-color: #1c3d7d;
}
</style>