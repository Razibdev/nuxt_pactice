<template>
    <div>
        <h3>{{ post.id }} {{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>
import {ref} from 'vue';
export default{
   async setup(){
        const post = ref({
            id: '',
            title: '',
            body: ''
        });

       await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                post.value.id = data.id;
                post.value.title = data.title;
                post.value.body = data.body;
                console.log(data);
            });

        return{
            post
        }

    }
}
</script>