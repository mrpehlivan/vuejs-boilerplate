<template>
    <div class="container">
        <img  style="header" src="/images/logo.png" />
        <div>
            <h1 style="margin-left:10%">{{ message }} </h1>

            <input  class="clickButton" type="button" v-on:click="testMethod(message)" value="CLICK ME"/>
        </div>
    </div>


</template>
<script>
    export default {
        ready(){
        console.log(" ready !!!");
        },
        data: function () {
            return {
                message:"HELLO WORLD!",

            }
        },
        methods: {
          testMethod(message){
              alert(message)
          }
        }
    }
</script>
<style>
.container{
    background-color: #ffffff;
    margin-left: 40%;
}

.header{
    margin-left: 50px;
}
.clickButton {
    background: #fff;
    -webkit-appearance: none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
    position: relative;
    display: block;
    width: 40%;
    top: 50%;
    color: #009CDE;
    border: 1px solid #009CDE;
    font-weight: 700;
}

</style>
