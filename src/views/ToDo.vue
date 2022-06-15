<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      outlined
      label="해야할일 추가"
      append-icon="mdi-plus-box-multiple-outline"
      class="pa-3"
      hide-details
      clearable
      @click:append="addTask"
      @keyup.enter="addTask"
    />

    <div>
      <v-list
        v-if="tasks.length"
        class="pa-0"
        flat
      >
        <div
          v-for="(할일, idx) in tasks"
          :key="idx"
        >
          <v-list-item
            :class="{ 'blue lighten-5': 할일.done }"
            @click="doneTask(할일.id)"
          >
            <template>
              <v-list-item-action>
                <v-checkbox
                  :input-value="할일.done"
                  color="primary"
                />
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': 할일.done }"
                >
                  {{ idx+1 }} {{ 할일.title }}
                </v-list-item-title>
              </v-list-item-content>
              <v-btn
                icon
                @click.stop="deleteTask(할일.id)"
              >
                <v-icon color="primary lighten-1">
                  mdi-delete
                </v-icon>
              </v-btn>
            </template>
          </v-list-item>
          <v-divider />
        </div>
      </v-list>

      <div
        v-else
        class="no-tasks"
      >
        <v-icon
          size="100"
          color="primary"
        >
          mdi-check
        </v-icon><br>
        <div class="text-h5 primary--text">
          할일 없냐?
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      tasks: [
        { id: 1, title: "학교 가기", done: false },
        { id: 2, title: "학식 먹기", done: true },
        { id: 3, title: "과제 하기", done: false },
      ],
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle = "";
    },
    doneTask(id) {
      let 할일 = this.tasks.filter((할일) => 할일.id === id)[0];
      할일.done = !할일.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((할일) => 할일.id !== id);
      console.log(this.tasks);
    },
  },
};
</script>

<style lang="sass">

.no-tasks
  position: absolute
  left:50%
  top:50%
  transform: translate(-50%,-50%)
  opacity:0.6
</style>
