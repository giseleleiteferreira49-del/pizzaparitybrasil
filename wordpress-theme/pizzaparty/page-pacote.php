<?php
/**
 * Template Name: Página de Pacote
 *
 * Use este template ao criar páginas de pacote (Prata, Ouro, Experience etc.)
 * para que apareçam automaticamente na home.
 */
get_header(); ?>

<main class="site-main">
  <div class="container section">
    <?php while ( have_posts() ) : the_post(); ?>
      <article <?php post_class( 'card' ); ?> style="overflow:visible;">
        <?php if ( has_post_thumbnail() ) : ?>
          <div class="card__image" style="border-radius:16px 16px 0 0;">
            <?php the_post_thumbnail( 'large' ); ?>
          </div>
        <?php endif; ?>
        <div class="card__body" style="padding:2.5rem;">
          <h1 class="card__title" style="font-size:2.5rem;"><?php the_title(); ?></h1>
          <div class="entry-content"><?php the_content(); ?></div>
          <p style="margin-top:2rem;">
            <a class="btn btn--whatsapp" href="<?php echo esc_url( pizzaparty_whatsapp_link( 'Olá! Quero o pacote ' . get_the_title() ) ); ?>" target="_blank" rel="noopener">
              Quero esse pacote
            </a>
          </p>
        </div>
      </article>
    <?php endwhile; ?>
  </div>
</main>

<?php get_footer(); ?>
