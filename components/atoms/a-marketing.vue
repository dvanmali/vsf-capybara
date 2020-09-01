<template>
  <div>
      <SfTable>
        <SfTableRow>
          <SfTableData align="center">
            <video ref="videoRef" src="/assets/marketing-preview.mp4" id="video-container" width="100%" height="70%" controls></video>
          </SfTableData>
          <SfTableData class="social-media-links">
            <ul>

                <div data-v-4c54e694="" class="sf-accordion">
                  <li>
                  <div data-v-4c54e694="" class="sf-accordion-item"><button aria-pressed="false" aria-expanded="false" class="sf-button sf-button--pure sf-accordion-item__header" style="outline: none;">
                  Authentic Sellers
                  <div class="sf-chevron sf-accordion-item__chevron sf-chevron--right" tabindex="0"><span class="sf-chevron__bar sf-chevron__bar--left"></span> <span class="sf-chevron__bar sf-chevron__bar--right"></span></div></button> <!----></div>
                  </li>

                  <li>
                  <div data-v-4c54e694="" class="sf-accordion-item"><button aria-pressed="false" aria-expanded="false" class="sf-button sf-button--pure sf-accordion-item__header" style="outline: none;">
                  Authentic Buyers
                  <div class="sf-chevron sf-accordion-item__chevron sf-chevron--right" tabindex="0"><span class="sf-chevron__bar sf-chevron__bar--left"></span> <span class="sf-chevron__bar sf-chevron__bar--right"></span></div></button> <!----></div>
                  </li>

                  <li>
                  <div data-v-4c54e694="" class="sf-accordion-item"><button aria-pressed="false" aria-expanded="false" class="sf-button sf-button--pure sf-accordion-item__header" style="outline: none;">
                  Review Summarisation
                  <div class="sf-chevron sf-accordion-item__chevron sf-chevron--right" tabindex="0"><span class="sf-chevron__bar sf-chevron__bar--left"></span> <span class="sf-chevron__bar sf-chevron__bar--right"></span></div></button> <!----></div>
                  </li>

                  <li>
                  <div data-v-4c54e694="" class="sf-accordion-item"><button aria-pressed="false" aria-expanded="false" class="sf-button sf-button--pure sf-accordion-item__header" style="outline: none;">
                  Personalization
                  <div class="sf-chevron sf-accordion-item__chevron sf-chevron--right" tabindex="0"><span class="sf-chevron__bar sf-chevron__bar--left"></span> <span class="sf-chevron__bar sf-chevron__bar--right"></span></div></button> <!----></div>
                  </li>

                  <li>
                  <div data-v-4c54e694="" class="sf-accordion-item"><button aria-pressed="false" aria-expanded="false" class="sf-button sf-button--pure sf-accordion-item__header" style="outline: none;">
                  Free Shipping
                  <div class="sf-chevron sf-accordion-item__chevron sf-chevron--right" tabindex="0"><span class="sf-chevron__bar sf-chevron__bar--left"></span> <span class="sf-chevron__bar sf-chevron__bar--right"></span></div></button> <!----></div>
                  </li>
                </div>
            </ul>
          </SfTableData>
        </SfTableRow>
      </SfTable>
  </div>
</template>

<script>
import config from 'config';
import { currentStoreView } from '@vue-storefront/core/lib/multistore';
import { SfImage, SfTable } from '@storefront-ui/vue';
import get from 'lodash-es/get';

const storeView = currentStoreView();

export default {
  components: { SfImage, SfTable },
  computed: {
    defaultTitle () {
      return get(storeView, 'seo.defaultTitle', config.seo.defaultTitle);
    }
  }
};
</script>
<style lang="scss" scoped>
.a-logo {
  display: inline-flex;
  width: 100%;
  ::v-deep .sf-header__logo {
    --header-logo-width: 55px;
    --header-logo-height: 55px;
  }
  
}
.social-media-links
 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  justify-content: center;
  width: 50px;
}
</style>
