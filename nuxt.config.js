
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap'},
			{ rel: 'stylesheet', href: '/bootstrap.min.css'},
			{ rel: 'stylesheet', href: '/tree.css'},
    ],

		script: [
			{src: '/jquery-3.5.1.slim.min.js'},
			{src: '/popper.min.js'},
			{src: '/tree.js'},
			{src: '/bootstrap.min.js'},
		],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
		'@nuxtjs/auth',
		'nuxt-i18n',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

	i18n: {
    locales: [
			{
      	code: 'fr',
      	file: 'fr-FR.js'
    	}
		],
		strategy: 'prefix_except_default',
    defaultLocale: 'fr',
		detectBrowserLanguage: false,
		lazy: true,
  	langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
      }
    }
  },
	
	auth: {
		redirect: {
    	login: '/signin',
    	logout: '/',
    	callback: '/signin',
    	home: '/'
  	},

  	strategies: {
    	local: {
      	endpoints: {
        	login: { url: '/api/auth/login', method: 'post', propertyName: false },
        	logout: { url: '/api/auth/logout', method: 'post' },
        	user: { url: '/api/auth/user', method: 'get', propertyName: false }
      	},
    	}
  	}
	},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
