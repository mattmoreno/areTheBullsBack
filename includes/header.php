<li<?php if ( $meta_page == index)  {
		    echo ' id="btn_home"><span class="wlk_distext">home</span>';
 		  }
      else {
		 	echo ' id="btn_home"><a href="index.html" title="Home"><span class="wlk_distext">home</span></a>';
		  } 						
?>
</li>
<li<?php if ( $meta_page == index)  {
		    echo ' id="btn_home"><span class="wlk_distext">home</span>';
 		  }
      else {
		 	echo ' id="btn_home"><a href="'.$CURRENT_PATH.'index.html" title="Home"><span class="wlk_distext">home</span></a>';
		  } 						
?>
</li>