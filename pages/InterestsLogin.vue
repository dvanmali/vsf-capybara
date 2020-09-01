<template>
  <div class="m-login modal-content">
        

        <SfTable >
        <SfTableRow>
            <SfTableData class="social-media-links">
                <header data-v-7ad972e5="" class="sf-heading sf-heading--no-underline sf-heading--left">
                  <h3 class="sf-heading__title sf-heading__title--h3">
                    Mark your interests
                  </h3>
                </header>
            </SfTableData>
        </SfTableRow>
        <SfTableRow>
            <SfTableData class="social-media-links" @click.native="addInterests('electronics')" id="electronics">
               <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="electronics"
                    name="electronics"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/electronics.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Electronics
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('cosmetics')" id="cosmetics">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="cosmetics"
                    name="cosmetics"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/cosmetics.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Cosmetics
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('clothing')" id="clothing">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="clothing"
                    name="clothing"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/clothing.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Clothing
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('book')" id="book">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="book"
                    name="book"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/book.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Books
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('kitchenware')" id="kitchenware">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="kitchenware"
                    name="kitchenware"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/kitchenware.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Kitchenware
                  </h3>
                </div>
            </SfTableData>
        </SfTableRow>
        <SfTableRow>
            <SfTableData class="social-media-links" @click.native="addInterests('furniture')" id="furniture">
               <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="furniture"
                    name="furniture"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/furniture.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Furniture
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('luxury')" id="luxury">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="luxury"
                    name="luxury"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/luxury.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Luxury
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('music')" id="music">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="music"
                    name="music"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/music.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Music
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('health')" id="health">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="health"
                    name="health"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/health.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Health
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('sports')" id="sports">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="sports"
                    name="sports"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/sports.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Sports
                  </h3>
                </div>
            </SfTableData>
        </SfTableRow>
          <SfTableRow>
            <SfTableData class="social-media-links" @click.native="addInterests('flexible')" id="flexible">
               <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="flexible"
                    name="flexible"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/flexible.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Flexibility
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('durable')" id="durable">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="durable"
                    name="durable"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/durable.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Durability
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('maintenance')" id="maintenance">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="maintenance"
                    name="maintenance"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/maintenance.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Maintainability
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('quality')" id="quality">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="quality"
                    name="quality"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/quality.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    Quality
                  </h3>
                </div>
            </SfTableData>
            <SfTableData class="social-media-links" @click.native="addInterests('popularity')" id="popularity">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <!--SfCheckbox
                    v-model="popularity"
                    name="popularity"
                    class="form__element form__checkbox"
                  /-->
                  <img width="216" height="326" style="" src="/assets/popularity.png"> 
                  <noscript></noscript> 
                  </div>
                  </div> 
                  <h3 class="sf-product-card__title">
                    popularity
                  </h3>
                </div>
            </SfTableData>
          </SfTableRow>
        </SfTable>
    <form @submit.prevent="login" class="form">
      <SfButton class="sf-button--full-width form__submit" @click.native="submitInterests">
        {{ $t("Mark Interests") }}
      </SfButton>
    </form>
  </div>
</template>

<script>
import i18n from '@vue-storefront/i18n';
import { Logger } from '@vue-storefront/core/lib/logger';
import { required, email } from 'vuelidate/lib/validators';
import { SfInput, SfButton, SfCheckbox, SfHeading, SfTable } from '@storefront-ui/vue';
import { mapActions } from 'vuex';
import ALogo from 'theme/components/atoms/a-logo';
import { ModalList } from 'theme/store/ui/modals'

export default {
  name: 'InterestsLogin',
  components: { SfInput, SfButton, SfCheckbox, SfHeading, ALogo, SfTable},
  data () {
    return {
      email: '',
      mobile: '',
      electronics: false,
      cosmetics: false,
      clothing: false,
      book: false,
      kitchenware: false,
      popularity: false,
      quality: false,
      maintenance: false,
      durable: false,
      flexible: false,
      sports: false,
      health: false,
      music: false,
      luxury: false,
      furniture: false,
      rememberMe: false,
      interestsList: []
    };
  },
  methods: {
    ...mapActions('ui', {
      openModal: 'openModal',
      closeModal: 'closeModal'
    }),
    addInterests(interest){
      this.interestsList.push(interest);
      document.getElementById(interest).style.background = '#E8E8E8';
      console.log(this.interestsList);
    },
    submitInterests(){
      let updatedProfile = JSON.parse(JSON.stringify(this.$store.state.user.current))
      console.log(updatedProfile);
      let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 'userId': updatedProfile.email, 'interests': this.interestsList })
      };
      let response = fetch('http://localhost:9000/interests', requestOptions);
      console.log(response);
    },
    switchElem (to) {
      this.$v.$reset();
      this.openModal({name: ModalList.Auth, payload: to})
    },
    login () {
      this.$router.push(this.localizedRoute('/'));
    },
    goToAccount () {
        this.$router.push(this.localizedRoute('/my-account'))
    },
    onSuccess (message) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'success',
        message: message,
        action1: { label: i18n.t('OK') }
      });
    },
    onFailure (result) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'danger',
        message: i18n.t(result.result),
        action1: { label: i18n.t('OK') }
      });
    }
  },
  validations: {
    email: {
      required,
      email
    },
    mobile: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-content,
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  width: 30%;
  &__element {
    margin: var(--spacer-base) 0;
  }
  &__checkbox {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
  &__submit {
    margin: var(--spacer-xl) 0 0 0;
  }
}
.action-button {
  margin: var(--spacer-xl) 0;
}
.aside {
  margin: 0 0 var(--spacer-xl) 0;
  &__heading {
    --heading-title-color: var(--c-primary);
    margin: 0 0 var(--spacer-sm) 0;
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
