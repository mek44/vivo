<template>
	<div class="bg-white">

		<!--Hero start-->
		<div class="row hero px-2 mx-0">
			<div class="col-6 d-flex flex-column justify-content-center align-items-center">
				<div class="hero__text__container card shadow rounded border-0 p-5 align-items-center mx-5">
					<h2 class="text-center mb-4"> {{ $t('hero_session_title') }} </h2>
					<h6 class="text-secondary text-center font-weight-bold">{{ $t('hero_session_text') }} </h6>
					<button class="btn btn-primary mt-4 font-weight-bold shadow">{{ $t('joinUs') }}</button>
				</div>
			</div>
			<div class="col-6 hero__img">
				<img src="/images/business_shop.svg" class="w-100">
			</div>
			<div class="col row justify-content-center align-items-center">
				<small class="text-muted font-weight-bold" v-html="$t('copyright')"></small>
				<div class="text-muted ml-4">
					<p>Icon</p>
				</div>
			</div>
		</div>
		<!--Hero end-->

		<!--Info card start-->
		<div class="info row mt-5 justify-content-around mx-0">
						<div class="card col-3 shadow info__card info__card--1">
				<img src="/images/agreement.svg" class="card-img-top info__card-img" alt="...">
  			<div class="card-body text-center">
					<h3 class="card-title text-grey">{{ $t('card_1_title') }}</h3>
					<h5 class="card-title text-secondary">{{ $t('card_1_subtitle')  }}</h5>
					<p class="card-text text-muted text-justify">{{ $t('card_1_text') }}</p>
					<a href="#" class="btn btn-secondary">{{ $t('card_button_text') }}</a>
  			</div>
			</div>
			<div class="card col-3 shadow info__card info__card--2">
				<img src="/images/celebrating.svg" class="card-img-top info__card-img" alt="...">
  			<div class="card-body text-center">
					<h3 class="card-title text-grey">{{ $t('card_2_title') }}</h3>
					<p class="card-text text-dark text-justify">{{ $t('card_2_text') }}</p>
					<a href="#" class="btn btn-secondary">{{ $t('card_button_text') }}</a>
  			</div>
			</div>
			<div class="card col-3 shadow info__card info__card--3">
				<img src="/images/interview.svg" class="card-img-top info__card-img" alt="...">
  			<div class="card-body text-center">
					<h3 class="card-title text-grey">{{ $t('card_3_title') }}</h3>
					<p class="card-text text-dark text-justify">{{ $t('card_3_text') }}</p>
					<a href="#" class="btn btn-secondary">{{ $t('card_button_text') }}</a>
  			</div>
			</div>
		</div>
			<!--Info card end-->

		<!--Vivo session start-->
		<div class="w-100 vivo__session my-5 bg-light px-5">
			<h1 class="text-center mb-3">{{ $t('def_vivo_title') }}</h1>
			<p class="text-justify" v-html="$t('def_vivo_text')"></p>
		</div>
		<!--Vivo session start-->

		<!--business session start-->
		<div class="row business__session mt-2 mb-5 mx-auto container">
			<div class="col-6 business__session__text">
				<h3>Le business par adhésion. <span class="text-muted">La liberte a votre porte.</span></h3>
				<p class="text-muted">Connaissez-vous une opportinute capable de vous generer des <span class="font-weight-bold">millions chaque semaine, par simple adhesion?</span> En voici une; simple et efficace...</p>
				<h6 class="font-weight-bold">Quelques raisons de votre inscrire:</h6>
				<ul class="list-group list-group-flush text-secondary">
  				<li class="list-group-item border-0 px-0">Gain sur generation infinie</li>
  				<li class="list-group-item border-0 py-0">Le debordement</li>
  				<li class="list-group-item border-0 py-0">Profondeur illimite</li>
  				<li class="list-group-item border-0 py-0">Plus d'un centre d'affaires</li>
					<li class="list-group-item border-0 py-0">Positionnement automatique</li>
				</ul>
			</div>
			<div class="col-5">
				<img src="/images/hire.svg" class="w-100">
			</div>
		</div>
		<!--business session end-->

		<div class="container row border-bottom border-top py-3 align-items-center mt-5 mx-auto">
		 <div class="col-6">
			<h3 class="text-secondary">Une chose est de mettre en place un service, <span class="text-muted">une autre est de se faire une base Clientele</span></h3>
			<p class="test-muted">Nous vous offrons la possibilite de faire connaitre votre activite a des millions de membres Vivo et atteindre plus de clients par des techniques de communications modernes telque nos chatbots sur les reseaux sociaux...</p>
		 </div>
		 <div class="col-5 border-bottom">
				<img src="/images/Around_the_world.svg" class="w-100">
		 </div>
		</div>

		<div class="row border-bottom py-3 align-items-center mx-0">
		  <div class="col-5">
				<img src="/images/connected_world.svg" class="w-100">
			</div>
			<div class="col-6">
				<h3 class="text-secondary">Recherche de partenaires d'affaires</h3>
				<p class="test-muted">De nombreux entrepreneurs nous rejoignent chaque jours pourn une raison: Profiter de la performance de notre module de recherche de partenaires pour se faire des partenaires de part le monde</p>
			</div>
		</div>

	</div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
	.hero { height: calc(100vh - 56px);
    background: #fff;
    //clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
		
		&__text__container {
			/*background: linear-gradient(145deg, #c2648c, #e777a6) !important;
    	box-shadow: 11px 11px 28px #af5a7e, -11px -11px 28px #00000033 !important;
			background: #d0cde1;
    	box-shadow: 3px 2px 13px #af5a7e, -13px 35px 36px #00000000 !important;
			box-shadow:  9px 9px 18px #e26f7e, -9px -9px 18px #ff7f90 !important;
			background: #f37787;*/
			border-radius: 10px !important;
    	box-shadow: 5px 5px 19px #dedede, -5px -5px 19px #ffffff !important;
			background: #fff;
			position: relative;
			z-index: 1;
			overflow: hidden;

			&::before {
				content: '';
				position: absolute;
				background-image: url("/images/wave_2.svg");
    		background-repeat: no-repeat;
    		background-position: bottom;
    		background-size: cover;
    		width: 100%;
    		height: 100%;
    		top: 0;
    		z-index: -1;
			}
			
		}
	}

	.info {
		padding: 4rem;
		position: relative;

		&::before {
			position: absolute;
			top: 0%;
			left: 0%;
			height: 100%;
			width: 100%;
			content: "";
    	/*background: #d86f9b;
			clip-path: polygon(0 60%, 100% 40%, 100% 100%, 0% 100%);
			clip-path: polygon(0 40%, 100% 20%, 100% 80%, 0% 100%);*/
			background-image: url(/images/wave_10.svg);
    	background-repeat: no-repeat;
    	background-position: top;
    	background-size: cover;
		}

		&__card {
			justify-content: space-between;
			height: 37rem;
			padding: 1rem;
			position: relative;
			z-index: 1;
			overflow: hidden;
		
			&-img {
				height: 50%;
			}

			& .card-title {
				font-weight: 600;
			}

			&::before {
				position: absolute;
				top: 0%;
				left: 0%;
				height: 100%;
				width: 100%;
				content: "";
    		background-repeat: no-repeat;
    		background-position: bottom;
    		background-size: 500%;
				z-index: -1;
			}

			&--1::before {
				background-image: url(/images/wave_13.svg);
			}

			&--2::before {
				background-image: url(/images/wave_11.svg);
			}

			&--3::before {
				background-image: url(/images/wave_15.svg);
			}

		}
	}

	.vivo__session {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 15rem;
		
	}

</style>
