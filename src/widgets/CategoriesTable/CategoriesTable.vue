<template>
  <table v-if="categoriesStore?.categories?.length" class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Название категории</th>
    </tr>
    </thead>

    <transition-group name="list" tag="tbody">
      <tr v-for="(category, index) of categoriesStore.categories" :key="category.title" class="table__tr">
        <th scope="row">{{index + 1}}</th>

        <td data-cy="category-title">{{category.title}}</td>

        <td>
          <div class="buttons">
            <TogglePopup v-slot="props">
              <FillEditingCategory :id="category.id" :on-click="props.togglePopup"/>
            </TogglePopup>

            <DeleteCategory :id="category.id"/>
          </div>
        </td>
      </tr>
    </transition-group>
  </table>

  <p v-else>Пока что вы не создали ни одну категорию</p>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import DeleteCategory from "@/features/categories/DeleteCategory.vue";
import SuccessButton from "@/shared/ui/SuccessButton.vue"
import TogglePopup from "@/features/popup/TogglePopup.vue";
import FillEditingCategory from "@/features/categories/FillEditingCategory.vue"
import {delay} from '@/shared/helpers/index'

const categoriesStore = useCategoriesStore()

await categoriesStore.getAll()
</script>

<style scoped>
.align__right {
  text-align: right;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.table__tr {
  animation-name: showTableRow;
  animation-duration: 1s;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}

.list-enter-to, .list-leave-from {
  opacity: 1;
  transform: translateX(0);
}


</style>