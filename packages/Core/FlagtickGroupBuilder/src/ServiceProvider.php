<?php

namespace Core\FlagtickGroupBuilder;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{

    /*
     * Register services.
     *
     * @return void
     * composer dump-autoload
     */
    public function register()
    {
        $this->app->singleton('flagtickgroupbuilder', function () {
            return new FlagtickGroupBuilder();
        });
    }

    /*
     * Bootstrap services.
     *
     * @return void
     * @throws Exception
     */
    public function boot()
    {
        if (file_exists(__DIR__.'/routes/web.php')) {
            $this->loadRoutesFrom(__DIR__.'/routes/web.php');
        }
    }
}
