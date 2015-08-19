class UsersController < ApplicationController
	include ApplicationHelper

	def show
		@user = User.find(session[:id])

	end

	def create
  		@user = User.new(user_params)
	  if @user.save
	  	session[:id] = @user.id
	    redirect_to user_path(current_user.id)
	  else
	    redirect_to root_path
	  end
	end

	private
	  def user_params
	    params.require(:user).permit(:username, :password)
	  end

end
