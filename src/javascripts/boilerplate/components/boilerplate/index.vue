<template>
    <div>
        <p>You can see the message : {{ message }} </p>
    </div>
    <div>
        <input type="button" v-on:click="testMethod(message)" value="Click me !"/>
    </div>
</template>
<script>
    export default {
        ready(){
        console.log(" ready !!!");
        },
        data: function () {
            return {
                message:"hello world ! ",
                secondMessage : "HELLO WORLD!"

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

</style>
