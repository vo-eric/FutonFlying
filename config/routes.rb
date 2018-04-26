Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :destroy] do
      resources :bookings, only: [:index, :show]
    end
    resources :bookings, only: [:index, :create, :show, :edit]
    resource :session, only: [:create, :destroy, :show]
  end
end
