<template>
  <v-row>
    <v-col cols="10">
      <v-text-field v-model="search" label="Pesquisar"></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-btn elevation="2" color="primary" block to="students/register">Cadastrar</v-btn>
    </v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Registro Academico</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student of students" :key="student.id">
              <td>{{ student.ra }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.cpf }}</td>
              <td>Botoẽs</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import api from "../../services/api";

@Component({
  components: {},
  data: () => ({
    search: "",
    students: [],
  }),
  mounted() {
    api
      .get("students")
      .then((response) => (this.students = response.data))
      .catch((error) => console.error(error));
  },
})
export default class StudentList extends Vue {}
</script>
