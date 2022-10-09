<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the 
installation.
 * You don't have to use the web site, you can copy this file to 
"wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_database' );

/** Database username */
define( 'DB_USER', 'wp_user' );

/** Database password */
define( 'DB_PASSWORD', '123' );

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
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org 
secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing 
cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         
'1PrIP]0akJF(5QM+`z9a!T]y$ACTYcSYKgyX*IH;&U/LzFqb?Jf<4-S|ah$Id4iw' );
define( 'SECURE_AUTH_KEY',  ',`X,?Xmpi4Qo,GRUtng3$NZM2mIX7OEa=6*.=wW 
anfG{bf]VL}~$eZ)/HY6f051' );
define( 'LOGGED_IN_KEY',    'v7^(1xci$9R~x;k 
n#D*xczN=CbEx:#3bS=M*0dmEbMu6pg9R2R,2`1eg{yq54O(' );
define( 'NONCE_KEY',        
'QIvtuNzkt*u/TuP@h(gl*<.5+eRQ7M-vMB,!k~XUt[PuW-,(;3CVo5i*IBrUt*L(' );
define( 'AUTH_SALT',        
'TJV!<?;|=P~~i[y+P(@ZHL.yYJ/EU(:y3-gv!6!SKfM4tyys!?Q!~D=pXEX0)@+0' );
define( 'SECURE_AUTH_SALT', 
'Xa>k[FHtaUOoCb#2~3[Z.;!^EV6y8/y.6ta9F<0/EN]XuUkxL)e3!UqA&9[k)<rm' );
define( 'LOGGED_IN_SALT',   '=e$_NPPxi^Byi-N:t$Mf-30>C$( 
F!fh!&Isk:dVX^)ur41_Mn~.+}EN}3|JC2BD' );
define( 'NONCE_SALT',       
'J!<;ns==?F+]~c#J+(:E]y6C30Qjj#HY=1*Nb10(1FQZu1`equ$>C,5hDK9 o&nz' );

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
 * Change this to true to enable the display of notices during 
development.
 * It is strongly recommended that plugin and theme developers use 
WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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

