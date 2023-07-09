 <template>
    <img src="../assets/download.png"/>
    <h1> Register</h1>
    <form ref="registerForm" @submit.prevent="NewRegister"></form>
    <div class="register">
        <input type="email" v-model="email" placeholder="Enter email" required  />
        <input type="password" v-model="password" placeholder="Enter password" required  />
        <button v-on:click="NewRegister"> Register </button>
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
    console.warn(result);
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
</style>