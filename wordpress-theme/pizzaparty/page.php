<?php get_header(); ?>

<main class="site-main">
  <div class="container section">
    <?php while ( have_posts() ) : the_post(); ?>
      <article <?php post_class(); ?>>
        <header class="section__title">
          <h1><?php the_title(); ?></h1>
        </header>

        <?php if ( has_post_thumbnail() ) : ?>
          <div class="card__image" style="border-radius:16px;overflow:hidden;margin-bottom:2rem;">
            <?php the_post_thumbnail( 'large' ); ?>
          </div>
        <?php endif; ?>

        <div class="entry-content">
          <?php the_content(); ?>
        </div>
      </article>

      <?php if ( comments_open() || get_comments_number() ) comments_template(); ?>
    <?php endwhile; ?>
  </div>
</main>

<?php get_footer(); ?>
