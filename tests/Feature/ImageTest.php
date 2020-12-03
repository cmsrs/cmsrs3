<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
use App\Image;
use App\Translate;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ImageTest extends Base
{
    use RefreshDatabase;

    const STR_DESC_IMG1 = 'description img1';

    private $name1;
    private $name2;
    private $pageId;
    private $arrPageId;
    private $testImgData;
    private $pagesData;


    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        parent::setUp();
        ini_set('memory_limit', '256M');
        $this->createUser();

        $this->arrPageId = array();

        $this->name1 = 'phpunittest1.jpg';
        $file1 = $this->getFixtureBase64($this->name1);

        $this->name2 = 'phpunittest2.jpg';
        $file2 = $this->getFixtureBase64($this->name2);

        $this->testImgData =
        [
            'title'     =>  [ 'en' =>  'test p2'],
            'short_title' =>  [ 'en' =>  'p22'],
            'description' =>  [ 'en' =>  'test1234'],
            'published' => 0,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'contact',
            'content' =>   [ 'en' =>  'lorem ipsum'],
            'menu_id' => null,
            'page_id' => null,
            'images' => [
              ['name' => $this->name1, 'data' => $file1, 'alt' => ['en' => self::STR_DESC_IMG1] ],
              ['name' => $this->name2, 'data' => $file2 ] //, 'alt' => ['en' => 'description img2' ]]
            ]
        ];


        $response = $this->post('api/pages?token='.$this->token, $this->testImgData);
        $res = $response->getData();

        $this->assertTrue($res->success);

        $pageId = $res->data->pageId;
        $this->assertNotEmpty($pageId);

        $this->pageData = $res->data->data;

        $this->pageId = $pageId;
    }

    protected function tearDown(): void
    {
        if (empty($this->arrPageId)) {
            $this->clear_imgs();
        } else {
            foreach ($this->arrPageId as $pageId) {
                $this->pageId = $pageId;
                $this->clear_imgs();
            }
        }
        parent::tearDown();
    }


    private function clear_imgs()
    {
        $pageId = $this->pageId;

        $objPage = Page::find($pageId);

        if ($objPage) {  //delete img from fs.
            $objPage->delete();
        }
    }

    /** @test */
    public function it_will_set_translate()
    {

      //one lang: en, and two images
        $this->assertEquals(2, Translate::query()->whereNotNull('image_id')->where('column', 'alt')->count());

        $altEn1 = Translate::query()->whereNotNull('image_id')->where('column', 'alt')->where('lang', 'en')->whereNotNull('value')->get('value')->first()->value;
        $this->assertEquals(self::STR_DESC_IMG1, $altEn1);

        $altEn2 = Translate::query()->whereNotNull('image_id')->where('column', 'alt')->where('lang', 'en')->whereNull('value')->get('value')->first()->value;
        $this->assertEquals(null, $altEn2);
    }

    /** @test */
    public function it_will_get_page_with_images_docs()
    {
        $response0 = $this->get('api/page/'.$this->pageId.'/fr');  //this method doesnt cointain ticket - ti is avaliable as guest

        $this->assertFalse($response0->getData()->success);
      
        $response3 = $this->get('api/page/'.$this->pageId.'/en');

        $res3 = $response3->getData();
        $this->assertTrue($res3->success);


        $this->assertEquals($this->pageId, $res3->data->id);
        $this->assertNotEmpty($res3->data->type);

        $count = 2;
        $this->assertEquals($count, count($res3->data->images));

        $page = Page::findOrFail($this->pageId);


        $arrImages =  $page->arrImages('en');

        for ($i=0; $i<$count; $i++) {
            $this->assertEquals($arrImages[$i]['org'], $res3->data->images[$i]->org);
            $this->assertEquals($arrImages[$i]['small'], $res3->data->images[$i]->small);
            $this->assertEquals($arrImages[$i]['medium'], $res3->data->images[$i]->medium);
            $this->assertEquals($arrImages[$i]['id'], $res3->data->images[$i]->id);
            $this->assertEquals($arrImages[$i]['alt']['en'], $res3->data->images[$i]->alt->en);

            //ti is change only after adding parameter to function: arrImages
            if ($i == 0) {
                $this->assertNotEmpty($arrImages[$i]['altlang']);
            }
            if ($i == 1) {
                $this->assertEmpty($arrImages[$i]['altlang']);
            }

            $this->assertTrue(isset($arrImages[$i]['altlang']));
        }
    }

    /** @test */
    public function it_will_get_pages_with_images_docs()
    {
        $response2 = $this->get('api/pages?token='.$this->token);

        $res2 = $response2->getData();
        $this->assertTrue($res2->success);


        $this->assertEquals(count($res2->data), 1);

        $this->assertEquals($res2->data[0]->id, $this->pageId);

        $this->assertEquals(count($res2->data[0]->images), count($this->testImgData['images']));

        $this->assertEquals(count((array)$res2->data[0]->images[0]->fs), count(Image::$thumbs) + 1);
        $this->assertEquals(count((array)$res2->data[0]->images[1]->fs), count(Image::$thumbs) + 1);


        $this->assertEquals($res2->data[0]->images[0]->name, $this->testImgData['images'][0]['name']);

        $this->assertIsInt($res2->data[0]->images[0]->position);
        $this->assertIsInt($res2->data[0]->images[0]->page_id);
        $this->assertIsInt($res2->data[0]->images[0]->id);


        $this->assertObjectHasAttribute('alt', $res2->data[0]->images[0]);
        $this->assertNotEmpty($res2->data[0]->images[0]->alt);
        $this->assertEquals(self::STR_DESC_IMG1, $res2->data[0]->images[0]->alt->en);

        $this->assertEquals($res2->data[0]->images[1]->name, $this->testImgData['images'][1]['name']);

        $this->assertObjectHasAttribute('alt', $res2->data[0]->images[1]);
        $this->assertEquals($res2->data[0]->images[1]->alt->en, null);

        $this->assertEquals(pathinfo($res2->data[0]->images[1]->fs->org, PATHINFO_BASENAME), $this->name2);

        foreach ($res2->data[0]->images[0]->fs as $key => $urlImg) {
            $fs = public_path($urlImg);
            $this->assertFileExists($fs);
        }
      
        $page = Page::findOrFail($this->pageId);
        $arrImages =  $page->arrImages('en');
        $this->assertEquals(2, count($arrImages));


        $this->assertNotEmpty($arrImages[0][Image::IMAGE_ORG]);
        $this->assertNotEmpty($arrImages[0][Image::IMAGE_THUMB_TYPE_SMALL]);
        $this->assertNotEmpty($arrImages[0][Image::IMAGE_THUMB_TYPE_MEDIUM]);
        $this->assertNotEmpty($arrImages[0]['alt']);
        $this->assertNotEmpty($arrImages[0]['id']);
        $this->assertNotEmpty($arrImages[0]['altlang']);
        //$this->clear_imgs();
    }


    /** @test */
    public function it_will_delete_page_with_images_docs()
    {
        $responseAllBefore = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
        $resAllBefore = $responseAllBefore->getData();

        foreach ($resAllBefore->data as $img) {
            $imagesFs =  Image::getAllImage($img);

            foreach ($imagesFs as $imgFs) {
                $this->assertFileExists($imgFs);
            }
        }

        $translateBefore = Translate::query()->whereNotNull('image_id')->where('column', 'alt')->get()->toArray();
        $this->assertEquals(2, count($translateBefore));
        $this->assertEquals(self::STR_DESC_IMG1, $translateBefore[0]['value']);
        $this->assertEquals(null, $translateBefore[1]['value']);


        $objPage = Page::find($this->pageId);
        $altEn = $objPage->images()->first()->translatesByColumnAndLang('alt', 'en'); //For this method (translatesByColumnAndLang) maybe should create new test.
        $this->assertEquals(self::STR_DESC_IMG1, $altEn);
        $this->assertEquals(2, $objPage->images()->get()->count());


        $response0 = $this->delete('api/pages/'.$this->pageId.'?token='.$this->token);
        $res0 = $response0->getData();

        $this->assertTrue($res0->success);

        $this->assertEquals(0, $objPage->images()->get()->count());

        $translateAfter = Translate::query()->whereNotNull('image_id')->where('column', 'alt')->get()->toArray();
        $this->assertEmpty($translateAfter);

        $responseAllAfter = $this->get('api/pages?token='.$this->token);
        $resAllAfter = $responseAllAfter->getData();
        $this->assertEmpty($resAllAfter->data);

        $responseAllImgAfter = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
        $resAllImgAfter = $responseAllImgAfter->getData();
        $this->assertEmpty($resAllImgAfter->data);

        foreach ($resAllBefore->data as $img) {
            $imagesFs =  Image::getAllImage($img);

            if ($imagesFs) {
                foreach ($imagesFs as $imgFs) {
                    //$this->assertFileNotExists($imgFs);
                    $this->assertFileDoesNotExist($imgFs);
                }
            }
        }
        //$this->clear_imgs();
    }


    /** @test */
    public function it_will_delete_image_docs()
    {
        //delete first image
        $response2 = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
        $res2 = $response2->getData();

        $imgToDel = $res2->data[0];
        $this->assertNotEmpty($imgToDel->id);

        $imgDir = Image::getImageDir('page', $imgToDel->page_id, $imgToDel->id);
        $file = $imgDir."/".$imgToDel->name;
        $this->assertFileExists($file);

        $fileName = pathinfo($imgToDel->name, PATHINFO_FILENAME);
        $fileExt = pathinfo($imgToDel->name, PATHINFO_EXTENSION);
        foreach (Image::$thumbs as $thumbName => $dimension) {
            $fileThumb = $imgDir.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
            $this->assertFileExists($fileThumb);
        }

        $translateBefore = Translate::query()->where('image_id', $imgToDel->id)->where('column', 'alt')->get()->toArray();
        $this->assertEquals(1, count($translateBefore));
        $this->assertEquals(self::STR_DESC_IMG1, $translateBefore[0]['value']);

        $responseDel = $this->delete('api/images/'.$imgToDel->id.'?token='.$this->token);

        $translateAfter = Translate::query()->where('image_id', $imgToDel->id)->where('column', 'alt')->get()->toArray();
        $this->assertEmpty($translateAfter);

        $this->assertFileDoesNotExist($file);

        foreach (Image::$thumbs as $thumbName => $dimension) {
            $fileThumb = $imgDir.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
            $this->assertFileDoesNotExist($fileThumb);
        }


        $response22 = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
        $res22 = $response22->getData();
        $this->assertTrue($res22->success);
        $this->assertEquals(count($res22->data), 1);
        //$this->clear_imgs();
    }


    /** @test */
    public function it_will_get_images_by_page_id_docs()
    {
        $response2 = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);


        $res2 = $response2->getData();
        $this->assertTrue($res2->success);
        $this->assertEquals(count($res2->data), 2);

        foreach ($res2->data as $imageUrl) {
            $fs = (array)$imageUrl->fs;

            $this->assertEquals(count($fs), count(Image::$thumbs) + 1);
        }
        $this->assertEquals($res2->data[0]->name, $this->name1);

        //$this->clear_imgs();
    }


    /** @test */
    public function it_will_add_pages_with_the_same_image_name()
    {

      //test fake
        $this->testImgData['images'][1]['name'] =  $this->name1;
        $this->assertEquals($this->testImgData['images'][0]['name'], $this->testImgData['images'][1]['name']);

        $this->testImgData['title']['en'] = 'uniq tilte';
        $responseErr = $this->post('api/pages?token='.$this->token, $this->testImgData);
        $resErr = $responseErr->getData();

        $this->assertTrue($resErr->success);


        //clear images all pages
        $response = $this->get('api/pages?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);

        $this->assertEquals(count($res->data), 2);
        $this->assertEquals(count($res->data[1]->images), 2);

        $this->assertEquals($res->data[1]->images[0]->name, $res->data[1]->images[1]->name);

      
        foreach ($res->data as $page) {
            $this->arrPageId[] = $page->id;
            //$this->clear_imgs();
        }
    }

    /** @test */
    public function it_will_update_page_with_images_docs()
    {
        $this->assertEquals(count((array)$this->pageData->images), 2);
        $this->assertEquals($this->pageData->title->en, $this->testImgData['title']['en']);

        $response0 = $this->get('api/pages?token='.$this->token);


        $res0 = $response0->getData();
        $this->assertTrue($res0->success);
        $testPage0 = $res0->data[0];

        $existChangeAltImg = $testPage0->images;
        $this->assertEquals(count($existChangeAltImg), 2);

        $alt1 = ['en' => 'alt1'];
        $alt2 = ['en' => null];

        $existChangeAltImg = [
            ['id' => $existChangeAltImg[0]->id, 'alt' => $alt1],
            ['id' => $existChangeAltImg[1]->id, 'alt' => $alt2]
        ];

        $name3 = 'phpunittest2.jpg';
        $file3 = $this->getFixtureBase64($name3);

        $newImages = [
            ['name' => $name3, 'data' => $file3 ],
            ['name' => $name3, 'data' => $file3 ]
        ];

        $images = array_merge($existChangeAltImg, $newImages);
        $this->assertEquals(count($images), 4);

        $updateTitle = 'Update img Title';
        $testImgData['title']['en'] = $updateTitle;
        $testImgData['short_title']['en'] = 'test123';
        $testImgData['images'] = $images;

        $translateBefore = Translate::query()->whereNotNull('image_id')->where('column', 'alt')->get()->toArray();
        $this->assertEquals(2, count($translateBefore));
        $this->assertEquals(self::STR_DESC_IMG1, $translateBefore[0]['value']);
        $this->assertEquals(null, $translateBefore[1]['value']);

        // ----PUT--------
        $response = $this->put('api/pages/'.$this->pageId.'?token='.$this->token, $testImgData);

        $translateAfter = Translate::query()->whereNotNull('image_id')->where('column', 'alt')->get()->toArray();
        $this->assertEquals(4, count($translateAfter));
        $this->assertEquals($alt1['en'], $translateAfter[0]['value']);
        $this->assertEquals($alt2['en'], $translateAfter[1]['value']);
        $this->assertEquals(null, $translateAfter[2]['value']);
        $this->assertEquals(null, $translateAfter[3]['value']);


        $res = $response->getData();


        $this->assertTrue($res->success);

        $response2 = $this->get('api/pages?token='.$this->token);
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);

        $testPage = $res2->data[0];

        $this->assertEquals($testPage->id, $this->pageId);

        $this->assertEquals($testPage->title->en, $updateTitle);
        $this->assertEquals(count($testPage->images), 4);

        $this->assertEquals(pathinfo($testPage->images[2]->fs->org, PATHINFO_BASENAME), $name3);
        $this->assertEquals(count((array)$testPage->images[2]->fs), count(Image::$thumbs) + 1);

        $this->assertEquals($testPage->images[0]->alt->en, $alt1['en']);
        $this->assertEquals($testPage->images[1]->alt->en, $alt2['en']);
        $this->assertEquals($testPage->images[2]->alt->en, null);
        $this->assertEquals($testPage->images[3]->alt->en, null);

        $imageObj11 = Image::find($testPage->images[2]->id);
        $mediumHtml = $imageObj11->getHtmlImage();
        $this->assertEquals($mediumHtml, $testPage->images[2]->fs->medium);
    }

    /** @test */
    public function it_will_get_change_position_images_docs()
    {
        $response2 = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);


        $resSwap = $this->get('api/images/position/up/'.$res2->data[0]->id.'?token='.$this->token);

        $response2Swap = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
        $res2Swap = $response2Swap->getData();
        $this->assertTrue($res2Swap->success);
        $this->assertEquals(count($res2Swap->data), 2);

        $this->assertEquals($res2Swap->data[0]->name, $this->name2);

        $page = Page::findOrFail($this->pageId);
        $images =  $page->images;
        $arrImages = $images->toArray();

        $this->assertTrue($arrImages[0]['position'] < $arrImages[1]['position']);
        //$this->clear_imgs();
    }
}
