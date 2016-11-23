class PagesController < ApplicationController
  def index
    @posts = NineGag.index(nine_gag_url, params[:page])

    respond_to do |format|
      format.html
      format.json { render json: { posts: @posts } }
    end
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
