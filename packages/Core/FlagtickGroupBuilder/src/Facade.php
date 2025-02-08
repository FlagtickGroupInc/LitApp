<?php

namespace Core\FlagtickGroupBuilder;

/**
 * @see \Core\FlagtickGroupBuilder\FlagtickGroupBuilder
 */
class Facade extends \Illuminate\Support\Facades\Facade
{
    /**
     * {@inheritDoc}
     */
    protected static function getFacadeAccessor(): string
    {
        return FlagtickGroupBuilder::class;
    }
}
