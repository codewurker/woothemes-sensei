<?php

namespace Sensei\ThirdParty\Sabberworm\CSS\Comment;

use Sensei\ThirdParty\Sabberworm\CSS\OutputFormat;
use Sensei\ThirdParty\Sabberworm\CSS\Renderable;
class Comment implements Renderable
{
    /**
     * @var int
     */
    protected $iLineNo;
    /**
     * @var string
     */
    protected $sComment;
    /**
     * @param string $sComment
     * @param int $iLineNo
     */
    public function __construct($sComment = '', $iLineNo = 0)
    {
        $this->sComment = $sComment;
        $this->iLineNo = $iLineNo;
    }
    /**
     * @return string
     */
    public function getComment()
    {
        return $this->sComment;
    }
    /**
     * @return int
     */
    public function getLineNo()
    {
        return $this->iLineNo;
    }
    /**
     * @param string $sComment
     *
     * @return void
     */
    public function setComment($sComment)
    {
        $this->sComment = $sComment;
    }
    /**
     * @return string
     */
    public function __toString()
    {
        return $this->render(new OutputFormat());
    }
    /**
     * @return string
     */
    public function render(OutputFormat $oOutputFormat)
    {
        return '/*' . $this->sComment . '*/';
    }
}
