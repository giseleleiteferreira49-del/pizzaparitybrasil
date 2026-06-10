<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <label>
    <span class="screen-reader-text"><?php _e( 'Pesquisar por:', 'pizzaparty' ); ?></span>
    <input type="search" class="search-field" placeholder="<?php esc_attr_e( 'Pesquisar…', 'pizzaparty' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
  </label>
  <button type="submit" class="btn btn--primary"><?php _e( 'Buscar', 'pizzaparty' ); ?></button>
</form>
