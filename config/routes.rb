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


  # The resources method is used to define RESTful routes for a resource

  # The member block within the resources block is used to define routes that operate on a single member of the resource, as opposed to the entire collection of resources. In this case, it's defining routes that operate on a single Comment or Post object.

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update, :destroy]
    resource :session, only: [:show, :create, :destroy]

    # These are special routes nested inside posts and comments just for the likes as likes do not get thier own controller or routes. Thier actions are handled in the posts and comments controller.

    # The two routes being defined within the member block are for liking and unliking a comment.
    resources :posts, only: [:create, :destroy, :index, :show, :update] do
      member do
        post :like, to: 'posts#like', as: 'like'
        delete :unlike, to: 'posts#unlike', as: 'unlike'
      end
    end

    # So when a user makes a POST request to /comments/:id/like, the like action in the CommentsController will be invoked, and when a user makes a DELETE request to /comments/:id/unlike, the unlike action will be invoked. The :id parameter will be replaced with the ID of the specific comment that the user is liking or unliking.

    resources :comments, only: [:create, :destroy, :index, :show, :update] do
      member do
        post :like, to: 'comments#like', as: 'like'
        delete :unlike, to: 'comments#unlike', as: 'unlike'
      end
    end

  end

  get '*path', to: "static_pages#frontend_index"

end
