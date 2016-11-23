require 'test_helper'

class Api::SectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_sections_index_url
    assert_response :success
  end

  test "should get show" do
    get api_sections_show_url
    assert_response :success
  end

end
