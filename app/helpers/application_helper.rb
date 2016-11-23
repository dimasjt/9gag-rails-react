module ApplicationHelper
  def type_active_class(type, match)
    type == match ? 'active' : ''
  end
end
