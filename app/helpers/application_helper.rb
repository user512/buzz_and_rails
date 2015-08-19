module ApplicationHelper
    def check_user
      p '*' * 100
      p params
    User.find_by(username: params[:session][:username]).try(:authenticate, params[:session][:password])
  end

  def current_user
    User.find(session[:id])
  end
end
