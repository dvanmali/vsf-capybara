<template>
  <div class="o-my-account-add-review">
    <SfTabs :open-tab="1">
      <SfTab :title="$t('Add Review')">
        <MAddReview />
      </SfTab>
    </SfTabs>
  </div>
</template>

<script>
import { SfTabs } from '@storefront-ui/vue';
import MAddReview from 'theme/components/molecules/m-add-review'

export default {
  name: 'OMyAccountAddReview',
  components: {
    SfTabs,
    MAddReview
  }
};
</script>
