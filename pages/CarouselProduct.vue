<template>
      <table>
        <tr>
          <td>
            <header data-v-7ad972e5="" class="sf-heading sf-heading--no-underline sf-heading--center">
              <img :src="hero.image" style="height:250px;width:200px" @click="onExpand"/>
            </header>
          </td>
        </tr>
        <tr>
          <td>
          <header data-v-7ad972e5="" class="sf-heading sf-heading--no-underline sf-heading--center">
            <h4 class="sf-heading__title sf-heading__title--h4">
              {{hero.title}}
            </h4>
          </header>
          </td>
        </tr>
        <tr>
          <td style="word-break:break-all;">
          <header data-v-7ad972e5="" class="sf-heading sf-heading--no-underline sf-heading--center">
            <h5 class="sf-heading__title sf-heading__title--h5">
              {{hero.summary}}
            </h5>
          </header>
          </td>
        </tr>
        <tr>
          <td style="word-break:break-all;">
            <SfTabs
              class="m-product-additional-info product__tabs"
              id="m-product-additional-info"
              ref="productTabs"
              style="padding-left:50px;"
              @toggle="onToggle">
                  <SfTab :title="$t('Details')">
                     <header data-v-7ad972e5="" class="sf-heading sf-heading--no-underline sf-heading--left">
                        <h5 class="sf-heading__title sf-heading__title--h5" >
                          Overall rating : {{hero.overall}}
                          <br><a :href="hero.page" >Product Details-></a>
                        </h5>
                    </header>
                  </SfTab>
                  <SfTab :title="$t('Reviews')" ref="reviewTab">
                    <header data-v-7ad972e5="" class="sf-heading sf-heading--no-underline sf-heading--left">
                        <h5 class="sf-heading__title sf-heading__title--h5" style="width:200px;word-break: break-all; word-wrap: break-word;white-space: pre-wrap">
                          {{hero.reviewText}}
                        </h5>
                    </header>
                  </SfTab>
            </SfTabs>
          </td>
        </tr>

      </table>
</template>
<script>
import { mapState, mapGetters, mapActions} from 'vuex';
import { isServer, onlineHelper } from '@vue-storefront/core/helpers';
import { checkWebpSupport } from 'theme/helpers';
import { SfTabs} from '@storefront-ui/vue';
import SearchIcon from '@vue-storefront/core/compatibility/components/blocks/Header/SearchIcon';
import OSearch from 'theme/components/organisms/o-search';

import {
  SfHero,
  SfSection,
  SfBannerGrid,
  SfBanner,
} from '@storefront-ui/vue';

export default {
  name: 'CarouselProduct',
  components: {
    SfTabs
  },
  props: ['hero'],
  mixins: [],
  data () {
    return {
      loading: true,
      loadNewsletterPopup: false,
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
      promotedOffers: 'promoted/getPromotedOffers'
    })
  },
  methods: {
    ...mapActions('ui', {
      openModal: 'openModal'
    }),
    onToggle (id) {
      console.log("toggling");
      this.$store.commit('', id === this.$refs.reviewTab._uid);
    },
    onExpand (id) {
      console.log("expanding description");
      this.$store.commit('', id === this.$refs.productTabs._uid);
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

    await Promise.all([
      store.dispatch('promoted/updateHeadImage')
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
