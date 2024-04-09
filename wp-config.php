<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/Applications/MAMP/htdocs/devoirWordpress/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'avril' );

/** Database username */
define( 'DB_USER', 'avril' );

/** Database password */
define( 'DB_PASSWORD', 'avril' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-2y)! +^<S[}|tKENEC[WGPV:,t91%(f?sdnhGgJ0A-k1l,OC$gp/gAK4iZ}$~LG' );
define( 'SECURE_AUTH_KEY',  '*w2I}>`uV?5;e1(k}}=Y{yR::>6s5Ct7(Q87%FfwS2vnlo97c5,H>pP1hICl3wyd' );
define( 'LOGGED_IN_KEY',    'J;y@Fne/}TvuDws&P$BKcZ(YGrWwIM``Z]ExR/HBpqBi!XBg<2UtO$g%nw#AvJTf' );
define( 'NONCE_KEY',        'kl^g.Uu5cpv?XZNA`kx:1tJ*]+{k$t{[eG;>:!dg2!nU=qqTuyL5O 1IE>u_Bt78' );
define( 'AUTH_SALT',        '^3~)J* C@Wlz<d#ug+I.DA8p|bgrb$Np>ip@A2o,-GNH.]Cev^Ed~ 9Q5`uY5d:(' );
define( 'SECURE_AUTH_SALT', 'fqAEsd7B4LGvf43iEWWac[]wmTdttETaX<XI@(k:E(oA%Uqc=J?CkGO+N+pL+wQ9' );
define( 'LOGGED_IN_SALT',   '<j+DzIvFT`@H]aNa:&mnCjk720d:k&<y|ePTp.u;:EEJ>y7t;|~oJwp;xA]8K1G7' );
define( 'NONCE_SALT',       'f|AzaVo;y60q2#};9jz^ZogU{manz>ap;> 1H9{gYnEc<$fL8;Q-T9< cm`,9;*,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
