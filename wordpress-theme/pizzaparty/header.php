<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="site-header__inner">
    <div class="site-logo">
      <?php if ( has_custom_logo() ) : the_custom_logo(); else : ?>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>"><strong><?php bloginfo( 'name' ); ?></strong></a>
      <?php endif; ?>
    </div>

    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">☰</button>

    <nav class="main-nav" id="primary-menu">
      <?php
        wp_nav_menu( array(
          'theme_location' => 'primary',
          'container'      => false,
          'fallback_cb'    => function() {
            echo '<ul><li><a href="' . esc_url( home_url( '/' ) ) . '">Início</a></li><li><a href="#pacotes">Pacotes</a></li><li><a href="#contato">Contato</a></li></ul>';
          },
        ) );
      ?>
    </nav>
  </div>
</header>
