class SessionsController < ApplicationController
include SessionsHelper

  def create
    current_user
    if current_user
      session[:id] = current_user.id
      redirect_to user_path(current_user.id)
    else
      redirect_to root_path
    end
  end

  def destroy
  end
end
