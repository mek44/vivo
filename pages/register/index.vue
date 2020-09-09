<template lang="pug">
	.register.d-flex.align-items-center
		.register__card.mx-auto.row

			.col-5.register__img.d-flex.align-items-center.border-right
				img(class="w-100" src="/images/welcome.svg")/

			.col.register__form.d-flex.flex-column.justify-content-center.px-5.mx-5
				.register__text.d-flex.px-5
					.col
						h2 Bienvenue,
						p(class="text-secondary") Creez votre compte gratuitement en quelques cliques

				.register__body.px-5
					form(@submit.prevent="registerNewUser")
						.form-row
							.form-group.register__form__group.col
								input(type="text" id="name" class="form-control register__input" placeholder=" " v-model.trimm="userData.name")/
								span(class="register__label") Entrez votre nom
							.form-group.register__form__group.col
								input(type="text" id="surname" class="form-control register__input" placeholder=" " v-model.trimm="userData.surname")/
								span(class="register__label") Entrez votre prenom

						.form-group.register__form__group
							input(type="email" class="form-control register__input" placeholder=" " v-model.trimm="userData.email")/
							span(class="register__label") Entrez votre email

						.form-row
							.form-group.register__form__group.col
								input(type="text" class="form-control register__input" placeholder=" " v-model.trimm="userData.pseudo")/
								span(class="register__label") Entrez votre pseudo  
							.form-group.register__form__group.col
								input(type="text" class="form-control register__input" placeholder=" " v-model.trimm="userData.f_pseudo")/
								span(class="register__label") Pseudo de votre parrain

						.form-group.register__form__group
							input(type="password" id="password" class="form-control register__input" placeholder=" " v-model="userData.password")/
							span(class="register__label") Entrez votre mot de passe

						.form-row
							.form-group.register__form__group.col.m-0
								input(type="tel" class="form-control register__input" placeholder=" " v-model.trimm="userData.phone")/
								span(class="register__label") Entrez votre numero  
							div(class="form-group register__form__group col m-0" v-if="!same_num")
								input(type="tel" class="form-control register__input" placeholder=" " v-model.trimm="userData.phone_momo")/
								span(class="register__label") Numero de compte MoMo

						.form-group.form-check.m-0
							input(type="checkbox" class="form-check-input" id="sameNum" v-model="same_num")/
							label(class="form-check-label font-weight-bold text-muted" for="sameNum") Meme numero avec votre numero Momo

						.row.mx-0.mt-3.align-items-center.justify-content-end
							button(type="submit" class="btn btn-secondary font-weight-bold" :disabled="!userData.name || !userData.surname || !userData.email || !userData.pseudo || !userData.f_pseudo || !userData.phone || !userData.phone_momo") Enregistrer
								span(class="spinner-border spinner-border-sm ml-2 mb-1" v-if="onRegister")
				.row.mx-auto
					p(class="text-muted mt-2") Aviez-vous deja un compte? 
						nuxt-link(class="text-black font-weight-bold link-item" :to="localePath({name:'signin'})" tag="a") Se Connecter

			
</template>

<script>
	export default {
		data() {
			return {
				same_num: false,
				onRegister: false,
				userData: {
					name: '',
					surname: '',
					email: '',
					pseudo: '',
					f_pseudo: '',
					phone: '',
					phone_momo: ''
				}
				
			}
		},

		methods: {
			registerNewUser() {
				if(this.same_num) this.userData.phone_momo = this.userData.phone;

				this.onRegister = true;
				console.log(this.userData);
			},
		}
	}
</script>

<style lang="scss">
	.register {
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
			height: 4rem;
			outline: none;
			position: relative;
			border-radius: 0;

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
