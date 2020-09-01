<template>
  <div class="m-login modal-content">
        

        <SfTable >
        <SfTableRow>
            <SfTableData class="social-media-links">
                <header data-v-7ad972e5="" class="sf-heading sf-heading--no-underline sf-heading--left">
                  <h3 class="sf-heading__title sf-heading__title--h3">
                    Social login
                  </h3>
                </header>
            </SfTableData>
        </SfTableRow>
        <SfTableRow>
            <SfTableData class="social-media-links">
                <div id="fb-root"></div>
                <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="true" data-use-continue-as="true" data-width=""></div>

            </SfTableData>

            <!--SfTableData class="social-media-links">
               <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <a href="" class="sf-link sf-product-card__link" style="outline: none;">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;"> 
                  <fb:login-button 
                  scope="public_profile,email"
                  onlogin="checkLoginState();">
                </fb:login-button>
                  <noscript></noscript> 
                  </div>
                  </a>
                  </div> 
                  <a href="" class="sf-link sf-product-card__link" style="outline: none;">
                  <h3 class="sf-product-card__title">
                    Facebook
                  </h3></a> 
                </div>
            </SfTableData-->
            <SfTableData class="social-media-links">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <a href="https://www.instagram.com/oauth/authorize?client_id=1893754224088117&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code" class="sf-link sf-product-card__link" style="outline: none;">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <img width="216" height="326" style="" src="/assets/instagram.png"> 
                  <noscript></noscript> 
                  </div>
                  </a>
                  </div> 
                  <a href="https://www.instagram.com/oauth/authorize?client_id=1893754224088117&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code" class="sf-link sf-product-card__link" style="outline: none;">
                  <h3 class="sf-product-card__title">
                    Instagram
                  </h3></a> 
                </div>
            </SfTableData>
            <SfTableData class="social-media-links">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <a href="" class="sf-link sf-product-card__link" style="outline: none;">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <img width="216" height="326" style="" src="/assets/twitter.png" onclick='FB.AppEvents.logEvent("buttonClicked")'> 
                  <noscript></noscript> 
                  </div>
                  </a>
                  </div> 
                  <a href="" class="sf-link sf-product-card__link" style="outline: none;">
                  <h3 class="sf-product-card__title">
                    Twitter
                  </h3></a> 
                </div>
            </SfTableData>
            <SfTableData class="social-media-links">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <a href="" class="sf-link sf-product-card__link" style="outline: none;">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <img width="216" height="326" style="" src="/assets/pinterest.png"> 
                  <noscript></noscript> 
                  </div>
                  </a>
                  </div> 
                  <a href="" class="sf-link sf-product-card__link" style="outline: none;">
                  <h3 class="sf-product-card__title">
                    Pinterest
                  </h3></a> 
                </div>
            </SfTableData>
            <SfTableData class="social-media-links">
                <div class="sf-product-card products__product-card">
                <div class="sf-product-card__image-wrapper">
                <a href="" class="sf-link sf-product-card__link" style="outline: none;">
                <div class="sf-image sf-product-card__image sf-image--has-size" data-loaded="true" style="--_image-width:216; --_image-height:326;">
                  <img width="216" height="326" style="" src="/assets/linkedin.png"> 
                  <noscript></noscript> 
                  </div>
                  </a>
                  </div> 
                  <a href="" class="sf-link sf-product-card__link" style="outline: none;">
                  <h3 class="sf-product-card__title">
                    Linked In
                  </h3></a> 
                </div>
            </SfTableData>
        </SfTableRow>
        </SfTable>
    <form @submit.prevent="login" class="form">
      <SfButton class="sf-button--full-width form__submit">
        {{ $t("Continue") }}
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
  name: 'SocialLogin',
  components: { SfInput, SfButton, SfCheckbox, SfHeading, ALogo, SfTable},
  data () {
    return {
      email: '',
      mobile: '',
      rememberMe: false
    };
  },
  mounted(){
    let externalScript = document.createElement('script');
    externalScript.setAttribute('src', 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=292257152150526&autoLogAppEvents=1');
    externalScript.setAttribute('nonce', 'ZBYgElvg');
    externalScript.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(externalScript);

    let externalScript1 = document.createElement('script');
    externalScript1.setAttribute('src', 'http://platform.linkedin.com/in.js');
    externalScript1.setAttribute('api_key', '86jvbxurg9kyd6');
    document.head.appendChild(externalScript);

    window.fbAsyncInit = function() {
    FB.init({
      appId      : '292257152150526',
      cookie     : true,
      xfbml      : true,
      version    : 'v7.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  },
  methods: {
    ...mapActions('ui', {
      openModal: 'openModal',
      closeModal: 'closeModal'
    }),
    login () {
      this.$router.push(this.localizedRoute('/interests-login'));
    },
    checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
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
