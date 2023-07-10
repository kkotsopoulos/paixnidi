<template>
    <div class="head bg-beige overflow-hidden">
        <a @click="HomePage" href="#" class="head-link">Home</a>
    <a @click="LiveDraw" href="#" class="head-link">Live Draw</a>
    <a @click="logout" href="#" class="head-link">Logout</a>
    </div>
</template>
<script>
export default {
    name: 'HeaderPage',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'SignIn'})
        },
        HomePage(){
            localStorage.clear();
            this.$router.push({name:'HomePage'})
        },
        LiveDraw(){
            localStorage.clear();
            this.$router.push({name:'DrawPage'})
        }
    }
}
</script>
<style>
.head{
    background-color:beige ;
    overflow: hidden;
    padding: 16px;
   
}
.head a.head-link {
  padding: 10px;
  margin-right: 10px;
  color: black;
  font-size: 30px;
  text-decoration: none;
  float: left;
}

</style>