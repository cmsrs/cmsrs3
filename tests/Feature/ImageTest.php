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

    //private $token;
    private $testData;
    private $testDataMenu;
    private $menuId;

    public function setUp(): void
    {
        parent::setUp();
    }


    private function checkFileExists($imgDbData, $pageId)
    {
      foreach ($imgDbData as $key => $img) {
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
    public function it_will_add_pages_with_images()
    {
      $name1 = 'phpunittest1.jpg';
      $file1 = $this->getFixtureBase64($name1);

      $name2 = 'phpunittest2.jpg';
      $file2 = $this->getFixtureBase64($name2);

      $testImgData =
      [
          'title' => 'img Title',
          'images' => [
            ['name' => $name1, 'data' => $file1],
            ['name' => $name2, 'data' => $file2]
          ]
      ];

      $response = $this->post('api/pages?token='.$this->token, $testImgData);
      //var_dump($response); die('==========');


      $res = $response->getData();
      $this->assertTrue( $res->success );

      $this->assertNotEmpty( $pageId = $res->data->pageId);

      // $images = $testImgData['images'];
      // $out = Image::createImages($images, $pageId);
      // $this->assertEquals( count($out), 2);
      // $out2 = Image::getImagesByPageId();
      // var_dump($out2->toArray());


      $response2 = $this->get('api/images/'.$pageId.'?token='.$this->token);
      $res2 = $response2->getData();
      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 2);

      //swap possition
      //print_r($res2->data);
      $this->assertEquals($res2->data[0]->name, $name1);

      $resSwap = $this->get('api/images/position/up/'.$res2->data[0]->id.'?token='.$this->token);

      $response2Swap = $this->get('api/images/'.$pageId.'?token='.$this->token);
      $res2Swap = $response2Swap->getData();
      $this->assertTrue( $res2Swap->success );
      $this->assertEquals( count($res2Swap->data), 2);

      $this->assertEquals($res2Swap->data[0]->name, $name2);




      //delete first image
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


      $response22 = $this->get('api/images/'.$pageId.'?token='.$this->token);
      $res22 = $response22->getData();
      $this->assertTrue( $res22->success );
      $this->assertEquals( count($res22->data), 1);



      //file exist and delete
      $this->checkFileExists($res22->data, $pageId);


      //test fake
      $testImgData['images'][1]['name'] =  $name1;
      $this->assertEquals($testImgData['images'][0]['name'], $testImgData['images'][1]['name']);
      //var_dump($testImgData);
      $responseErr = $this->post('api/pages?token='.$this->token, $testImgData);
      //var_dump($responseErr);
      $resErr = $responseErr->getData();
      $this->assertFalse( $resErr->success );
      $this->assertNotEmpty( $resErr->error );








    }

    /** @test */
    /*
    public function it_will_delete_page()
    {
      $responseAll = $this->get('api/pages?token='.$this->token );
      $resAll = $responseAll->getData();
      //var_dump($resAll);
      $this->assertNotEmpty($resAll->data);
      $id = $resAll->data[0]->id;
      $this->assertNotEmpty($id);

      $response0 = $this->delete('api/pages/'.$id.'?token='.$this->token);
      $res0 = $response0->getData();
      $this->assertTrue( $res0->success );

      $responseAllAfter = $this->get('api/pages?token='.$this->token );
      $resAllAfter = $responseAllAfter->getData();
      //var_dump($resAllAfter);
      $this->assertEmpty($resAllAfter->data);
    }
    */






}
