<template>

    <div class="contenido">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <iframe src="" frameborder="0"></iframe>
    </div>
</template>


<script>
export default {
    props : {

        title : {
            type: String,
            required : true
        }, 
        description : {
            type: String,
            required : true
        }
    }
}

</script>


<style scoped>

</style>