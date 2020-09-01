<template>
  <div id="home">
        <br>
        <div class="search-container">
          <OSearch :class="{'desktop-only': !isSearchPanelVisible}" style="width:500px"/>
          <SfButton
            v-if="isSearchPanelVisible"
            class="sf-button--text form__action-button form__action-button--secondary mobile-only"
            @click="$store.commit('ui/setSearchpanel', false)"
          >
            {{ $t("Cancel") }}
          </SfButton>
        </div>


    <div v-for="(review, j) in reviews" :key="j">
     <p> {{review}} </p>
    </div>
    
    <div v-for="(category, j) in categories" :key="j">
    <header data-v-7ad972e5="" class="sf-heading sf-heading--no-underline sf-heading--center">
      <h3 class="sf-heading__title sf-heading__title--h3">
        <br>
        {{category}}
      </h3>
    </header>

    <SfHero class="hero" v-if="category == 'color'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category1" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>
    
    <SfHero class="hero" v-if="category == 'wear'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category2" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    <SfHero class="hero" v-if="category == 'size'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category3" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    <SfHero class="hero" v-if="category == 'rosetta'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category4" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    <SfHero class="hero" v-if="category == 'bag'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category5" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    <SfHero class="hero" v-if="category == 'it\'s'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category6" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    <SfHero class="hero" v-if="category == 'bra'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category7" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    <SfHero class="hero" v-if="category == 'fit'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category8" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    <SfHero class="hero" v-if="category == 'price'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category9" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    <SfHero class="hero" v-if="category == 'shoes'" :slider-options="{animationDuration: 2000,rewindDuration: 2000}">
      <div v-for="(hero, i) in Category10" :key="i">
        <CarouselProduct :hero="hero"/>
      </div>
    </SfHero>

    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions} from 'vuex';
import LazyHydrate from 'vue-lazy-hydration';
import { Logger } from '@vue-storefront/core/lib/logger';
import Home from '@vue-storefront/core/pages/Home';
import { isServer, onlineHelper } from '@vue-storefront/core/helpers';
import MProductCarousel from 'theme/components/molecules/m-product-carousel';
import ONewsletter from 'theme/components/organisms/o-newsletter';
import AImagesGrid from 'theme/components/atoms/a-images-grid';
import { checkWebpSupport } from 'theme/helpers';
import { SfCircleIcon, SfButton, SfIcon, SfTable, SfHeading, SfTabs, SfDivider} from '@storefront-ui/vue';
import SearchIcon from '@vue-storefront/core/compatibility/components/blocks/Header/SearchIcon';
import OSearch from 'theme/components/organisms/o-search';
import CarouselProduct from 'theme/pages/CarouselProduct';
import { ModalList } from 'theme/store/ui/modals'

import {
  SfHero,
  SfSection,
  SfBannerGrid,
  SfBanner
} from '@storefront-ui/vue';

export default {
  name: 'Home',
  components: {
    LazyHydrate,
    SfHero,
    SfSection,
    SfBannerGrid,
    SfBanner,
    MProductCarousel,
    ONewsletter,
    AImagesGrid,
    SfCircleIcon,
    OSearch,
    SfButton,
    SfIcon,
    SfTable,
    SfHeading,
    SfTabs,
    SfDivider,
    CarouselProduct
  },
  mixins: [Home,SearchIcon],
  data () {
    return {
      loading: true,
      loadNewsletterPopup: false,
      email: '',
      reviewsList: new Set()
    };
  },
  computed: {
    ...mapState({
      isWebpSupported: state => state.ui.isWebpSupported,
      isSearchPanelVisible: state => state.ui.searchpanel
    }),
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
      heroImages: 'promoted/getHeadImage',
      category1Images: 'promoted/getCategory1Image',
      category2Images: 'promoted/getCategory2Image',
      category3Images: 'promoted/getCategory3Image',
      category4Images: 'promoted/getCategory4Image',
      category5Images: 'promoted/getCategory5Image',
      category6Images: 'promoted/getCategory6Image',
      category7Images: 'promoted/getCategory7Image',
      category8Images: 'promoted/getCategory8Image',
      category9Images: 'promoted/getCategory9Image',
      category10Images: 'promoted/getCategory10Image',
      promotedOffers: 'promoted/getPromotedOffers',
      newCollection: 'homepage/getEverythingNewCollection',
      dummyInstagramImages: 'instagram/getInstagramImages'
    }),
    isOnline () {
      return onlineHelper.isOnline;
    },
    banners () {
      return checkWebpSupport(this.promotedOffers.mainBanners, this.isWebpSupported)
    },
    heroes () {
      return checkWebpSupport(this.heroImages, this.isWebpSupported)
    },
    Category1 () {
      return checkWebpSupport(this.category1Images, this.isWebpSupported)
    },
    Category2 () {
      return checkWebpSupport(this.category2Images, this.isWebpSupported)
    },
    Category3 () {
      return checkWebpSupport(this.category3Images, this.isWebpSupported)
    },
    Category4 () {
      return checkWebpSupport(this.category4Images, this.isWebpSupported)
    },
    Category5 () {
      return checkWebpSupport(this.category5Images, this.isWebpSupported)
    },
    Category6 () {
      return checkWebpSupport(this.category6Images, this.isWebpSupported)
    },
    Category7 () {
      return checkWebpSupport(this.category7Images, this.isWebpSupported)
    },
    Category8 () {
      return checkWebpSupport(this.category8Images, this.isWebpSupported)
    },
    Category9 () {
      return checkWebpSupport(this.category9Images, this.isWebpSupported)
    },
    Category10 () {
      return checkWebpSupport(this.category10Images, this.isWebpSupported)
    },
    instagramImages () {
      return checkWebpSupport(this.dummyInstagramImages, this.isWebpSupported)
    },
    categories (){
      console.log("hero images")
      console.log(this.heroImages.length);
      console.log("category1 images")
      console.log(this.category1Images.length);
      console.log("category2 images")
      console.log(this.category2Images.length);
      console.log("category3 images")
      console.log(this.category3Images.length);
      let cat = ["color","wear","size","rosetta","bag","it's","bra","fit","price","shoes"];
      /*let i;
      let cat = [];
      for(i=0;i<this.heroImages.length;i++){      
        cat.push(this.heroImages[i].category);
      }*/
      return [...new Set(cat)];
    },
    beforeMount () {
    // current user may not be available yet in beforeMount hook so vuex watcher is needed

    },
    async reviews() {
      /*const unsubscribeFromStoreWatch = this.$store.watch(
      state => state.user.current,
      currentUser => {
        if (currentUser) {
          this.firstName = currentUser.firstname;
          this.lastName = currentUser.lastname;
          this.email = currentUser.email;
        }
        console.log('Getting current user');
        console.log(this.email);
      },
      { immediate: true });

    this.$once('hook:beforeDestroy', unsubscribeFromStoreWatch)*/
      console.log('Getting all the reviews');
      let requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      };
      return fetch('http://localhost:9000/reviews', requestOptions)
        .then(response => 
            response.json().then(data => ({
              data: data,
              status: response.status
            })).then(res => { this.reviewsList = res.data; console.log(reviewsList); }));
    }
  },
  methods: {
    ...mapActions('ui', {
      openModal: 'openModal'
    }),
    goToAccount () {
      if (this.isLoggedIn) {
        this.$router.push(this.localizedRoute('/my-account'))
      } else {
        this.openModal({ name: ModalList.Auth, payload: 'login' })
      }
    },
    onToggle (id) {
      this.$store.commit('', id === this.$refs.reviewTab._uid);
    }
  },
  watch: {
    isLoggedIn () {
      const redirectObj = localStorage.getItem('redirect');
      if (redirectObj) this.$router.push(redirectObj);
      localStorage.removeItem('redirect');
    },
    isReviewProductTab (value) {
      if (value && !this.$refs.reviewTab.isActive) {
        this.$refs.productTabs.toggle(this.$refs.reviewTab._uid);
      }
    }
  },
  async asyncData ({ store }) {
    Logger.info('Calling asyncData in Home (theme)')();

    await Promise.all([
      store.dispatch('homepage/fetchNewCollection'),
      store.dispatch('promoted/updateHeadImage'),
      store.dispatch('instagram/updateInstagramImages')
    ]);
  },
  mounted () {
    if (!this.isLoggedIn && localStorage.getItem('redirect')) { this.$bus.$emit('modal-show', 'modal-signup'); }
  },
  beforeRouteEnter (to, from, next) {
    if (!isServer && !from.name) {
      next(vm => {
        vm.$store.dispatch('homepage/fetchNewCollection').then(() => {
          vm.loading = false;
        });
      });
    } else {
      next();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 1272px;
    margin: 0 auto;
  }
}
.sf-hero-item {
  --hero-item-height: 30rem;
  height: initial;
}
.sf-hero {
  position: relative;
  &__controls {
    position: absolute;
    top: var(--hero-controls-top, 50%);
    transform: translate3d(0, -50%, 0);
    display: var(--hero-controls-display, none);
    box-sizing: border-box;
    justify-content: var(--hero-controls-justify-content, space-between);
    width: var(--hero-controls-width, 100%);
    padding: var(--hero-controls-padding, 0 var(--spacer-sm));
  }
  &__bullets {
    position: absolute;
    bottom: var(--hero-bullets-bottom, var(--spacer-xl));
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    display: var(--hero-bullets-display, none);
  }
  .glide {
    &__slides {
      margin: 0;
    }
  }
  @include for-desktop {
    &__controls {
      --hero-controls-display: flex;
    }
    &__bullets {
      --hero-bullets-display: flex;
    }
  }
}
.banner-grid {
  margin: var(--spacer-base) 0;
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
  }
}
.section {
  padding-left: var(--spacer-xl);
  padding-right: var(--spacer-xl);
  @include for-desktop {
    padding-left: 0;
    padding-right: 0;
  }
}
  .search-container {
    padding-left: 500px;
    padding-top:50px;
    background-color:#f1f2f3;
    height:100px;

  }
</style>
