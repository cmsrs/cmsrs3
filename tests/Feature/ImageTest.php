<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
use App\Image;
//use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
//use Tests\TestCase;

class ImageTest extends Base
{
    //use DatabaseMigrations;
    use RefreshDatabase;

    private $name1;
    private $name2;
    private $pageId;
    private $testImgData;

    public function setUp(): void
    {
        parent::setUp();

        $this->name1 = 'phpunittest1.jpg';
        $file1 = $this->getFixtureBase64($this->name1);

        $this->name2 = 'phpunittest2.jpg';
        $file2 = $this->getFixtureBase64($this->name2);

        $this->testImgData =
        [
            'title' => 'img Title',
            'images' => [
              ['name' => $this->name1, 'data' => $file1],
              ['name' => $this->name2, 'data' => $file2]
            ]
        ];

        $response = $this->post('api/pages?token='.$this->token, $this->testImgData);
        //var_dump($response); die('==========');


        $res = $response->getData();
        $this->assertTrue( $res->success );

        $this->assertNotEmpty( $pageId = $res->data->pageId);

        $this->pageId = $pageId;
    }

    // protected function tearDown(): void
    // {
    //   parent::tearDown();
    // }

    private function clear_imgs(){
      $pageId = $this->pageId;
      $responseClear = $this->get('api/images/'.$pageId.'?token='.$this->token);
      $resClear = $responseClear->getData();
      $this->assertTrue( $resClear->success );

      foreach ($resClear->data as $key => $img) {
        $pId = $img->page_id;
        $imgId = $img->id;
        $name = $img->name;
        $this->assertEquals($pageId, $pId);
        $imgDir = Image::getImageDir( $pId, $imgId );
        $imgPath = $imgDir.'/'.$name;

        $this->assertFileExists($imgPath);
        //var_dump($imgPath);

        //delete test files
        $fileName = pathinfo($name, PATHINFO_FILENAME );
        $imgPathDel = $imgDir.'/'.$fileName.'*.*';
        $filesToDel = glob($imgPathDel);
        $this->assertEquals(count($filesToDel), count(Image::$thumbs) + 1);

        foreach ($filesToDel as $path) {
          $this->assertFileExists($path);
          $this->assertNotEmpty(filesize($path));
          //echo "\n"."delete file: ".$path." file size: ".filesize($path);
          unlink($path);
          $this->assertFileNotExists($path);
        }

        $this->assertFileNotExists($imgPath);
      }
    }


    /** @test */
    public function it_will_get_pages_with_images()
    {
      $response2 = $this->get('api/images/'.$this->pageId.'?token='.$this->token);
      //var_dump($response2); die('-------------');

      $res2 = $response2->getData();
      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 2);

      foreach($res2->data as $imageUrl ){
        $fs = (array)$imageUrl->fs;

        $this->assertEquals(count($fs),  count(Image::$thumbs) + 1);
      }
      $this->assertEquals($res2->data[0]->name, $this->name1);


      //dump($res2->data);


      $this->clear_imgs();
    }

    /** @test */
    public function it_will_get_change_position_images()
    {
      $response2 = $this->get('api/images/'.$this->pageId.'?token='.$this->token);
      $res2 = $response2->getData();


      $resSwap = $this->get('api/images/position/up/'.$res2->data[0]->id.'?token='.$this->token);

      $response2Swap = $this->get('api/images/'.$this->pageId.'?token='.$this->token);
      $res2Swap = $response2Swap->getData();
      $this->assertTrue( $res2Swap->success );
      $this->assertEquals( count($res2Swap->data), 2);

      $this->assertEquals($res2Swap->data[0]->name, $this->name2);
      $this->clear_imgs();
    }

    /** @test */
    public function it_will_delete_image()
    {
      //delete first image
      $response2 = $this->get('api/images/'.$this->pageId.'?token='.$this->token);
      $res2 = $response2->getData();

      $imgToDel = $res2->data[0];
      $this->assertNotEmpty($imgToDel->id);

      $imgDir = Image::getImageDir( $imgToDel->page_id, $imgToDel->id );
      $file = $imgDir."/".$imgToDel->name;
      $this->assertFileExists($file);

      $fileName = pathinfo($imgToDel->name, PATHINFO_FILENAME );
      $fileExt = pathinfo($imgToDel->name, PATHINFO_EXTENSION );
      foreach (Image::$thumbs as $thumbName => $dimension) {
        $fileThumb = $imgDir.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
        $this->assertFileExists($fileThumb);
      }

      $responseDel = $this->delete('api/images/'.$imgToDel->id.'?token='.$this->token);
      $this->assertFileNotExists($file);

      foreach (Image::$thumbs as $thumbName => $dimension) {
        $fileThumb = $imgDir.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
        $this->assertFileNotExists($fileThumb);
      }


      $response22 = $this->get('api/images/'.$this->pageId.'?token='.$this->token);
      $res22 = $response22->getData();
      $this->assertTrue( $res22->success );
      $this->assertEquals( count($res22->data), 1);
      $this->clear_imgs();
    }


    /** @test */
    public function it_will_delete_page_with_images()
    {

      $responseAllBefore = $this->get('api/images/'.$this->pageId.'?token='.$this->token );
      $resAllBefore = $responseAllBefore->getData();

      foreach( $resAllBefore->data as $img ){
        $imagesFs =  Image::getAllImage($img);
        foreach( $imagesFs as $imgFs ){
          //echo $imgFs."\n";
          $this->assertFileExists($imgFs);
        }
      }


      $response0 = $this->delete('api/pages/'.$this->pageId.'?token='.$this->token);
      //var_dump($response0); die('============');

      $res0 = $response0->getData();
      $this->assertTrue( $res0->success );


      $responseAllAfter = $this->get('api/pages?token='.$this->token );
      $resAllAfter = $responseAllAfter->getData();
      $this->assertEmpty($resAllAfter->data);

      $responseAllImgAfter = $this->get('api/images/'.$this->pageId.'?token='.$this->token );
      $resAllImgAfter = $responseAllImgAfter->getData();
      $this->assertEmpty($resAllImgAfter->data);


      //echo "\n"."poooooo";

      foreach( $resAllBefore->data as $img ){
        $imagesFs =  Image::getAllImage($img);
        foreach( $imagesFs as $imgFs ){
          //echo($imgFs);
          $this->assertFileNotExists($imgFs);
        }
      }
      $this->clear_imgs();
    }


    /** @test */
    public function it_will_add_fake_pages_with_images()
    {

      //test fake
      $this->testImgData['images'][1]['name'] =  $this->name1;
      $this->assertEquals($this->testImgData['images'][0]['name'], $this->testImgData['images'][1]['name']);
      //var_dump($testImgData);
      $responseErr = $this->post('api/pages?token='.$this->token, $this->testImgData);
      //var_dump($responseErr);
      $resErr = $responseErr->getData();
      $this->assertFalse( $resErr->success );
      $this->assertNotEmpty( $resErr->error );


      //clear images all pages
      $response = $this->get('api/pages?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );

      foreach($res->data as $page){
        //dump($page->id);
        $this->pageId = $page->id;
        $this->clear_imgs();
      }
    }

}
