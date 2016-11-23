class ApplicationHelperTest < ActionView::TestCase
  test "#type_active_class should return active if match" do
    assert_equal 'active', type_active_class('hot', 'hot')
    assert_equal '', type_active_class('hot', 'fresh')
  end
end
