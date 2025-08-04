<?php
/**
 * Plugin Name: Designer Test Plugin
 * Plugin URI: https://example.com/designer-test-plugin
 * Description: Un plugin di test per valutare le competenze di frontend designer. Contiene errori intenzionali da correggere.
 * Version: 1.0.0
 * Author: Frontend Test
 * License: GPL v2 or later
 * Text Domain: designer-test
 */

// Previeni accesso diretto
if (!defined('ABSPATH')) {
    exit;
}

class DesignerTestPlugin {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        // ERRORE 1: Manca parentesi chiusa
        add_shortcode('designer_test', array($this, 'render_shortcode');
    }
    
    public function init() {
        // ERRORE 2: Manca punto e virgola
        load_plugin_textdomain('designer-test', false, dirname(plugin_basename(__FILE__)) . '/languages')
    }
    
    public function enqueue_assets() {
        wp_enqueue_style(
            'designer-test-style',
            plugin_dir_url(__FILE__) . 'assets/css/main.css',
            array(),
            '1.0.0'
        );
        
        // ERRORE 3: Manca dipendenza jQuery
        wp_enqueue_script(
            'designer-test-script',
            plugin_dir_url(__FILE__) . 'assets/js/frontend.js',
            array(),
            '1.0.0',
            true
        );
        
        wp_localize_script('designer-test-script', 'designerTest', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('designer_test_nonce'),
        ));
    }
    
    // ERRORE 4: Output buffering non implementato
    public function render_shortcode($atts) {
        $attributes = shortcode_atts(array(
            'title' => 'Test Component',
            'show_form' => 'true',
            'color_scheme' => 'blue'
        ), $atts);
        
        include plugin_dir_path(__FILE__) . 'templates/shortcode-template.php';
        // Manca return con output buffering
    }
    
    public function handle_form_submission() {
        // Verifica nonce
        if (!wp_verify_nonce($_POST['nonce'], 'designer_test_nonce')) {
            wp_die('Security check failed');
        }
        
        $name = sanitize_text_field($_POST['name']);
        $email = sanitize_email($_POST['email']);
        $message = sanitize_textarea_field($_POST['message']);
        
        // ERRORE 5: Parentesi mancante
        wp_send_json_success(array(
            'message' => 'Form submitted successfully!',
            'data' => array(
                'name' => $name,
                'email' => $email
            )
        // Manca parentesi chiusa
    }
}

$designer_test_plugin = new DesignerTestPlugin();
add_action('wp_ajax_submit_designer_form', array($designer_test_plugin, 'handle_form_submission'));
add_action('wp_ajax_nopriv_submit_designer_form', array($designer_test_plugin, 'handle_form_submission'));
