<?php

return [

    'paths' => ['api/*','login'],

    'supportsCredentials' => true,
    'allowedOrigins' => ['*'], // ou l'URL de ton frontend, par exemple 'http://localhost:3000'
    'allowedHeaders' => ['Content-Type', 'X-Requested-With'],
    'allowedMethods' => ['GET', 'POST', 'PUT', 'DELETE'],

    'allowed_origins_patterns' => [],

    'exposed_headers' => [],

    'max_age' => 0,


];
