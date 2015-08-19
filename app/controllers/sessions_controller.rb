class SessionsController < ApplicationController
 include ApplicationHelper

  def create
    check_user
    if check_user
      session[:id] = check_user.id
      redirect_to user_path(current_user.id)
    else
      redirect_to root_path
    end
  end

  def destroy
    session[:id] = nil
    redirect_to root_path
  end
end
