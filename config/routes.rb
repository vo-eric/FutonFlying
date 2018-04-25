Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :destroy] do
      resources :bookings, only: [:index]
    end
    resources :bookings, only: [:create, :edit]
    resource :session, only: [:create, :destroy, :show]
  end
end
