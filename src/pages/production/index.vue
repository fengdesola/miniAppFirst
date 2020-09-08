<template>
  <div class="main">
    <swiper v-if="bannerList.length > 0" indidator-dots="bannerList.length > 1">
      <block v-for="(item, index) in bannerList" :key="index">
        <swiper-item>
          <!-- <image :src="item" mode="scaleToFill"></image> -->
          <banner-item
            :imgUrl="item.image"
            :title="item.title"
            :data="item"
            @itemClick="bannerItemClick"
          ></banner-item>
        </swiper-item>
      </block>
    </swiper>

    <scroll-view scroll-y>
      <div class="list">
        <block v-for="(item, index) in recommendList" :key="index">
          <recommend-item
            :imgUrl="item.image"
            :title="item.title"
            :data="item"
            @itemClick="recommendItemClick"
          ></recommend-item>
        </block>
      </div>
    </scroll-view>

    <!-- <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>-->
  </div>
</template>

<script>
import { formatTime } from "@/utils/index";
import bannerItem from "@/components/banner/banner-item";
import recommendItem from "@/components/recommend/recommend-item";
import { proInfo } from "@/network/api/infoApi";

export default {
  components: {
    bannerItem,
    recommendItem,
  },

  data() {
    return {
      bannerList: [],
      recommendList: []
    };
  },

  created() {
    proInfo().then(res => {
      this.bannerList = res.data.banner.list;
      let list = [];
      let tempList = res.data.recommend.list;
      list.push(...tempList);
      list.push(...tempList);
      list.push(...tempList);
      list.push(...tempList);
      list.push(...tempList);
      list.push(...tempList);
      list.push(...tempList);
      list.push(...tempList);
      this.recommendList = list;
    });
  },
  mounted() {
    mpvue.setNavigationBarTitle({
      title: "production page"
    });
  },
  methods: {
    bannerItemClick(item) {
      console.log("banner item", item);
      mpvue.showToast({
        title: item.title
      });
    },
    recommendItemClick(item) {
      console.log("recommend item", item);
    }
  }
};
</script>

<style>
page {
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.main swiper {
  flex-grow: 0;
}

.main scroll-view {
  flex: 1;
}

.main .list {
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  
}

</style>
