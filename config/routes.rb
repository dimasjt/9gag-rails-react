Rails.application.routes.draw do
  root 'pages#index'

  get ':section/:type', to: 'pages#index', as: :index, defaults: { type: 'hot' }

  namespace :api, defaults: { format: :json } do
    get 'gif/hot', to: 'sections#index', as: :section
  end
end
