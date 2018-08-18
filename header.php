
<!DOCTYPE html>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?> >
	<head profile="http://gmpg.org/xfn/11">
		<title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
		<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
		<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats please -->
		<meta name="viewport" content="width=device-width">
		<!-- <link rel="stylesheet" type="text/css" href="<?php // get_template_directory_uri() . 'style.css'; ?>" /> -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="screen" />
		<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
		<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css" media="screen" />		

		<!-- <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php // bloginfo('rss2_url'); ?>" />
		<link rel="alternate" type="text/xml" title="RSS .92" href="<?php // bloginfo('rss_url'); ?>" />
		<link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="<?php // bloginfo('atom_url'); ?>" />
		<link rel="pingback" href="<?php // bloginfo('pingback_url'); ?>" /> -->
		<!-- meta http-equiv="refresh" content="3" -->
		<?php // wp_get_archives('type=monthly&format=link'); ?>
		<?php //comments_popup_script(); // off by default ?>
		<?php wp_head(); ?>
	</head>

	<!-- WP-header -->
	<div id="header" ><!-- apply .sticky class to get mobile -->        
		<div class="splash">
			<div id="brand">
				<a href="<?php echo esc_url(home_url() ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<img src="<?php echo get_template_directory_uri(); ?>/images/Neo-logo.png" alt="Logo" width="100" height="auto" />
				</a>
			</div>
			<h2><?php // bloginfo('description'); ?></h2>
		</div><!-- End of Splash -->
		<div id="nav-menu" class="main-v1 wp-header-array">      
				<?php 
					wp_nav_menu(array(
						'theme_location' => 'header_navigation', // menu slug from step 1
						'container' => false, // 'div' container will not be added
						'menu_class' => 'nav', // <ul class="nav"> 
						'fallback_cb' => 'default_header_nav', // name of default function from step 2
					));
				?>            
		 </div><!-- End of Nav-Menu -->
	</div><!-- /WP-header -->

<body>
	<div id="content"><!-- Content wrapper starts -->