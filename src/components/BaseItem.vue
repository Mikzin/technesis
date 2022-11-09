<template>
  <v-row no-gutters class="card__list">
    <v-row class="fill-height" no-gutters v-if="cardRate" justify="center">
      <v-icon class="card__item-icon">{{ starIcon }}</v-icon>
      {{ cardRate }}
    </v-row>

    <v-icon class="card__item-icon" v-if="cardRate">{{ circleIcon }}</v-icon>

    <v-row class="fill-height" no-gutters justify="center">
      {{ cardType }}
    </v-row>

    <v-icon v-if="!xsmall" class="card__item-icon">{{ circleIcon }}</v-icon>

    <v-row v-if="!xsmall" class="fill-height" no-gutters justify="center">
      <v-icon class="card__item-icon">{{ trainIcon }}</v-icon>
      {{ cardWay }}
    </v-row>

    <v-icon v-if="!small" class="card__item-icon">{{ circleIcon }}</v-icon>

    <v-row v-if="!small" class="fill-height" no-gutters justify="center">
      {{ cardDate }}
    </v-row>

    <v-icon v-if="!medium" class="card__item-icon">{{ circleIcon }}</v-icon>

    <v-row class="fill-height" no-gutters v-if="!medium" justify="center">
      <v-icon class="card__item-icon">{{ timeIcon }}</v-icon>
      {{ cardDuration }}
    </v-row>

    <v-icon class="card__item-icon" v-if="cardQuantity && !medium">{{
      circleIcon
    }}</v-icon>

    <v-row
      class="fill-height"
      no-gutters
      v-if="cardQuantity && !medium"
      justify="center"
    >
      <v-icon class="card__item-icon">{{ quantityIcon }}</v-icon>
      {{ cardQuantity }}
    </v-row>
  </v-row>
</template>

<script>
import { mdiStarOutline } from '@mdi/js';
import { mdiCircleSmall } from '@mdi/js';
import { mdiBus } from '@mdi/js';
import { mdiClockOutline } from '@mdi/js';
import { mdiAccount } from '@mdi/js';

export default {
  data() {
    return {
      starIcon: mdiStarOutline,
      circleIcon: mdiCircleSmall,
      trainIcon: mdiBus,
      timeIcon: mdiClockOutline,
      quantityIcon: mdiAccount,
      medium: false,
      small: false,
      xsmall: false,
    };
  },
  props: [
    'cardRate',
    'cardType',
    'cardWay',
    'cardDate',
    'cardDuration',
    'cardQuantity',
  ],
  methods: {
    onResize() {
      this.medium = window.innerWidth <= 650;
      this.small = window.innerWidth <= 450;
      this.xsmall = window.innerWidth <= 350;
    },
  },
  created() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
