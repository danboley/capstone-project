class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create
  skip_before_action :authorize, only: :destroy

  # for login feature
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ['Invalid email or password'] }, status: :unauthorized
    end
  end

  # for logout feature
  def destroy
    session.delete :user_id
    head :no_content
  end
end
