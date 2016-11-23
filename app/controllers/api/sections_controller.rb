class Api::SectionsController < ApplicationController
  def index
    @posts = NineGag.index(section_url)
    render json: { posts: @posts }, status: 200
  end

  def show

  end

  private

  def section_url
    "#{params[:section]}/#{params[:type]}"
  end
end
