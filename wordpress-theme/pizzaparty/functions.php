<?php
/**
 * Pizza Party Brasil - Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! function_exists( 'pizzaparty_setup' ) ) :
function pizzaparty_setup() {
    // Make theme available for translation
    load_theme_textdomain( 'pizzaparty', get_template_directory() . '/languages' );

    // Document title from WP
    add_theme_support( 'title-tag' );

    // Featured images on posts/pages
    add_theme_support( 'post-thumbnails' );

    // Custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // HTML5 markup
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );

    // RSS feeds
    add_theme_support( 'automatic-feed-links' );

    // Responsive embeds (Gutenberg)
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'align-wide' );

    // Register menus
    register_nav_menus( array(
        'primary' => __( 'Menu Principal', 'pizzaparty' ),
        'footer'  => __( 'Menu do Rodapé', 'pizzaparty' ),
    ) );
}
endif;
add_action( 'after_setup_theme', 'pizzaparty_setup' );

/**
 * Enqueue scripts and styles
 */
function pizzaparty_scripts() {
    $version = wp_get_theme()->get( 'Version' );

    // Google Fonts
    wp_enqueue_style( 'pizzaparty-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap', array(), null );

    // Main stylesheet
    wp_enqueue_style( 'pizzaparty-style', get_stylesheet_uri(), array( 'pizzaparty-fonts' ), $version );

    // Main JS
    wp_enqueue_script( 'pizzaparty-main', get_template_directory_uri() . '/assets/js/main.js', array(), $version, true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'pizzaparty_scripts' );

/**
 * Sidebar widget area
 */
function pizzaparty_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Rodapé - Coluna 1', 'pizzaparty' ),
        'id'            => 'footer-1',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ) );
    register_sidebar( array(
        'name'          => __( 'Rodapé - Coluna 2', 'pizzaparty' ),
        'id'            => 'footer-2',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ) );
    register_sidebar( array(
        'name'          => __( 'Rodapé - Coluna 3', 'pizzaparty' ),
        'id'            => 'footer-3',
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'pizzaparty_widgets_init' );

/**
 * WhatsApp number — change here or define WHATSAPP_NUMBER in wp-config.php
 */
function pizzaparty_whatsapp_number() {
    $number = defined( 'WHATSAPP_NUMBER' ) ? WHATSAPP_NUMBER : '5511999999999';
    return apply_filters( 'pizzaparty_whatsapp_number', $number );
}

function pizzaparty_whatsapp_link( $message = 'Olá! Gostaria de um orçamento para rodízio de pizza.' ) {
    return 'https://wa.me/' . pizzaparty_whatsapp_number() . '?text=' . rawurlencode( $message );
}
