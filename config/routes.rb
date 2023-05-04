Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get 'users/', to: 'users#index'
  # post 'users/', to: 'users#create'
  # get 'users/new', to: 'users#new', as: 'new_user'
  # get 'users/edit', to: 'users#edit', as: 'edit_user'
  # get 'users/:id', to: 'users#show', as: 'user'
  # patch 'users/:id', to: 'users#update'
  # put 'users/:id', to: 'users#update'
  # delete 'users/:id', to: 'users#destroy'

  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :destroy]
    resource :session, only: [:show, :create, :destroy]

    resources :posts, only: [:create, :destroy, :index, :show, :update] do
      member do
        post :like, to: 'posts#like', as: 'like'
        delete :unlike, to: 'posts#unlike', as: 'unlike'
      end
    end

    resources :comments, only: [:create, :destroy, :index, :show, :update] do
      member do
        post :like, to: 'comments#like', as: 'like'
        delete :unlike, to: 'comments#unlike', as: 'unlike'
      end
    end

  end

  get '*path', to: "static_pages#frontend_index"

end
