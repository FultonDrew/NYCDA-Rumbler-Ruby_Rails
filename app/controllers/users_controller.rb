class UsersController < ApplicationController
def index
		@blogs = Blog.all
		@users = User.all
	end

	def new
		@user = User.new(user_params)
	end

	def create
		blog = Blog.new(blog_params)
		blog.user_id = current_user.id

		if blog.save
			redirect_to "/"
		else
			render "blogs/new"
		end
	end

	def show
		@user = User.find(params[:id])
		
	end

	def edit 
		user = User.find(params[:id])
		if user.update(user_params)
			redirect_to "/"
		else
			render "user/users/edit"
		end
	end

	def update
		user = User.find(params[:id])
		if user.update(user_params)
			redirect_to "/"
		else
			render "user/users/edit"
		end
	end

	def destroy
		blog = Blog.find(params[:id])
		if blog.destroy
			redirect_to "/"
		
		end
	end


private 
def user_params
	params.require(:user).permit(:email, :password)
end

end

