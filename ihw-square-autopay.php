<?php
/**
 * Plugin Name: IHW Square Autopay
 * Description: Square webhook endpoint for Inner Harmony Wellness autopay.
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Register Square webhook endpoint.
 */
add_action( 'rest_api_init', function () {

    register_rest_route(
        'ihw-square/v1',
        '/webhook',
        array(
            'methods'             => 'POST',
            'callback'            => 'ihw_square_webhook',
            'permission_callback' => '__return_true',
        )
    );

} );

/**
 * Receive Square webhook.
 */
function ihw_square_webhook( WP_REST_Request $request ) {

    $body = $request->get_body();

    // Temporary logging for staging/testing.
    if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
        error_log( 'IHW Square Webhook Received: ' . $body );
    }

    return new WP_REST_Response(
        array(
            'success' => true,
            'message' => 'Square webhook received',
        ),
        200
    );
}