Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # resources :groups do
  #   resources :transactions
  #   end
  resources :users do
    resources :transactions
    resources :transaction_users
  end

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
