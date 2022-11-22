class UsersController < ApplicationController
  def index
    render json: User.all, status: :ok
  end

  def show
    render json: find_user, status: :ok
  end

  private

  def find_user
    User.find(params[:id])
  end
end
