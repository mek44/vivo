<template>
<!-- partial:index.partial.html -->
	<div class="body genealogy-body genealogy-scroll">
  	<div class="genealogy-tree">
    	<ul>
      	<li>
					<tree-child/>
          	<ul class="active">
            	<li>
								<tree-child/>
                <ul>
                	<li>
										<tree-child/>
                  </li>
                            
                  <li>
										<tree-child/>
                  </li>
                </ul>
              </li>

              <li>
								<tree-child/>
                <ul class="active">
                	<li>
										<tree-child/>
                  </li>
                  <li>
										<tree-child/>
                  </li>
                </ul>
              </li>
            </ul>
        </li>
     	</ul>
   	</div>
	</div>
</template>

<script>
	import treeChild from '~/components/tree_child'

	export default {
		components: {
			treeChild
		}
	}
</script>

