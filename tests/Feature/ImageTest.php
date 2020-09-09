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
    private $arrPageId;    
    private $testImgData;
    private $pagesData;

    //function __construct()
    //{
    //    parent::setUp();
    //}

    public function setUp(): void
    {

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
            'title' => 'img Title',
            'images' => [
              ['name' => $this->name1, 'data' => $file1],
              ['name' => $this->name2, 'data' => $file2]
            ]
        ];

        $response = $this->post('api/pages?token='.$this->token, $this->testImgData);
        //var_dump($response); 
        //die('==========');

        $res = $response->getData();

        $this->assertTrue( $res->success );

        $pageId = $res->data->pageId;
        $this->assertNotEmpty( $pageId );

        //var_dump($pageId);
        $this->pageData = $res->data->data;

        $this->pageId = $pageId;

        //var_dump($res->success);
        //var_dump($pageId);

    }

    protected function tearDown(): void
    {
        if(empty($this->arrPageId)){
          $this->clear_imgs();
        }else{
          foreach($this->arrPageId as $pageId){
            $this->pageId = $pageId;
            $this->clear_imgs();
          }
        }
        parent::tearDown();
    }


    private function clear_imgs(){
      $pageId = $this->pageId;

      $objPage = Page::find($pageId);
      if($objPage){  //delete img from fs.
        $objPage->delete();
      }    
    }

    /** @test */
    public function it_will_delete_page_with_images()
    {

      $responseAllBefore = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token );
      $resAllBefore = $responseAllBefore->getData();

      foreach( $resAllBefore->data as $img ){

        $imagesFs =  Image::getAllImage($img);
        //print_r(  $imagesFs );


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

      $responseAllImgAfter = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token );
      $resAllImgAfter = $responseAllImgAfter->getData();
      $this->assertEmpty($resAllImgAfter->data);


      //echo "\n"."poooooo";
      //  print_r($resAllBefore->data);

      foreach( $resAllBefore->data as $img ){
          //print_r($img ); die('===');
        $imagesFs =  Image::getAllImage($img);


        if($imagesFs){
            foreach( $imagesFs as $imgFs ){
                //echo($imgFs);
                $this->assertFileNotExists($imgFs);
            }

        }
      }
      //$this->clear_imgs();
    }


    /** @test */
    public function it_will_delete_image()
    {
      //delete first image
      $response2 = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
      $res2 = $response2->getData();

      $imgToDel = $res2->data[0];
      $this->assertNotEmpty($imgToDel->id);

      $imgDir = Image::getImageDir( 'page', $imgToDel->page_id, $imgToDel->id );
      $file = $imgDir."/".$imgToDel->name;
      $this->assertFileExists($file);

      $fileName = pathinfo($imgToDel->name, PATHINFO_FILENAME );
      $fileExt = pathinfo($imgToDel->name, PATHINFO_EXTENSION );
      foreach (Image::$thumbs as $thumbName => $dimension) {
        $fileThumb = $imgDir.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
        $this->assertFileExists($fileThumb);
      }

      $responseDel = $this->delete('api/images/'.$imgToDel->id.'?token='.$this->token);

       //var_dump($responseDel); die('===');

      $this->assertFileNotExists($file);

      foreach (Image::$thumbs as $thumbName => $dimension) {
        $fileThumb = $imgDir.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
        $this->assertFileNotExists($fileThumb);
      }


      $response22 = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
      $res22 = $response22->getData();
      $this->assertTrue( $res22->success );
      $this->assertEquals( count($res22->data), 1);
      //$this->clear_imgs();
    }

    /** @test */
    public function it_will_get_pages_with_images()
    {
      //  /'.$this->pageId.'

      $response2 = $this->get('api/pages?token='.$this->token);
      //var_dump($response2); die('-------------');
      $res2 = $response2->getData();
      $this->assertTrue( $res2->success );

      //print_r($res2); die();

      $this->assertEquals( count($res2->data), 1);

      $this->assertEquals( $res2->data[0]->id, $this->pageId);

      $this->assertEquals( count($res2->data[0]->images), count($this->testImgData['images']));

      //print_r($res2->data[0]->images[0]->fs);
      $this->assertEquals( count( (array)$res2->data[0]->images[0]->fs), count(Image::$thumbs) + 1);
      $this->assertEquals( count( (array)$res2->data[0]->images[1]->fs), count(Image::$thumbs) + 1);

      //dump($res2->data[0]->images[1]->fs->org);
      $this->assertEquals( pathinfo($res2->data[0]->images[1]->fs->org, PATHINFO_BASENAME ), $this->name2 );

      foreach ($res2->data[0]->images[0]->fs as $key => $urlImg) {
        $fs = public_path($urlImg);
        $this->assertFileExists($fs);
      }

      //$this->clear_imgs();
    }

    /** @test */
    public function it_will_get_images_by_page_id()
    {
      $response2 = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
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


      //$this->clear_imgs();
    }


    /** @test */
    public function it_will_add_pages_with_the_same_image_name()
    {

      //test fake
      $this->testImgData['images'][1]['name'] =  $this->name1;
      $this->assertEquals($this->testImgData['images'][0]['name'], $this->testImgData['images'][1]['name']);
      //var_dump($testImgData);
      $responseErr = $this->post('api/pages?token='.$this->token, $this->testImgData);
      //var_dump($responseErr);
      $resErr = $responseErr->getData();
      $this->assertTrue( $resErr->success );
      //$this->assertNotEmpty( $resErr->error );


      //clear images all pages
      $response = $this->get('api/pages?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );

      $this->assertEquals( count($res->data), 2);
      $this->assertEquals( count($res->data[1]->images), 2);

      $this->assertEquals($res->data[1]->images[0]->name,$res->data[1]->images[1]->name);

      //print_r($res->data);
      
      foreach($res->data as $page){
        //dump($page->id);
        //$this->pageId = $page->id;
        $this->arrPageId[] = $page->id;
        //$this->clear_imgs();
      }
    }


    /** @test */
    public function it_will_update_page_with_images()
    {
      $this->assertEquals(count( (array)$this->pageData->images), 2);
      $this->assertEquals($this->pageData->title, $this->testImgData['title']);

      $name3 = 'phpunittest3.jpg';
      $file3 = $this->getFixtureBase64($name3);

      //var_dump($this->pagesData);

      $updateTitle = 'Update img Title';
      $this->testImgData['title'] = 'Update img Title';
      $this->testImgData['images'] = [
        ['name' => $name3, 'data' => $file3]
      ];

      $response = $this->put('api/pages/'.$this->pageId.'?token='.$this->token, $this->testImgData);
      $res = $response->getData();
      $this->assertTrue( $res->success );

      $response2 = $this->get('api/pages?token='.$this->token);
      $res2 = $response2->getData();
      $this->assertTrue( $res2->success );
      //ages =  $res2->getData();
      $testPage = $res2->data[0];
      $this->assertEquals($testPage->id, $this->pageId);

      //print_r($pages);
      $this->assertEquals($testPage->title, $updateTitle);
      $this->assertEquals(count($testPage->images), 3);

      $this->assertEquals( pathinfo($testPage->images[2]->fs->org, PATHINFO_BASENAME ), $name3 );
      $this->assertEquals( count( (array)$testPage->images[2]->fs ),  count(Image::$thumbs) + 1 );


      $imageObj11 = Image::find($testPage->images[2]->id);
      $mediumHtml = $imageObj11->getHtmlImage();
      $this->assertEquals($mediumHtml, $testPage->images[2]->fs->medium);

      //$this->clear_imgs();
    }



    /** @test */
    public function it_will_get_change_position_images()
    {
      $response2 = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
      $res2 = $response2->getData();


      $resSwap = $this->get('api/images/position/up/'.$res2->data[0]->id.'?token='.$this->token);

      $response2Swap = $this->get('api/images/page/'.$this->pageId.'?token='.$this->token);
      $res2Swap = $response2Swap->getData();
      $this->assertTrue( $res2Swap->success );
      $this->assertEquals( count($res2Swap->data), 2);

      $this->assertEquals($res2Swap->data[0]->name, $this->name2);
      //$this->clear_imgs();
    }




}
