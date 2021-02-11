<template>
  <div class="admin">
    <button @click="deleteList">투표 삭제</button>
    <button @click="getList">리스트 불러오기</button>
    <table border="1">
      <th>학번</th>
      <th>동아리명</th>
      <th>이름</th>
      <th v-for="n in voteCount" :key="n">안건 {{n}}</th>
      <tr v-for="value in values" :key="value.id">
        <td v-for="data in value" :key="data.id">{{data}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import adminApi from "@/api/admin";
import { ref } from "vue";

export default {
  setup() {
    const voteCount = ref(0);
    const values = ref({});
    function getList() {
      console.log("getList");
      adminApi
        .getList()
        .then((response) => {
          console.log(response.data);
          values.value = response.data;
          voteCount.value = Object.keys(response.data[0]).length - 3;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    function deleteList() {
      let check = window.confirm("정말 삭제하시겠습니까?");
      if (check) {
        adminApi
          .deleteList()
          .then(() => {
            alert("삭제 성공");
            values.value = {};
          })
          .catch((error) => {
            console.log(error);
            if (error.response) {
              console.log(error.response.status);
              alert("삭제에 실패했습니다.");
            }
          });
      }
    }
    return { getList, deleteList, voteCount, values };
  },
};
</script>
<style scoped>
.admin {
  display: flex;
  flex-direction: column;
}
.admin button {
  margin-bottom: 2rem;
}
</style>