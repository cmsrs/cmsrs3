<?php

namespace App;

use Composer\Script\Event;

class Install
{
    public static function configure(Event $event)
    {
        $io = $event->getIO();
        $filename = dirname(__DIR__).DIRECTORY_SEPARATOR.'.env';

        if (($content = file_get_contents($filename)) === false) {
            throw \RuntimeException(sprintf('Can not read file "%1$s"', $filename));
        }

        if (($config = parse_ini_string($content)) === false) {
            throw \RuntimeException(sprintf('Can not parse file "%1$s"', $filename));
        }

        $io->write('Database setup');
        flush();

        foreach (['DB_CONNECTION', 'DB_HOST', 'DB_PORT', 'DB_DATABASE', 'DB_USERNAME'] as $key) {
            $config[$key] = $io->ask('- '.$key.' ('.$config[$key].'): ', $config[$key]);
        }
        $config['DB_PASSWORD'] = $io->askAndHideAnswer('- DB_PASSWORD: ', $config['DB_PASSWORD']);

        $io->write('Mail setup');
        flush();

        foreach (['MAIL_MAILER', 'MAIL_HOST', 'MAIL_PORT', 'MAIL_USERNAME', 'MAIL_ENCRYPTION'] as $key) {
            $config[$key] = $io->ask('- '.$key.' ('.$config[$key].'): ', $config[$key]);
        }
        $config['MAIL_PASSWORD'] = $io->askAndHideAnswer('- MAIL_PASSWORD: ', $config['MAIL_PASSWORD']);

        if (file_put_contents($filename, self::createEnvString($config)) === false) {
            throw \RuntimeException(sprintf('Can not write file "%1$s"', $filename));
        }
    }

    protected static function createEnvString(array $config)
    {
        $content = '';

        foreach ($config as $key => $value) {
            $content .= $key.'='.(is_bool($value) ? (int) $value : $value)."\n";
        }

        return $content."\n";
    }

    public static function finish(Event $event)
    {
        $event->getIO()->write('Installation successful! Your cmsRS is ready. Please run the unit tests to ensure everything is working as expected.');
    }
}
