<template>
  <table v-if="advantageStore.advantages.length" class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Название преимущества</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(advantage, index) of advantageStore.advantages" :key="advantage.title">
      <th scope="row">{{index + 1}}</th>

      <td data-cy="advantage-title">{{advantage.title}}</td>

      <td class="input-cell" data-cy="advantage-title">
        <EditDescription v-model="advantageStore.updatingAdvantage.description" :id="advantage.id"/>
      </td>

      <td>
        <div class="buttons">
          <TogglePopup  v-slot="props">
            <FillUpdatingAdvantage :id="advantage.id" :on-click="props.togglePopup"/>
          </TogglePopup>
          <DeleteAdvantage :id="advantage.id"/>
        </div>
      </td>
    </tr>
    </tbody>
  </table>

  <p v-else>Пока что вы не создали ни одно преимущество</p>
</template>

<script setup lang="ts">
import TogglePopup from "@/features/popup/TogglePopup.vue";
import FillEditingCategory from "@/features/categories/FillEditingCategory"
import {useAdvantagesStore} from "@/features/advantages/advantagesStore";
import DeleteAdvantage from "@/features/advantages/DeleteAdvantage.vue";
import FillUpdatingAdvantage from "@/features/advantages/FillUpdatingAdvantage.vue";
import { computed, ref } from "vue";
import EditDescription from "@/features/advantages/EditDescription.vue";

const advantageStore = useAdvantagesStore()
</script>

<style lang="scss" scoped>
.align__right {
  text-align: right;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
.input-cell {
  position: relative;
}

td {
  &:nth-child(1) {
    width: 10%;
  }

  &:nth-child(2) {
    width: 30%;
  }

  &:nth-child(3) {
    width: 50%;
  }
}
</style>