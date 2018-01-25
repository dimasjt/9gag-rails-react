Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do
    get 'gag/:id', to: 'sections#show', as: :show
    get ':section/:type', to: 'sections#index', as: :section
    get ':section', to: 'sections#popular', as: :popular, constraints: { section: /(fresh|trending|hot)/ }
  end

  get "*path", to: 'pages#index'
end
