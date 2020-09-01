<template>
  <div class="m-register modal-content">
    <AMarketing />
    <form @submit.prevent="register" class="form">
      <SfInput
        v-model="email"
        name="email"
        v-show="showEmail"
        :label="$t('Your email')"
        class="form__element"
      />
      <SfInput
        v-model="firstName"
        name="first-name"
        v-show="showFirstName"
        :label="$t('First Name')"
        id="first-name" 
        class="form__element"
      />
      <SfInput
        v-model="lastName"
        name="last-name"
        v-show="showLastName"
        :label="$t('Last Name')"
        id="last-name" 
        class="form__element"
      />
      <SfInput
        v-model="password"
        name="password"
        v-show="showPassword"
        :label="$t('Password')"
        type="password"
        class="form__element"
      />
      <SfInput
        v-model="mobile"
        name="mobile"
        v-show="showMobile"
        :label="$t('Mobile')"
        id="mobile"
        :minLength=10
        :maxLength=10
        type="number"
        class="form__element"
      />
      <SfInput
        v-model="otp"
        name="otp"
        v-show="showOTP"
        :label="$t('OTP')"
        id="otp"
        type="number"
        class="form__element"
      />

      <SfButton class="sf-button--full-width" @click.native="sendOTP" v-show="showSendOTPButton" >
        {{ $t("Send OTP") }}
      </SfButton>

      <SfButton class="sf-button--full-width" @click.native="validateOTP" v-show="showValidateOTPButton" >
        {{ $t("Validate OTP") }}
      </SfButton>

      <SfButton class="sf-button--full-width form__submit" v-show="showCreateAccountButton" >
        {{ $t("Create an account") }}
      </SfButton>
    </form>
    <SfButton class="sf-button--text action-button" @click.native="switchElem('login')">
      {{ `${$t("or")} ${$t("login in to your account")}` }}
    </SfButton>
  </div>
</template>

<script>
import i18n from '@vue-storefront/i18n';
import { Logger } from '@vue-storefront/core/lib/logger';
import { required, email } from 'vuelidate/lib/validators';
import { SfInput, SfButton } from '@storefront-ui/vue';
import { ModalList } from 'theme/store/ui/modals'
import { mapActions } from 'vuex';
import AMarketing from 'theme/components/atoms/a-marketing';


export default {
  name: 'MRegister',
  components: { SfInput, SfButton, AMarketing},
  data () {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      mobile: '',
      otp: '',
      showEmail: true,
      showPassword: false,
      showFirstName: false,
      showLastName: false,
      showMobile: true,
      showOTP: false,
      showSendOTPButton: true,
      showValidateOTPButton: false,
      showCreateAccountButton: false
    };
  },
  methods: {
    ...mapActions('ui', {
      openModal: 'openModal',
      closeModal: 'closeModal'
    }),
    switchElem (to) {
      this.$router.push(this.localizedRoute('/auth'));
    },
    sendOTP() {
      let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ "id":1195,"mobile":this.mobile,"otp":4132,"userId":this.email,"interests":[] })
      };
      let response = fetch('http://localhost:9000/user', requestOptions);
      console.log(response);
      this.showMobile = false;
      this.showSendOTPButton = false;
      this.showOTP = true;
      this.showValidateOTPButton = true;
    },
    validateOTP() {
      let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ "id":1195,"mobile":this.mobile,"otp":this.otp,"userId":this.email,"interests":[] })
      };
      fetch('http://localhost:9000/otp', requestOptions)
        .then(response => 
            response.json().then(data => ({
              data: data,
              status: response.status
            })).then(res => { 
              if(res.data){
                this.showValidateOTPButton = false;
                this.showCreateAccountButton = true;
                this.showOTP = false;
                this.showFirstName = true;
                this.showLastName = true;
                this.showPassword = true;
              }else{
                this.$store.dispatch('notification/spawnNotification', {
                  type: 'danger',
                  message: this.$t('Please provide correct OTP'),
                  action1: { label: this.$t('OK') }
                });                  
              }
               }))
        .catch(error => {
          throw new Error('FetchError in request to API: ' + error.toString())
        });
    },
    register () {
      this.$v.$touch();
      if (this.$v.$invalid) {

        return;
      }

      this.$bus.$emit(
        'notification-progress-start',
        this.$t('Registering the account ...')
      );
      this.$store
        .dispatch('user/register', {
          email: this.email,
          password: this.password,
          firstname: this.firstName,
          lastname: this.lastName
        })
        .then(result => {
          this.$bus.$emit('notification-progress-stop');
          if (result.code !== 200) {
            this.onFailure(result);
          } else {
            console.log("Registration completed");
            this.$store.dispatch('user/login', {
              username: this.email,
              password: this.password
            });
            this.onSuccess(i18n.t('You are logged in!'));
            this.$router.push(this.localizedRoute('/social-login'));
          }
        })
        .catch(err => {
          this.onFailure({
            result:
              'Unexpected authorization error. Check your Network conection.'
          });
          this.$bus.$emit('notification-progress-stop');
          Logger.error(err, 'user')();
        });
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
    password: {
      required
    },
    firstName: {
      required
    },
    lastName: {
      required
    },
    mobile: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  width: 30%;
  &__element {
    margin: var(--spacer-base) 0;
  }
  &__submit {
    margin: var(--spacer-xl) 0 0 0;
  }
}
.action-button {
  margin: var(--spacer-xl) 0;
}
</style>
