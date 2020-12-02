<?php
namespace Tests\Feature;

use App\Page;
use App\Menu;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CommentTest extends Base
{
    use RefreshDatabase;

    private $name1;
    private $name2;

    private $testData;
    private $testPage;
    private $testMenu;
    private $menuId;

    private $pageId;

    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        parent::setUp();
        $this->createUser();

        $this->testMenu =
            [
                'name'     => 'books',
                'position' => 77
            ];

        $menu = new Menu($this->testMenu);
        $save = $menu->save();
        $this->assertTrue($save);


        $menuObj = $menu->all()->first();

        $this->menuId = $menuObj->id;

        $type = 'cms';

        $this->testPage =
        [
            'title' =>  ['en' => 'programmer'],
            'short_title' =>  ['en' =>'page1' ],
            'published' => 1,
            'commented' => 1,
            'position' => 7,
            'type' => $type,
            'content' => ['en' =>'content test133445' ],
            'menu_id' => $this->menuId
        ];

        $objPage = (new Page)->wrapCreate($this->testPage);        

        $res = $this->get('api/pages/type/' . $type . '?token=' . $this->token);

        $data = $res->getData();
        $this->pageId = $data->data[0]->id;

        $this->assertEquals($this->pageId, $objPage->id);
        $this->assertNotEmpty($this->pageId);
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    /** @test */
    public function it_will_deny_create_comment_fake_page()
    {

        $content = array(
            'content' => 'test comment - test123 - fake page'
        );

        $response = $this->post('api/comments/' . 134, $content);
        $response->assertStatus(404);
    }

    /** @test */
    public function it_will_deny_create_comment_page_not_commented()
    {

        $content = array(
            'content' => 'test comment - test123 - deny'
        );

        $this->testPage['commented'] = 0;
        $objPage = (new Page)->wrapCreate($this->testPage);
        $this->assertNotEmpty($objPage->id);


        $response = $this->post('api/comments/' . $objPage->id, $content);
        $response->assertStatus(404);
    }


    /** @test */
    public function it_will_create_comment_docs()
    {

        $content = array(
            'content' => 'test comment - test123'
        );

        $response = $this->post('api/comments/' . $this->pageId, $content);

        $res = $response->getData();
        $this->assertTrue($res->success);
    }

    /** @test */
    public function it_will_get_comment_docs()
    {

        $content1 = array(
            'content' => '111 test comment - test123'
        );

        $res1 = $this->post('api/comments/' . $this->pageId, $content1);
        $r1 = $res1->getData();
        $this->assertTrue($r1->success);


        $content2 = array(
            'content' => '222 test comment - test123'
        );

        $res2 = $this->post('api/comments/' . $this->pageId, $content2);
        $r2 = $res2->getData();
        $this->assertTrue($r2->success);


        $response = $this->get('api/comments/' . $this->pageId );
        $res = $response->getData();

        $this->assertTrue($res->success);
        $this->assertTrue(is_array($res->data));

        $this->assertEquals(2, count($res->data));
        $this->assertEquals($content2['content'], $res->data[1]->content);

    }


}
