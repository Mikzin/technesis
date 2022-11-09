<template>
  <v-app>
    <v-main>
      <base-card
        v-for="card in $store.state.cards"
        :key="card.title"
        :title="card.title"
        :rate="card.rate"
        :type="card.type"
        :way="card.way"
        :date="card.date"
        :duration="card.duration"
        :quantity="card.quantity"
      ></base-card>
    </v-main>
  </v-app>
</template>

<script>
import BaseCard from './components/BaseCard.vue';

export default {
  name: 'App',

  components: { BaseCard },
};
</script>
