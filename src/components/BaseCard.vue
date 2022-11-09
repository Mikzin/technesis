<template>
  <v-container class="card__container">
    <v-card class="card__item rounded-0" flat="true">
      <v-card-title class="card__title">{{ title }}</v-card-title>
      <base-list
        :cardRate="rate"
        :cardType="type"
        :cardWay="way"
        :cardDate="date"
        :cardDuration="duration"
        :cardQuantity="quantity"
      ></base-list>
    </v-card>
  </v-container>
</template>

<script>
import BaseList from './BaseItem.vue';

export default {
  components: { BaseList },
  props: ['title', 'rate', 'type', 'way', 'date', 'duration', 'quantity'],
};
</script>

<style lang="scss">
.card__container {
  border-bottom: 1px solid grey;
  max-width: 100%;
  width: 1124px;

  .card__item {
    padding: 10px;
    cursor: pointer;

    &:hover {
      color: #e67a1c;

      &:hover .card__item-icon {
        color: #e67a1c;
      }
    }
  }
}
</style>
