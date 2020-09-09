<template>
	<span @click.prevent="display_name">
  	<div class="member-view-box">
    	<div class="member-image">
      	<img src="https://image.flaticon.com/icons/svg/145/145867.svg" alt="Member">
        	<div class="member-details">
          	<h6>John Doe</h6>
          </div>
      </div>
    </div>
  </span>
</template>

<script>
	
	export default {
		data() {
			return {
			}
		},

		methods: {
			display_name() {
				//alert("Display name");
			}
		}
	}
</script>
