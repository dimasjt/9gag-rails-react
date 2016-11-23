class Api::SectionsController < ApplicationController
  def index
    @posts = NineGag.index(section_url)
    render json: { posts: @posts, next_page: @posts.last[:id] }, status: 200
  end

  def show
    @post = NineGag.show(params[:id])
    render json: { post: @post }, status: 200
  end

  private

  def section_url
    "#{params[:section]}/#{params[:type]}"
  end
end
