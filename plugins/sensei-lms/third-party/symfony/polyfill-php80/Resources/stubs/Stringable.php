<?php

namespace Sensei\ThirdParty;

interface Stringable
{
    /**
     * @return string
     */
    public function __toString();
}
\class_alias('Sensei\\ThirdParty\\Stringable', 'Stringable', \false);
