<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'figurine' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost:3306' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '=IWTD[7uvFF/@,Jd`iai.UtjDM@d:A=&G4-;h@z01Db|Vt2tW^QUdz;1(2&XMoep' );
define( 'SECURE_AUTH_KEY',  '3KG1;|ufwJsGvS6#|)d{]en*+jHkN99B5Rv;B,#,7lhlaXSA-aEdi@,A{!anv_;=' );
define( 'LOGGED_IN_KEY',    'd$tj<?:C?gP2+U@J<!G/_K!F,|I951{j72aeHU$~`0xOhMOjc2ylx+[N:uh>n}5q' );
define( 'NONCE_KEY',        'N@^VYGs(pi?oRmDOT.XjmHX>E!Y2z]yNzcK8W]^(x+$*t72EO{B1NrMfa;9aZ}kv' );
define( 'AUTH_SALT',        'U:?m9;a&*ENyKS.{d?1mPqWfv^&?_LXD@Azv9lDw%ZpJ1kX@bMJCs!`]p=qGU=7P' );
define( 'SECURE_AUTH_SALT', 'p6,^C#S3*__hnYPx=O9hHcreE_]g/!}sy=f40amj_af4T)>P_/b+{@_P`k#Z;U;K' );
define( 'LOGGED_IN_SALT',   'rE2llp&T I8,O@ua]!}&OyO>.e{(aLMk!Fv5|)0| </L]Yi5fst[fJ#d/-cZnMzw' );
define( 'NONCE_SALT',       '8Ntjb.DIs7O*MJ|}=n@r(QS+6L6&g2xlk9C6kXVX;C@Nej+7ElkY]ESEMyEqH2<c' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
