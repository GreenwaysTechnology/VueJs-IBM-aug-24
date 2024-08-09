<!-- <script setup>

const onSubmit = event => {
    if (event) {
        event.preventDefault();
    }
}

</script>
<template>
    <div>
        <form action="http://www.google.com">
            <button @click="onSubmit">Submit</button>
        </form>
    </div>
</template> -->


<script setup>

const onSubmit = event => {
    alert('Form to be Submitted')
}

</script>
<template>
    <div>
        <form @submit.prevent="onSubmit">
            <button>Submit</button>
        </form>
    </div>
</template>