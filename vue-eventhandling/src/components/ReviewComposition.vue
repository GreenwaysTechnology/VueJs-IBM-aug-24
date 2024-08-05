<!-- <script>
export default {
  setup() {
    let like = 0;
    let dislike = 0;

    //listener
    const onLike = () => {
      console.log("onLike");
      like++;
    };

//this object which contains variables not reactive by default
    return {
      like,
      dislike,
      onLike,
    };
  },
};
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ like }} Dislike {{ dislike }}</h1>
    <button @click="onLike">Like</button>
  </div>
</template>
<style></style> -->

<!-- <script>
import { ref } from "vue";
export default {
  setup() {
    //variables must be converted into reactive
    let like = ref(0);
    let dislike = ref(0);
    console.log(like.value);

    //listener
    const onLike = () => {
      console.log("onLike");
      like.value++;
    };
    const onDislike = () => {
      console.log("onLike");
      dislike.value++;
    };

    //this object which contains variables not reactive by default
    return {
      like,
      dislike,
      onLike,
      onDislike
    };
  },
};
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ like }} Dislike {{ dislike }}</h1>
    <button @click="onLike">Like</button>
    <button @click="onDislike">Dislike</button>
  </div>
</template>
<style></style> -->

<!-- <script setup>
import { ref } from "vue";
//variables must be converted into reactive
let like = ref(0);
let dislike = ref(0);
//listener
const onLike = () => {
  console.log("onLike");
  like.value++;
};
const onDislike = () => {
  console.log("onLike");
  dislike.value++;
};
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ like }} Dislike {{ dislike }}</h1>
    <button @click="onLike">Like</button>
    <button @click="onDislike">Dislike</button>
  </div>
</template>
<style></style> -->

<!-- Passing values to listener -->
<!-- <script setup>
import { ref } from "vue";
//variables must be converted into reactive
let like = ref(0);
let dislike = ref(0);
//listener
const onLike = (incrementer, evt) => {
  like.value += incrementer;
};
const onDislike = () => {
  dislike.value++;
};
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ like }} Dislike {{ dislike }}</h1>
    <button @click="onLike(4, $event)">Like</button>
    <button @click="onDislike">Dislike</button>
  </div>
</template>
<style></style> -->

<!-- <script setup>
import { ref } from "vue";
let like = ref(0);
let dislike = ref(0);
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ like }} Dislike {{ dislike }}</h1>
    <button @click="like++">Like</button>
    <button @click="dislike++">Dislike</button>
  </div>
</template>
<style></style> -->

<!-- <script setup>
import { ref } from "vue";
let review = ref({ like: 0, dislike: 0 });
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ review.like }} Dislike {{ review.dislike }}</h1>
    <button @click="review.like++">Like</button>
    <button @click="review.dislike++">Dislike</button>
  </div>
</template>
<style></style> -->

<!-- <script setup>
import { ref } from "vue";
let review = ref({ like: 0, dislike: 0 });

const onLike = ()=>{
    review.value.like++
}
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ review.like }} Dislike {{ review.dislike }}</h1>
    <button @click="onLike">Like</button>
    <button @click="review.dislike++">Dislike</button>
  </div>
</template>
<style></style> -->

<!-- reactvie Object -->
<!-- <script setup>
import { reactive } from "vue";
let review = reactive({ like: 0, dislike: 0 });

const onLike = ()=>{
    review.like++
}
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ review.like }} Dislike {{ review.dislike }}</h1>
    <button @click="onLike">Like</button>
    <button @click="review.dislike++">Dislike</button>
  </div>
</template>
<style></style> -->

<!-- ShallowReactive -->
<!-- <script setup>
import { shallowReactive } from 'vue'

//deep nesting
const comments = shallowReactive({
    like: 0,
    dislike: 0,
    recommend: {
        rating: {
            value: 0
        }
    }
})

</script>
<template>
    <div>
        <h1>Reactive State</h1>
        <h1>Like : {{comments.like}} Dislike {{comments.dislike}} Rating {{comments.recommend.rating.value}}</h1>
        <button @click="comments.like++">Like</button>
        <button @click="comments.dislike++">Dislike</button>
        <button @click="comments.dislike++">Dislike</button>
        <button @click="comments.recommend.rating.value++">Rating</button>

    </div>
</template> -->

<script setup>
import { reactive, toRefs } from "vue";
//Object destruction
let { like, dislike } = toRefs(reactive({ like: 0, dislike: 0 }));

const onLike = () => {
  like.value++;
};
</script>
<template>
  <div>
    <h1>Review Component</h1>
    <h1>Like {{ like }} Dislike {{ dislike }}</h1>
    <button @click="onLike">Like</button>
    <button @click="dislike++">Dislike</button>
  </div>
</template>
<style></style>
