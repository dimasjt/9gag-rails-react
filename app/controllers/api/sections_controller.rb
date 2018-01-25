class Api::SectionsController < Api::BaseController
  def index
    @posts = NineGag.index(section_url, params[:page])
    render json: { posts: @posts, next_page: @posts.last[:id] }, status: 200
  end

  def popular
    section = %w[trending hot fresh].include?(params[:section]) ? params[:section] : 'hot'
    gags = NineGag.send(params[:section], after: params[:next_page])

    render json: { posts: gags[:data], next_page: gags[:data].last[:id] }, status: 200
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
