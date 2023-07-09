<template>
    <div class="head">
    <a v-on:click="HomePage" href="#">Home          </a>
    <a v-on:click="LiveDraw" href="#">Live Draw        </a>
    <a v-on:click="logout" href="#">Logout       </a>
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
.head a{
    padding: 16px 14px;
    text-align: center;
    float: left;
    color: black;
    font-size: 25px;
    text-decoration: none;
}

</style>