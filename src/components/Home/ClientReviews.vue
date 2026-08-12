<script setup>
import ReviewCard from '../ReviewCard.vue'

import { Vue3Marquee } from 'vue3-marquee'

const reviews = [
  {
    username: 'plast711',
    region: 'United States',
    stars: 5,
    comment: 'I recommend this person if you want addons made.',
    price: 'Up to $50',
    duration: '3 days',
  },
  {
    username: 'lexluthor059103',
    region: 'United States',
    stars: 5,
    comment: '5/5 Exactly what I asked for and for a fair price too',
    price: 'Up to $50',
    duration: '12 days',
  },
  {
    username: 'thebeast242',
    region: 'United States',
    stars: 5,
    comment: 'I enjoyed working with him time zone was a small problem but he did well',
    price: 'Up to $50',
    duration: '11 days',
  },
  {
    username: 'jgarcia405',
    region: 'United States',
    stars: 5,
    comment: 'The addon turned out great. Turned out just as I had hoped.',
    price: 'Up to $50',
    duration: '8 days',
  },
  {
    username: 'blaisekey',
    region: 'United States',
    stars: 5,
    comment: 'I love this dudes coding skills',
    price: 'Up to $50',
    duration: '1 day',
  },
  {
    username: 'safxgamx',
    region: 'United States',
    stars: 5,
    comment: 'I loved the mod it was perfect and exactly how I wanted it',
    price: 'Up to $50',
    duration: '4 days',
  },
  {
    username: 'itsuki56',
    region: 'Japan',
    stars: 5,
    comment:
      "I ordered to make an Anti-toxic mask for my RP Server, and I liked it so much! It's working very well as expected. I'll want to order more in the future!",
    price: 'Up to $50',
    duration: '8 days',
  },
  {
    username: 'samuelg4',
    region: 'Mexico',
    stars: 5,
    comment:
      'Dave, es un gran desarrollador, me encanto el resultado. Buena comunicación, gran entendimiento, altamente recomendado.',
    price: 'Up to $50',
    duration: '10 days',
  },
  {
    username: 'wintermdev',
    region: 'United States',
    stars: 5,
    comment:
      'Always amazing to work with! Happy to communicate and commission this person! I highly recommend!',
    price: 'Up to $50',
    duration: '10 days',
  },
  {
    username: 'tigerxxmc',
    region: 'United Kingdom',
    stars: 5,
    comment: 'Goated Developer Everyone buy from him',
    price: 'Up to $50',
    duration: '4 days',
  },
  {
    username: 'markusell',
    region: 'Belarus',
    stars: 5,
    comment: 'good code and delivery 👍',
    price: 'Up to $50',
    duration: '1 day',
  },
  {
    username: 'markikkifee',
    region: 'Germany',
    stars: 5,
    comment: 'he was very polite and communicative. Im very satisfied',
    price: 'Up to $50',
    duration: '4 weeks',
  },
]
</script>

<template>
  <div class="review">
    <div class="review-card-wrapper">
      <div ref="container" class="review-card-container">
        <Vue3Marquee :duration="32" :pause-on-hover="true" class="reviews">
          <ReviewCard
            v-for="(review, index) in reviews"
            :key="`${review.username}-${index}`"
            v-bind="review"
          />
        </Vue3Marquee>
      </div>
    </div>
  </div>
</template>

<style>
.review-card-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;

  padding-block: 80px;
  margin-block: -80px;

  --fade-size: 120px;
  --fade-color: #101010;
}

.review-card-container {
  width: 130%;
  padding-top: 48px;
  margin-top: 48px;
  padding-bottom: 48px;

  overflow: hidden;
  position: relative;

  transform: translateX(-8%) rotate(8deg);
}

.reviews {
  padding-top: 28px;
  overflow: hidden;
}
</style>
