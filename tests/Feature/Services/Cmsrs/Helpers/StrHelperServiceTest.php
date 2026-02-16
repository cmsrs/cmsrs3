<?php

namespace Tests\Feature\Services\Cmsrs\Helpers;

use App\Services\Cmsrs\Helpers\StrHelperService;
use Tests\TestCase;

class StrHelperServiceTest extends TestCase
{
    protected function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        putenv('CURRENCY="USD"');
        putenv('CACHE_ENABLE=false');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');
        putenv('DEMO_STATUS=false');
        putenv('IS_SHOP=true');
        putenv('IS_LOGIN=true');
        putenv('IS_REGISTER=true');
        putenv('IS_HEADLESS=false');

        parent::setUp();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    public function test_filter1()
    {
        $strIn = 'abc123';
        $strOut = StrHelperService::filterFileName($strIn, 'png');
        $this->assertEquals($strIn.'.png', $strOut);
    }

    public function test_filter2()
    {
        // $delimiter = '-';
        $to_replace = ['ą', 'ę', 'ó', 'ś', 'ć', 'ń', 'ł', 'ż', 'ź', 'Ą', 'Ę', 'Ó', 'Ś', 'Ć', 'Ń', 'Ł', 'Ż', 'Ź', // Polish
            'ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü',  // German
            // '%20',
            // ' '
        ];
        $replace_with = ['a', 'e', 'o', 's', 'c', 'n', 'l', 'z', 'z', 'A', 'E', 'O', 'S', 'C', 'N', 'L', 'Z', 'Z',
            'a', 'o', 'u', 'ss', 'A', 'O', 'U',
            // $delimiter,
            // $delimiter
        ];

        $ii = 0;
        for ($i = 0; $i < count($to_replace); $i++) {
            $strIn = $to_replace[$i];
            $strOutExpect = $replace_with[$i];
            $strOut = StrHelperService::filterFileName($strIn, 'png');
            $this->assertEquals(strtolower($strOutExpect).'.png', strtolower($strOut));
            $ii++;
        }
        $this->assertEquals($ii, count($to_replace));
        $this->assertEquals($ii, count($replace_with));
    }

    public function test_filter3()
    {
        $strIn = '  Abc 123  ŻŹcv 12 .png ';
        $strOut = StrHelperService::filterFileName($strIn, 'png');
        $this->assertEquals('abc-123-zzcv-12-png.png', $strOut);
    }

    public function test_filter4()
    {
        $strIn = '  Abc 123  ŻŹcv 12 .png ';
        $strOut = StrHelperService::filterFileName($strIn, 'xxx');
        $this->assertEquals('abc-123-zzcv-12-png.xxx', $strOut);
    }
}
