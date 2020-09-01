<template>
  <div class="m-add-review">
 
    <div class="form modal-content">

    <p class="message">
      {{ $t('Select an order to review.') }}
      </p>
    <SfTable class="orders">
        <SfTableRow v-for="order in orders" :key="order.order_id" >
          <SfTableData v-for="(data, key) in order" :key="key" @click.native="selectOrder(order.order_id)">
            <template>
              {{ data }}
            </template>
          </SfTableData>
        </SfTableRow>
    </SfTable>
    
    <br><br><br>

    <p class="message">
      {{ $t('How would you rate the product?') }}
    <span v-for="rating in ratings" :key="rating.code" class="image-radio">
        <input type="radio" :id="rating.code" :name="rating.name" :value="rating.value" style="display:none">
        <img :src="rating.img" height="30rem" width="30rem" @click="selectRating(rating.code)"/>
    </span>
    </p><br>

  
    <textarea
        class="feedback form__element"
        v-model="feedback"
        :label="$t('Review Text')"
        :placeholder="$t('Please provide your review of the product here.')"
        :rows="10"
        :cols="60"
        required
        :error-message="$t('Field is required.')"
      />
      <br>

    <p class="message">
      {{ $t('Please select the attributes the product satisfies.') }}
    </p>
      <SfCheckbox
        v-for="ques in questions" 
        :key="ques.code"
        v-model="questionsRadio"
        :name="ques.quesmethod"
        :label="ques.label"
        class="form__element form__checkbox"
        @click.native="selectAttribute(ques.quesmethod)"
      /> <br>
      
      <SfButton class="form__button" @click.native="addReviewMethod">
        {{ $t('Add Review') }}
      </SfButton>
    </div>
  </div>
</template>

<script>
import { SfInput, SfButton, SfRadio, SfCheckbox, SfTable, SfSelect } from '@storefront-ui/vue';
import { required, minLength, email } from 'vuelidate/lib/validators';
import { unicodeAlpha } from '@vue-storefront/core/helpers/validators';
import UserOrder from '@vue-storefront/core/modules/order/components/UserOrdersHistory';

export default {
  name: 'MAddReview',
  mixins: [UserOrder],
  components: {
    SfInput,
    SfButton,
    SfRadio,
    SfCheckbox,
    SfTable
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      feedback: '',
      questionsRadio : '',
      durability:false,
      quality:false,
      expected:false,
      comforatable:false,
      rating:true,
      like:true,
      dislike:false,
      orderId:''
    }
  },
  computed: {

      ratings (){
      let rating = [
        {
          code : 'like',
          label : 'Like',
          value : 'Yes',
          quesmethod : 'like',
          img:'/assets/banner/png/like.png',
          name : 'rating'
        },
        {
          code : 'dislike',
          label : 'Dislike',
          value : 'No',
          quesmethod : 'dislike',
          img:'/assets/banner/png/dislike.png',
          name : 'rating'
        }
        ];
      return [...new Set(rating)];
    },
    orders () {
      let orders = []
      this.ordersHistory.forEach(item => {
        orders.push({
          'order_id': item.increment_id,
          'order_date': this.$options.filters.date(item.created_at),
          'payment_method': item.payment.additional_information[0],
          'amount': this.$options.filters.price(item.grand_total),
          'status': this.$options.filters.capitalize(item.status)
        })
      })
      return orders
    },
    questions (){
      let ques = [
        {
          code : 'ques1',
          label : 'Durability',
          value : 'Yes',
          quesmethod : 'durability',
          name : 'durabilityQues'
        },
        {
          code : 'ques2',
          label : 'Quality',
          value : 'Yes',
          quesmethod : 'quality',
          name : 'qualityQues'
        },
        {
          code : 'ques3',
          label : 'Expected',
          value : 'Yes',
          quesmethod : 'expected',
          name : 'expectedQues'    
        },
        {
          code : 'ques4',
          label : 'Comfortable',
          value : 'Yes',
          quesmethod : 'comfortable',
          name : 'comfortableQues'    
        }
        ];
      return [...new Set(ques)];
    },
    radioOptions (){
      let radioOptions = ["Yes","No"];
      return [...new Set(radioOptions)];
    }
  },
  methods: {
    rateProduct(){
     $(this).prev().attr('checked',true);
    },
    addReviewMethod () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$store.dispatch('notification/spawnNotification', {
          type: 'danger',
          message: this.$t('Please fix the validation errors'),
          action1: { label: this.$t('OK') }
        });
        return;
      }
      let updatedProfile = JSON.parse(JSON.stringify(this.$store.state.user.current))
      updatedProfile.firstname = this.firstName
      updatedProfile.lastname = this.lastName
      updatedProfile.email = this.email
      updatedProfile.durability = this.durability
      updatedProfile.quality = this.quality
      updatedProfile.expected = this.expected
      updatedProfile.comforatable = this.comforatable
      updatedProfile.feedback = this.feedback
      updatedProfile.like = this.like
      updatedProfile.dislike = this.dislike
      updatedProfile.orderId = this.orderId
      
      this.$bus.$emit('myAccount-before-addReview', updatedProfile)
    },
    selectRating(rating){
      if(rating === 'like'){
        console.log('liked');
        this.like = true;
        this.dislike = false;
      }else{
        this.like = false;
        this.dislike = true;
      }
    },
    selectOrder(order){
      console.log(order);
      this.orderId = order;
    },
    selectAttribute(attribute){
      console.log(attribute);
      if(attribute === 'comfortable'){
        this.comfortable = true;
      }
      if(attribute === 'quality'){
        this.quality = true;
      }
      if(attribute === 'durability'){
        this.durability = true;
      }
      if(attribute === 'expected'){
        this.expected = true;
      }

    }
  },
  beforeMount () {
    // current user may not be available yet in beforeMount hook so vuex watcher is needed
    const unsubscribeFromStoreWatch = this.$store.watch(
      state => state.user.current,
      currentUser => {
        if (currentUser) {
          this.firstName = currentUser.firstname;
          this.lastName = currentUser.lastname;
          this.email = currentUser.email;
        }
      },
      { immediate: true });

    this.$once('hook:beforeDestroy', unsubscribeFromStoreWatch)
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(2),
      unicodeAlpha
    },
    lastName: {
      required,
      unicodeAlpha
    },
    email: {
      required,
      email
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/helpers/breakpoints";

.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    margin: 0 0 var(--spacer-lg) 0;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-lg);
        }
      }
    }
  }
  &__button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: auto;
    }
  }
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  color: var(--c-dark-variant);
}
.notice {
  max-width: 31rem;
  margin: var(--spacer-base) 0 0 0;
  font-size: var(--font-2xs);
}
a {
  color: var(--c-primary);
  text-decoration: none;
  &:hover {
    color: var(--c-text);
  }
}

.feedback {
  box-sizing: border-box;
  border: 1px solid var(--c-light);
  width: 100%;
  height: 25vh;
  padding: 0.5em;
  font-family: var(--font-family-primary);
  resize: vertical;
}

.payment-method {
  --radio-container-align-items: center;
  --radio-container-padding: var(--spacer-sm) 0;
  --ratio-content-margin: 0 0 0 var(--spacer-lg);
  --radio-background: transparent;
  white-space: nowrap;
  @include for-desktop {
    --radio-container-padding: var(--spacer-sm);
  }
}

</style>
