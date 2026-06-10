<?php
/**
 * Front Page Template - Landing page
 */
get_header(); ?>

<main class="site-main">

  <!-- HERO -->
  <section class="hero">
    <div class="container hero__content">
      <h1>Rodízio de pizza artesanal direto no seu evento</h1>
      <p>Forno a lenha levado até você. Massa de fermentação natural, ingredientes premium e atendimento que vira memória.</p>
      <a class="btn btn--whatsapp" href="<?php echo esc_url( pizzaparty_whatsapp_link() ); ?>" target="_blank" rel="noopener">
        Solicitar orçamento no WhatsApp
      </a>
    </div>
  </section>

  <!-- PACOTES -->
  <section id="pacotes" class="section">
    <div class="container">
      <div class="section__title">
        <h2>Nossos Pacotes</h2>
        <p>Escolha a experiência ideal para o seu evento.</p>
      </div>

      <div class="grid grid--3">
        <?php
        // Lista os 3 últimos posts da categoria "pacotes" se existir, ou páginas filhas
        $pacotes = new WP_Query( array(
          'post_type'      => 'page',
          'posts_per_page' => 3,
          'meta_key'       => '_wp_page_template',
          'meta_value'     => 'page-pacote.php',
        ) );

        if ( $pacotes->have_posts() ) :
          while ( $pacotes->have_posts() ) : $pacotes->the_post(); ?>
            <article class="card">
              <?php if ( has_post_thumbnail() ) : ?>
                <div class="card__image"><?php the_post_thumbnail( 'large' ); ?></div>
              <?php endif; ?>
              <div class="card__body">
                <h3 class="card__title"><?php the_title(); ?></h3>
                <div><?php the_excerpt(); ?></div>
                <p><a class="btn btn--primary" href="<?php the_permalink(); ?>">Ver detalhes</a></p>
              </div>
            </article>
          <?php endwhile;
          wp_reset_postdata();
        else :
          // Fallback estático
          $fallback = array(
            array( 'Prata', 'Pizza ilimitada + bebidas básicas. Para até 30 convidados.' ),
            array( 'Ouro', 'Pizza ilimitada + tábua de frios + bebidas premium. Até 60 convidados.' ),
            array( 'Experience', 'Pacote completo com chef dedicado, sobremesa e estação de drinks. Sob medida.' ),
          );
          foreach ( $fallback as $p ) : ?>
            <article class="card">
              <div class="card__body">
                <h3 class="card__title">Pacote <?php echo esc_html( $p[0] ); ?></h3>
                <p><?php echo esc_html( $p[1] ); ?></p>
                <p><a class="btn btn--primary" href="<?php echo esc_url( pizzaparty_whatsapp_link( 'Quero saber sobre o pacote ' . $p[0] ) ); ?>">Quero esse</a></p>
              </div>
            </article>
        <?php endforeach;
        endif; ?>
      </div>
    </div>
  </section>

  <!-- CONTEÚDO DA PÁGINA INICIAL -->
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php if ( trim( get_the_content() ) ) : ?>
      <section class="section section--alt">
        <div class="container">
          <?php the_content(); ?>
        </div>
      </section>
    <?php endif; ?>
  <?php endwhile; endif; ?>

  <!-- CTA FINAL -->
  <section id="contato" class="section">
    <div class="container section__title">
      <h2>Vamos planejar seu evento?</h2>
      <p>Responda em menos de 5 minutos pelo WhatsApp.</p>
      <p><a class="btn btn--whatsapp" href="<?php echo esc_url( pizzaparty_whatsapp_link() ); ?>" target="_blank" rel="noopener">Falar agora</a></p>
    </div>
  </section>

</main>

<?php get_footer(); ?>
