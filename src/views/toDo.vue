<template>
  <div>
    <div>Tasks to do :</div>
    <br />

    <select v-model="selected">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option></select
    ><br />
    <!-- <Select :options="options" v-model="selected" /> -->
    <p
      v-for="(item, index) in filter()"
      :class="item.checked ? 'checked' : ''"
      :key="index"
      style="white-space: pre-line"
    >
      <input type="checkbox" v-model="item.checked" />
      {{ item.id }}) {{ item.message }}
      <button @click="removeItem(index)">suppr</button>
    </p>

    <input @keyup.enter.prevent="addMess" v-model="message" autofocus /> <br />
  </div>
</template>

<script setup>
import { computed, ref} from 'vue'

const storedTodos = localStorage.getItem('todo')

function saveTodos() {
  localStorage.setItem('todo', JSON.stringify(td.value))
  console.log(localStorage.getItem('todo'))
}


const message = ref('')
const td = ref(storedTodos ? JSON.parse(storedTodos) : [])
const count = computed(() => {
  return td.value.length > 0 ? td.value[td.value.length - 1].id : 0
})

const addMess = () => {
  td.value.push({ checked: false, message: message.value, id: count.value + 1 })
  message.value = ''
  saveTodos()
}

const selected = ref('all')

const options = ref([
  { text: 'all', value: 'all' },
  { text: 'toDo', value: 'toDo' },
  { text: 'done', value: 'done' },
])

const filter = () => {
  if (selected.value === 'all') {
    return td.value
  } else if (selected.value === 'toDo') {
    return td.value.filter((item) => !item.checked)
  } else if (selected.value === 'done') {
    return td.value.filter((item) => item.checked)
  }
}

const removeItem = (index) => {
  if (index !== -1) {
    td.value.splice(index, 1)
    saveTodos()
  }
}

</script>

<style scoped>
.checked {
  text-decoration: line-through;
  color: rgb(3, 171, 0);
}

* {
  text-align: left;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

div {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

select {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 16px;
}

p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  margin: 6px 0;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ddd;
}

p:hover {
  background-color: #f0f0f0;
}

input[type='checkbox'] {
  margin-right: 10px;
  transform: scale(1.2);
}

input[type='text'] {
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 10px;
}

button {
  padding: 4px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

button:hover {
  background-color: #cc0000;
  transform: scale(1.05);
}
</style>
