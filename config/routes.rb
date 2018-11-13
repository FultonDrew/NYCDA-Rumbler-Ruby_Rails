Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => "registrations"}
	root to: "blogs#index"

	resources :users
	resources :blogs do
		resources :comments
	end

end
