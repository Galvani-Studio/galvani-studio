<?php
if (!defined('ABSPATH')) { exit; }
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('html5', array('search-form', 'gallery', 'caption', 'style', 'script'));
    register_nav_menus(array('primary' => 'Menu principal'));
});
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('galvani-studio', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
});
add_action('init', function () {
    register_post_type('projeto', array(
        'labels' => array('name' => 'Portfólio', 'singular_name' => 'Projeto', 'add_new_item' => 'Adicionar projeto'),
        'public' => true, 'has_archive' => 'portfolio', 'rewrite' => array('slug' => 'portfolio'),
        'show_in_rest' => true, 'menu_icon' => 'dashicons-portfolio',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'revisions'),
    ));
});
function galvani_menu() {
    echo '<ul class="menu">';
    foreach (array('' => 'Início', 'servicos/' => 'Serviços', 'portfolio/' => 'Portfólio', 'studio/' => 'O Studio', 'contato/' => 'Contato') as $path => $label) {
        echo '<li><a href="' . esc_url(home_url('/' . $path)) . '">' . esc_html($label) . '</a></li>';
    }
    echo '</ul>';
}
function galvani_projects($limit = -1) {
    $projects = new WP_Query(array('post_type' => 'projeto', 'posts_per_page' => $limit, 'post_status' => 'publish'));
    echo '<div class="project-grid">';
    while ($projects->have_posts()) {
        $projects->the_post();
        echo '<article class="project"><a href="' . esc_url(get_permalink()) . '"><div class="project-image">';
        if (has_post_thumbnail()) { the_post_thumbnail('large'); }
        echo '</div><div class="caption"><p class="eyebrow">PROJETO / GALVANI STUDIO</p><h3>' . esc_html(get_the_title()) . '</h3></div></a><div class="caption">';
        the_excerpt();
        echo '<a href="' . esc_url(get_permalink()) . '">Conhecer o projeto →</a></div></article>';
    }
    if (!$projects->post_count) { echo '<p class="empty">Os projetos serão apresentados aqui após a publicação no portfólio.</p>'; }
    echo '</div>';
    wp_reset_postdata();
}
