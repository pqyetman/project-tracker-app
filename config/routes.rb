Rails.application.routes.draw do
  
  resources :tasks 
  resources :projects do 
    resources :tasks, only: [:index, :show]
    end
  resources :employees
  resources :customers

  #Routes for auth and sign up
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
