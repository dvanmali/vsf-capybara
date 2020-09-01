<template>
  <div class="o-my-account-my-reviews">
    <SfTabs :open-tab="1">
      <SfTab :title="$t('My Reviews')">
        <MMyReviews />
      </SfTab>
    </SfTabs>
  </div>
</template>

<script>
import { SfTabs } from '@storefront-ui/vue';
import MMyReviews from 'theme/components/molecules/m-my-reviews'

export default {
  name: 'OMyAccountMyReviews',
  components: {
    SfTabs,
    MMyReviews
  }
};
</script>
