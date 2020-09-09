<template>
	<div class="bg-white">

		<!--Vivo session start-->
		<div class="w-100 vivo__session px-5 pb-0">

			<div class="vivo__session__text-container col-9 d-flex flex-column">
				<h1 class="mb-3" v-html="$t('welcome')"></h1>
				<h3 class="text-justify font-weight-light" v-html="$t('dashboard_text')"></h3>
				<ul class="nav nav-tabs mt-auto border-0">
  				<li class="nav-item">
    				<a class="nav-link active" data-toggle="tab" href="#tree">Arbre</a>
  				</li>
  				<li class="nav-item">
    				<a class="nav-link" data-toggle="tab" href="#profile">Profile</a>
  				</li>
				</ul>
			</div>

			<div class="vivo__session__amount-container col p-5 row flex-column mx-0 justify-content-between mb-3">
				<div class="vivo__session__total row mx-0 align-items-baseline">
					<h4 class="mb-0 mr-2">{{ $t('dashboard_total_price_paid') }}</h4><span>10000</span>
				</div>
				<div class="vivo__session__total row mx-0 align-items-baseline">
					<h4 class="mb-0 mr-2">{{ $t('dashboard_total_price_received') }} </h4><span>10000</span>
				</div>
			</div>

		</div>
		<!--Vivo session start-->

		<div class="tab-content mt-3">
  		<div class="tab-pane fade show active" id="tree">
					<div class="container row mx-auto justify-content-center">
						<tree/>
					</div>
				<!--tree session end-->
			</div>

  		<div class="tab-pane fade" id="profile">
				<!--profile session start-->
					<div class="container row flex-column mx-auto">
						<h5 class="text-center my-3 font-weight-bold">Modifiez votre profil</h5>
						<div class="register__body px-0 col w-75 mx-auto">
							<form action="">
								<div class="form-row">
									<div class="form-group register__form__group col">
										<input class="form-control register__input" type="text" placeholder=" ">
										<span class="register__label">Entez votre nom</span>
									</div>
									<div class="form-group register__form__group col">
										<input class="form-control register__input" type="text" placeholder=" ">
										<span class="register__label">Entez votre prenom</span>
									</div>
								</div>
				
								<div class="form-group register__form__group">
									<input class="form-control register__input" type="email" placeholder=" ">
									<span class="register__label">Entez votre email</span>
								</div>

								<div class="form-group register__form__group">
									<input class="form-control register__input" type="password" placeholder=" ">
									<span class="register__label">Entez votre mot de passe</span>
								</div>
								
								<div class="form-row">
									<div class="form-group register__form__group col">
										<input type="tel" class="form-control register__input" placeholder=" ">
										<span class="register__label">Entrez votre numero</span>
									</div>
									<div class="form-group register__form__group col">
										<input type="tel" class="form-control register__input" placeholder=" ">
										<span class="register__label">Numero de votre compte MoMo</span>
									</div>
								</div>

								<div class="row mx-0 mt-3 align-items-center">
									<button class="btn btn-secondary font-weight-bold" type="submit">Enregister</button>
								</div>
							</form>
						</div>
					</div>
				<!--profile session end-->

			</div>
		</div>
	</div>
</template>

<script>
	import tree from '~/components/tree'

	export default {
		middleware: 'islogged',

		components: {
			tree,
		}
	}
</script>

<style lang="scss" scope>

	div.vivo__session {
		display: flex;
		flex-direction: row;
	  //background: #343a4073;	
	  background: #facce8;	
		padding: 2rem;
		justify-content: space-between;
		height: 15rem;

		&__amount-container {
			border-radius: 50px;
			background: #facce8;
			box-shadow:  -5px -5px 13px #e1b8d1, 
             				5px 5px 13px #ffe0ff;
		}
	}

	.nav-link {
		font-weight: bold;
	}

	.register {
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
