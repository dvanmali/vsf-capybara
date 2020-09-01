import { Logger } from '@vue-storefront/core/lib/logger'

export default interface PromotedOffersState {
  banners: {
    mainBanners: any[],
    smallBanners: any[],
    productBanners: any[],
    menuAsideBanners: any[]
  },
  headImage: any[]
}

export const promotedStore = {
  namespaced: true,
  state: {
    banners: {
      mainBanners: [],
      smallBanners: [],
      productBanners: [],
      menuAsideBanners: []
    },
    headImage: [],
    category1Image: [],
    category2Image: [],
    category3Image: [],
    category4Image: [],
    category5Image: [],
    category6Image: [],
    category7Image: [],
    category8Image: [],
    category9Image: [],
    category10Image: []
  },
  getters: {
    getPromotedOffers: state => {
      return state.banners
    },
    getHeadImage: state => state.headImage,
    getCategory1Image: state => state.category1Image,
    getCategory2Image: state => state.category2Image,
    getCategory3Image: state => state.category3Image,
    getCategory4Image: state => state.category4Image,
    getCategory5Image: state => state.category5Image,
    getCategory6Image: state => state.category6Image,
    getCategory7Image: state => state.category7Image,
    getCategory8Image: state => state.category8Image,
    getCategory9Image: state => state.category9Image,
    getCategory10Image: state => state.category10Image
  },
  actions: {
    async updatePromotedOffers ({ commit, rootState }, data) {
      let promotedBannersResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_promoted_offers` : `promoted_offers`
      try {
        console.log("Getting the banner images");
        console.log(promotedBannersResource);
        // Workaround to get jest --watch to work so don't change the import sting to a template string
        const promotedOffersModule = await import(/* webpackChunkName: "vsf-promoted-offers-[request]" */ 'theme/resource/' + promotedBannersResource + '.json')
        commit('updatePromotedOffers', promotedOffersModule)
      } catch (err) {
        Logger.debug('Unable to load promotedOffers' + err)()
      }
    },
    async updateHeadImage ({commit, rootState}, data) {
      console.log(`banners/${rootState.storeView.storeCode}_main-images`);
      let mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `main-images`
      try {
        // Workaround to get jest --watch to work so don't change the import sting to a template string
        var imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_HEAD_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category1`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY1_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category2`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY2_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category3`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY3_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category4`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY4_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category5`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY5_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category6`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY6_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category7`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY7_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category8`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY8_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category9`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY9_IMAGE', imageModule.images)
        mainImageResource = rootState.storeView && rootState.storeView.storeCode ? `banners/${rootState.storeView.storeCode}_main-images` : `Category10`
        imageModule = await import(/* webpackChunkName: "vsf-head-img-[request]" */ 'theme/resource/' + mainImageResource + '.json')
        commit('SET_CATEGORY10_IMAGE', imageModule.images)
      } catch (err) {
        Logger.debug('Unable to load headImage' + err)()
      }
    }
  },
  mutations: {
    updatePromotedOffers (state, data) {
      state.banners = data
    },
    SET_HEAD_IMAGE (state, headImage) {
      state.headImage = headImage
    },
    SET_CATEGORY1_IMAGE (state, category1Image) {
      state.category1Image = category1Image
    },
    SET_CATEGORY2_IMAGE (state, category2Image) {
      state.category2Image = category2Image
    },
    SET_CATEGORY3_IMAGE (state, category3Image) {
      state.category3Image = category3Image
    },
    SET_CATEGORY4_IMAGE (state, category4Image) {
      state.category4Image = category4Image
    },
    SET_CATEGORY5_IMAGE (state, category5Image) {
      state.category5Image = category5Image
    },
    SET_CATEGORY6_IMAGE (state, category6Image) {
      state.category6Image = category6Image
    },
    SET_CATEGORY7_IMAGE (state, category7Image) {
      state.category7Image = category7Image
    },
    SET_CATEGORY8_IMAGE (state, category8Image) {
      state.category8Image = category8Image
    },
    SET_CATEGORY9_IMAGE (state, category9Image) {
      state.category9Image = category9Image
    },
    SET_CATEGORY10_IMAGE (state, category10Image) {
      state.category10Image = category10Image
    }
  }
}
