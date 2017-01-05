module ApplicationHelper
  def type_active_class(type, match)
    type == match ? 'active' : ''
  end

  def default_meta_tags
    {
      title: 'Home',
      description: '9GAG dark mode, no ads, Ruby on Rails with ReactJS',
      keywords: %w(9gag rails ruby reactjs example api),
      og: {
        title: '9GAG dark mode',
        url: original_url,
        image: request.base_url + image_path('iseewhatyoudidthere.png'),
        description: '9GAG dark mode, Ruby on Rails with ReactJS',
        site_name: request.base_url,
        type: 'website'
      },
      reverse: true,
      site: 'Rails + ReactJS, 9GAG'
    }
  end

  def original_url
    request.base_url + request.original_fullpath
  end
end
