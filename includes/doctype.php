<?php define ('CURRENT_PATH', 'http://www.yoururl.com/', true); ?>
<!--  BE SURE TO open/close question marks - ?php echo (CURRENT_PATH) ?   -->

<?php
/*THESE ARE THE DEFAULT CONTENTS*/
$default_title = '';
$default_keyword = '';
$default_desc = '';
?>

<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
	
	<!-- Basic Page Needs
  ================================================== -->
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<?php if ( $title_block == '')  {
        echo '<title>' . $default_title . '</title>';
    } else {
        echo '<title>' . $title_block . '</title>';
    } 
	?>
        
    <?php if ( $desc_block == '')  {
        echo '<meta name="description" content="' . $default_desc . '" />';
    } else {
        echo '<meta name="description" content="' . $desc_block . '" />';
    } 						
    ?>
        
    <?php if ( $keyword_block == '')  {
        echo '<meta name="keywords" content="' . $default_keyword . '" />';
    } else {
        echo '<meta name="keywords" content="' . $keyword_block . '" />';
    } 						
    ?>
    
	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<!-- CSS
  ================================================== -->
	<link rel="stylesheet" href="<?php echo (CURRENT_PATH) ?>css/style.css">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

	<!-- Favicons
	================================================== -->
	<link rel="shortcut icon" href="<?php echo (CURRENT_PATH) ?>images/favicon.ico">
	<link rel="apple-touch-icon" href="<?php echo (CURRENT_PATH) ?>images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo (CURRENT_PATH) ?>images/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo (CURRENT_PATH) ?>images/apple-touch-icon-114x114.png">
	
	<!-- JS / GOOGLE
	================================================== -->
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="<?php echo (CURRENT_PATH) ?>js/bootstrap.min.js"></script>

    <script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-XXXXXXX-X']);
	  _gaq.push(['_trackPageview']);
	
	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>