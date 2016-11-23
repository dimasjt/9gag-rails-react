Rails.application.routes.draw do
  root 'pages#index'

  get ':section/:type', to: 'pages#index', as: :index, defaults: { type: 'hot' }

  namespace :api, defaults: { format: :json } do
    get 'gag/:id', to: 'sections#show', as: :show
    get ':section/:type', to: 'sections#index', as: :section
  end
end
