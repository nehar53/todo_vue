<template>
  <div
    class="
      h-100
      w-full
      flex
      items-center
      justify-center
      bg-teal-lightest
      font-sans
    "
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
       
	
      <div class=" flex justify-between">
        <strong class="text-grey-darkest">Todo List</strong>
        <router-link to="/pagination">
          <button
            class="
              flex-no-shrink
              p-2
              border-2
              rounded
              text-teal
              border-teal
              hover:text-white
              hover:bg-black
            "
            type="button"
          >
           Click for Pagination Work here.
          </button>
        </router-link>
      
    </div>
        <div class="flex mt-4">
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              mr-4
              text-grey-darker
            "
            placeholder="Add Todo"
            v-model="newTodo"
          />
          <button
            class="
              flex-no-shrink
              p-2
              border-2
              rounded
              text-teal
              border-teal
              hover:text-white
              hover:bg-black
            "
            type="submit"
            @click="addTodo"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        <strong> Displaying All List Here...</strong>
        <div
          v-for="(todo, index) in todos"
          :key="todo.id"
          class="flex mb-4 items-center"
        >
          <p class="w-full text-grey-darkest">
            {{ index + 1 }}. {{ todo.title }}
          </p>

          <button
            class="
              flex-no-shrink
              p-2
              ml-2
              border-2
              rounded
              text-red
              border-red
              hover:text-white
              hover:bg-black
            "
            type="submit"
            @click="removeTodo"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "todo-list",
  data() {
    return {
      newTodo: "",

      todos: [],
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.todos.push({
        title: this.newTodo,
      });
      this.newTodo = "";
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
  