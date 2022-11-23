Rails.application.routes.draw do
  resources :follows
  resources :comments
  resources :activities
  resources :users

  # Routing logic: fallback requests for React Router.
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  # signup/login/logout
  post '/signup', to: 'users#create'
  get '/me', to: 'users#me'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
