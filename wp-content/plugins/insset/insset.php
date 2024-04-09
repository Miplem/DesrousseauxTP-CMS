<?php
/*
Plugin Name: Insset
Plugin URI: https://mon-siteweb.com/
Description: Ceci est mon premier plugin
Author: Mon nom et prénom ou celui de ma société
Version: 1.0
Author URI: http://mon-siteweb.com/
*/
/*
register_activation_hook(__FILE__, function() {
	wp_die('Wouhou, mon premier hook');
});
*/

define('INSSET_FILE', __FILE__);
define('INSSET_DIR', dirname(INSSET_FILE));
define('INSSET_BASENAME', pathinfo((INSSET_FILE))['filename']);
define('INSSET_PLUGIN_NAME', INSSET_BASENAME);

foreach (glob(INSSET_DIR .'/classes/*/*.php') as $filename)
    if (!preg_match('/export|cron/i', $filename))
        if (!@require_once $filename)
            throw new Exception(sprintf(__('Failed to include %s'), $filename));

register_activation_hook(__FILE__, function() {
    new Insset_Install();
});

if (is_admin())
	new Insset_Admin();