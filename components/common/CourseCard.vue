<template>
  <div :class="$style.cardWrapper">
    <div :class="$style.cardHeader">
      <p :class="$style.cardTitle">{{ cardData.title }}</p>
      <nuxt-img preload src="/Heart.svg" :class="$style.cardEntriesImg" />
    </div>
    <div :class="$style.orgDataWrapper">
      <nuxt-img preload :src="cardData.organisationLogo" :class="$style.orgDataImg" />
      <div :class="$style.orgDataText">
        <p :class="$style.name">{{ cardData.organisationName }}</p>
        <p :class="$style.type">{{ cardData.courseType }}</p>
      </div>
    </div>
    <div :class="$style.mainContentWrapper">
      <p :class="$style.shortDescription">{{ cardData.shortDescription }}</p>
      <nuxt-img preload :src="cardData.courseImg" :class="$style.courseImg" />
    </div>
    <div :class="$style.moreInfoWrapper">
      <div :class="$style.moreInfoPoint">
        <p>Рейтинг:</p>
        <p>{{ cardData.rating }}</p>
      </div>
      <div :class="$style.moreInfoPoint">
        <p>Стоимость:</p>
        <p>от {{ cardData.courseCost }} тыс</p>
      </div>
      <div :class="$style.moreInfoPoint">
        <p>Длительность:</p>
        <p>{{ cardData.courseLength }} месяца</p>
      </div>
      <div :class="$style.moreInfoPoint">
        <p>Идет набор</p>
        <p>Мест оталось: {{ cardData.freePlaces }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface cardProps {
  id: number | string;
  title: string;
  organisationLogo: string;
  organisationName: string;
  courseType: string;
  shortDescription: string;
  courseImg: string;
  rating: number;
  courseCost: number;
  freePlaces: number;
  courseLength: number;
}

const props = defineProps({
  cardData: {
    type: Object as PropType<cardProps>,
    required: true,
  },
});
</script>

<style scoped lang="scss" module>
.cardWrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 50.8rem;
  height: 62.1rem;
  padding: 2rem;
  border-radius: 1rem;
  border: 0.1rem solid $grey;
}

.cardHeader {
  display: flex;
  justify-content: space-between;

  .cardTitle {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.6rem;
  }

  .cardEntriesImg {
    width: 2.4rem;
    height: 2.4rem;
  }
}

.orgDataWrapper {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 4.7rem;

  .orgDataImg {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 5rem;
  }

  .orgDataText {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .name {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;
    }

    .type {
      font-size: 1.6rem;
    }
  }
}

.mainContentWrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .shortDescription {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    font-size: 1.6rem;
    -webkit-line-clamp: 3; /* Количество строк */
    -webkit-box-orient: vertical;
  }

  .courseImg {
    width: 100%;
    height: 24.4rem;
    border-radius: 1rem;
  }
}

.moreInfoWrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .moreInfoPoint {
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
}
</style>
