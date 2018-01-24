class PagesController < ApplicationController
  def index
  end

  def show
    @post = NineGag.show(params[:id])
  end

  private

  def nine_gag_url
    if params[:section] != 'home'
      "#{params[:section]}/#{params[:type]}"
    else
      'hot'
    end
  end
end
