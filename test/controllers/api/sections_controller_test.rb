require 'test_helper'

class Api::SectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get array of posts" do
    get api_section_url(section: 'gif', type: 'hot'), xhr: true

    posts = JSON.parse(@response.body)

    assert_response :success
    assert_not_nil posts['posts']
    assert_not_nil posts['next_page']
  end

  test "should get show" do
    posts = NineGag.index('hot')
    get api_show_url(id: posts.last[:id])

    post = JSON.parse(@response.body)

    assert_response :success
    assert_not_nil post['post']
  end

end
