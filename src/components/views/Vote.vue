<template>
  <div id="vote">
    {{ $route.params.id
    }}. 안건입니다.
    <form>
      <input class="input" type="radio" id="true" value="true" v-model="checkedRef" />
      <label for="true">찬성</label>
      <br />
      <input class="input" type="radio" id="false" value="false" v-model="checkedRef" />
      <label for="false">반대</label>
      <br />
      <button class="button-next" @click.prevent="submit">다음</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import voteApi from "../../api/vote";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const checkedRef = ref("");
    const maxId = 2;
    const votes = [];
    const submit = () => {
      if (checkedRef.value) {
        let id = parseInt(route.params.id);
        let checked = checkedRef.value;
        let nextId = id + 1;
        votes.push(checked);
        store.dispatch("vote/setVote" + id, { checked });
        if (nextId > maxId) {
          router.push(String(nextId));
        } else {
          let studentid = store.getters["student/getStudentId"];
          let clubname = store.getters["student/getClubname"];
          let username = store.getters["student/getUsername"];
          let userinfo = {
            id: studentid,
            clubname: clubname,
            username: username,
          };
          for (var i = 0; i < votes.length; i++) {
            userinfo["vote" + String(parseInt(i) + 1)] = votes[i];
          }
          voteApi
            .submitVote(userinfo)
          router.push({
            name: "end",
            query: {},
          });
        }
      } else {
        alert("체크해주세요!");
      }
    };
    return {
      router,
      route,
      store,
      submit,
      checkedRef,
    };
  },
};
</script>
<style>
#vote {
  padding: 20px;
  background-color: #aadd00;
  border-radius: 20px;
}
</style>