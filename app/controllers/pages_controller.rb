class PagesController < ApplicationController
  def index
    @posts = NineGag.index(nine_gag_url)
  end

  private

  def nine_gag_url
    if params[:section].present?
      "#{params[:section]}/#{params[:type]}"
    else
      'hot'
    end
  end
end
