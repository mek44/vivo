<template lang="pug">
	.login.d-flex.align-items-center
		.login__card.mx-auto.row

			.col-5.login__img.d-flex.align-items-center.border-right
				img(class="w-100" src="/images/authentication.svg")/

			.col.login__form.d-flex.flex-column.justify-content-around.px-5.mx-5
				.login__text.d-flex.mt-5
					.col-4
						img(class="w-100" src="/images/fingerprint.svg")/
					.col
						h2 {{ $t('password_forgotten_text') }}

				.login__body.p-5
					form(@submit.prevent="sendEmail")
						.form-group.login__form__group
							input(type="email" id="email" class="form-control login__input" placeholder=" " v-model.trimm="userData.email")/
							span(class="login__label") Entrez votre email

						.row.mx-0.mt-3.align-items-center.justify-content-between
							button(type="submit" class="btn btn-secondary font-weight-bold" :disabled="!userData.email") Reinitialiser
								span(class="spinner-border spinner-border-sm ml-2 mb-1" v-if="onReset")

				.row.mx-auto
					small(class="text-muted" v-html="$t('copyright')")
			
</template>

<script>
	export default {
		data() {
			return {
				userData: {
					email: '',
				},
				onReset: false,
			}	
		},

		methods: {
			sendEmail() {
				this.onReset = true;
				let self = this;
				console.log(this.userData);
				/*this.$auth.loginWith('local', this.userData)
  						.then(() => {
								console.log("User logged In")
								self.onReset = false;
							});*/
			}
		}
	}
</script>

<style lang="scss">
	.login {
		height: calc(100vh - 56px);

		&__card {
			width: 80%;
			height: 85%;
			background: rgb(244,240,240);
			background: -moz-linear-gradient(148deg, rgba(244,240,240,1) 3%, rgba(251,251,251,1) 36%, rgba(216,111,155,0.76234243697479) 100%);
			background: -webkit-linear-gradient(148deg, rgba(244,240,240,1) 3%, rgba(251,251,251,1) 36%, rgba(216,111,155,0.76234243697479) 100%);
			background: linear-gradient(148deg, rgba(244,240,240,1) 3%, rgba(251,251,251,1) 36%, rgba(216,111,155,0.76234243697479) 100%);
			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f4f0f0",endColorstr="#d86f9b",GradientType=1);
			box-shadow:  7px 7px 25px #e6e6e6,
      			      -7px -7px 25px #ffffff;
		}

		&__label {
			position: absolute;
			top: 50%;
    	transform: translate(0px, -50%);
			padding-left: 1rem;
			font-weight: 700;
			font-size: 1rem;
			color: var(--secondary);
			opacity: 0.8;
			-webkit-transition: all 0.3s 0s ease-in;
			-moz-transition: all 0.3s 0s ease-in;
			-o-transition: all 0.3s 0s ease-in;
			transition: all 0.3s 0s ease-in;
		}

		&__input {
			height: 5rem;
			outline: none;
			position: relative;

			&:focus {
				border-color: var(--primary);
				outline: none;
				box-shadow: none;
			}
				
			&::after {
				position: absolute;
				top: 0%;
				left: 0%;
				height: 100%;
				width: 100%;
				content: "";
    		background: #d86f9b;
				
			}

			&::-webkit-input-placeholder { 
				opacity: 0;
				
			}

			&::-moz-input-placeholder { 
				opacity: 0;
				
			}

		}

		&__input:not(:placeholder-shown) + &__label {
			transform: translate(0px, -15%);
    	top: 15%;
    	font-size: .7rem;
    	opacity: 1;
			-webkit-transition: all 0.3s 0s ease-in;
			-moz-transition: all 0.3s 0s ease-in;
			-o-transition: all 0.3s 0s ease-in;
			transition: all 0.3s 0s ease-in;
		}


		&__form__group {
			position: relative;
			//margin-bottom: 0px;
		}
	}
</style>
