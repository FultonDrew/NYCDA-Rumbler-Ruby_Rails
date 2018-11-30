class RegistrationsController < Devise::RegistrationsController

  def after_update_path_for(user)
    user_session_path(current_user)
  end


  private

  def sign_up_params
    params.require(:user).permit( :name,
                                  :email,
                                  :fname,
                                  :lname,
                                  :username,
                                  :password,
                                  :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit( :name,
                                  :email,
                                  :fname,
                                  :lname,
                                  :username,
                                  :password,
                                  :password_confirmation,
                                  :current_password)
  end
end
