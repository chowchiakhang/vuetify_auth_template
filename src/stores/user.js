import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const name = ref(null)
    // const getName = computed(() => name.value)
    // return { name, getName }
    function setName(newName) {
        name.value = newName
    }
    return { name, setName }
})

