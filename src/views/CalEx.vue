<template>
  <v-app style="padding: 200px;">
    <v-container>
      <v-row id="calculator">
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model.number="num1"
            label="Number1"
            filled
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model.number="num2"
            label="Number2"
            filled
          />
        </v-col>
        <v-col
          align="center"
        >
          <v-btn
            style="margin-right: 10px;"
            @click="addNum()"
          >
            더하기
          </v-btn>
          <v-btn
            style="margin-right: 10px;"
            @click="subNum()"
          >
            빼기
          </v-btn>
          <v-btn
            style="margin-right: 10px;"
            @click="mulNum()"
          >
            곱하기
          </v-btn>
          <v-btn @click="divNum()">
            나누기
          </v-btn>
        </v-col>
      </v-row>
      <v-text
        v-model.number="answer"
        align="center"
      >
        <br><br>
        <h1>ANSWER: {{ answer }}</h1>
      </v-text>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      num1: '',
      num2: '',
      answer: ''
    }),
    methods: {
      addNum() {
        this.answer = this.num1 + this.num2;
      },
      subNum() {
        this.answer = this.num1 - this.num2;
      },
      mulNum() {
        this.answer = this.num1 * this.num2;
      },
      divNum() {
        this.answer = this.num1 / this.num2;
      }
    }
  }
</script>

