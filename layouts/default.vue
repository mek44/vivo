<template>
  <div>
		<header class="nav-bar">
			<nav class="container navbar navbar-expand-lg justify-content-between">
				<nuxt-link class="navbar-brand" :to="localePath('index')">Logo</nuxt-link>
  			<div class="collapse navbar-collapse flex-grow-0" id="navbarText">
					<div class="d-flex">
						<ul class="nav-bar__list">

							<nuxt-link :to="localePath({name: 'signin'})" tag="li" class="nav-bar__list-item" active-class="nav-bar__list-item--active" exact v-if="!$auth.loggedIn"><a class="nav-bar__link">{{ $t('signin') }}</a></nuxt-link>
							<nuxt-link :to="localePath({name: 'register'})" tag="li" class="nav-bar__list-item" active-class="nav-bar__list-item--active" exact v-if="!$auth.loggedIn"><a class="nav-bar__link">{{ $t('register') }}</a></nuxt-link>
							<li class="nav-bar__list-item" v-else><button class="btn btn-danger font-weight-bold">{{ $t('logout') }}</button></li>
						</ul>
					</div>
  			</div>
			</nav>
		</header>
		<main>
    	<nuxt />
		</main>
  </div>
</template>

<style lang="scss">
	body {
  	font-family: 'Nunito Sans', sans-serif;;
  	-ms-text-size-adjust: 100%;
  	-webkit-text-size-adjust: 100%;
  	-moz-osx-font-smoothing: grayscale;
  	-webkit-font-smoothing: antialiased;
	}
	.p-container {
		padding-left: 10rem;
		padding-right: 10rem;
	}

	.container {
		max-width: 90%;
	}
	
	.nav-bar {
		background-color: #fff;
		padding-top: .5rem;

		&__list {
			list-style-type: none;
    	display: flex;
    	justify-content: space-between;
		}

		&__list-item {
			margin-left: 1rem;
			margin-right: 1rem;
			position: relative;

			&::before,
			&--active::before {
				position: absolute;
				top: 100%;
				width: 100%;
				height: 10%;
				content: '';
				background-color: #3f3d56;
				-webkit-transition: all 0.3s 0s ease-in;
				-moz-transition: all 0.3s 0s ease-in;
				-o-transition: all 0.3s 0s ease-in;
				transition: all 0.3s 0s ease-in;
				transform: scaleX(0);
				transform-origin: center;
			}

			&:hover::before,
			&--active::before {
				transform: scaleX(1);
				-webkit-transition: all 0.3s 0s ease-in;
				-moz-transition: all 0.3s 0s ease-in;
				-o-transition: all 0.3s 0s ease-in;
				transition: all 0.3s 0s ease-in;
			}

		}

		&__link:link,
		&__link:focus,
		&__link {
			text-decoration: none;
			font-weight: 700;
			color: #3f3d56;
			font-size: 1rem;

			&:hover {
				color: #3f3d56;
				text-decoration: none;
			}

		}
	}	
</style>
