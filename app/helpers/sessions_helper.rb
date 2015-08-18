module SessionsHelper
  def current_user
    p '*' * 100
    p params[:session][:password]
    User.find_by(username: params[:session][:username]).try(:authenticate, params[:session][:password])
  end

end
