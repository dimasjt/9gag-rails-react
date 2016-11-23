require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get index_url(section: 'gif', type: 'hot')

    assert_response :success
    assert_select '.nav-types li.active a', 'Hot'
  end

  test "should to hot section when to root page" do
    get root_url

    assert_response :success
  end

end
