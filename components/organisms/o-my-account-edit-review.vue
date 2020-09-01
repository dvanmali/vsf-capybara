<template>
  <div class="o-my-account-edit-review">
    <SfTabs :open-tab="1">
      <SfTab :title="$t('Edit Review')">
        <MEditReview />
      </SfTab>
    </SfTabs>
  </div>
</template>

<script>
import { SfTabs } from '@storefront-ui/vue';
import MEditReview from 'theme/components/molecules/m-edit-review';

export default {
  name: 'OMyAccountEditReview',
  components: {
    SfTabs,
    MEditReview
  }
};
</script>
