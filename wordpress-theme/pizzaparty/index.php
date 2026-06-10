<?php get_header(); ?>

<main class="site-main">
  <div class="container section">
    <?php if ( have_posts() ) : ?>
      <div class="grid grid--3">
        <?php while ( have_posts() ) : the_post(); ?>
          <article <?php post_class( 'card' ); ?>>
            <?php if ( has_post_thumbnail() ) : ?>
              <a href="<?php the_permalink(); ?>" class="card__image"><?php the_post_thumbnail( 'large' ); ?></a>
            <?php endif; ?>
            <div class="card__body">
              <h2 class="card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
              <div class="card__excerpt"><?php the_excerpt(); ?></div>
              <p><a class="btn btn--primary" href="<?php the_permalink(); ?>">Ler mais</a></p>
            </div>
          </article>
        <?php endwhile; ?>
      </div>

      <div class="pagination">
        <?php the_posts_pagination(); ?>
      </div>

    <?php else : ?>
      <p><?php esc_html_e( 'Nenhum conteúdo encontrado.', 'pizzaparty' ); ?></p>
    <?php endif; ?>
  </div>
</main>

<?php get_footer(); ?>
