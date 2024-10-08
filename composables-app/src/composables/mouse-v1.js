import { ref, onMounted, onUnmounted } from "vue";

function useMouse() {
    const x = ref(0);
    const y = ref(0);

    function update(event) {
        x.value = event.pageX;
        y.value = event.pageY;
    }
    onMounted(() => {
        window.addEventListener("mousemove", update);
    });
    onUnmounted(() => {
        window.removeEventListener("mousemove", update);
    });
    //return x and values
    return {
        x, y
    }
}

export { useMouse }