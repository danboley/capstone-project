class UsersController < ApplicationController
  skip_before_action :authorize, only: :create
  skip_before_action :authorize, only: :show

  def index
    render json: User.all, status: :ok
  end

  def show
    render json: find_user, status: :ok
  end

  # for autologin feature
  def me
    render json: @current_user
  end

  # modified for signup feature
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def find_user
    User.find(params[:id])
  end

  def user_params
    params.permit(:email, :password, :first_name, :last_name, :location, :pro_pic, :subscriber)
  end
end
